import { useState } from 'react'
import styles from './App.module.css'
import {levels, calculateIMC} from './helpers/imc'
import GridItem from './components/GridItem/GridItem'
import leftArrowImage from './assets/leftarrow.png'

function App() {
  const [heigthField, setHeight] = useState(0)
  const [weightField, setWeight] = useState(0)
  const  [toShow, setToShow] = useState(null)

  const setHeightHandler = (event) =>{
    setHeight(event.target.value)
  }

  const setWeightHandler = (event) =>{
    setWeight(event.target.value)
  }

  const calculateHandler = (event) =>{
    
    event.preventDefault()
    if(!heigthField && !weightField){
      alert('Some field is empty !')
      return
    }

    setToShow(calculateIMC(heigthField, weightField))
  }

  const handleBackButton = () =>{
    setToShow(null)
    setHeight(0)
    setWeight(0)
  }

  return (
    <div className={styles.main}>
      <header className={styles.headerContainer}>
        <div className={styles.logo}>IMC</div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>
            Lembre-se que o calculo do IMC não é uma forma definitiva de determinar
            sua condição de saúde. Caso sinta algo de errado, procure um médico.
          </p>

          <form onSubmit={calculateHandler}>
            <input
            className={styles.input}
            type='number'
            placeholder='Informe a sua altura Ex: 1.70'
            value={heigthField > 0 ? heigthField : ''}
            onChange={setHeightHandler}
            disabled={toShow ? true : false}
            />

            <input 
            className={styles.input}
            type='number'
            placeholder='Informe o seu peso em kg Ex: 72'
            value={weightField > 0 ? weightField : ''}
            onChange={setWeightHandler}
            disabled={toShow ? true : false}
            />

            <button type='submit' disabled={toShow ? true : false}>Calcular</button>
          </form>
        </div>
        
        <div className={styles.rightSide}>
            {
              !toShow &&
              <div className={styles.grid}>
                {
                  levels.map((item, index)=>{
                    return <GridItem key={index} data={item}/>
                  })
                }
              </div>
            }

            {
              toShow &&
              <div className={styles.rightBig}>
                <div className={styles.rightArrow} onClick={handleBackButton}>
                  <img src={leftArrowImage} width={25}/>
                </div>
                <GridItem item={toShow} data={toShow}></GridItem>
              </div>
            }
          
        </div>
      </div>
    </div>
  );
}

export default App;
