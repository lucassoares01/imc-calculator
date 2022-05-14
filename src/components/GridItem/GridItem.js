import styles from './GridItem.module.css'
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'


const gridItem = (props) =>{
    return (
        <div className={styles.main} style={{backgroundColor: props.data.color}}>
            <div className={styles.gridIcon}>
                <img className={props.data.icon === 'up' ? styles.gridImage1 : styles.gridImage2} src={props.data.icon === 'up' ? upImage : downImage} width='30'/>
            </div>
            <div className={styles.gridTitle}>
                {props.data.title}
            </div>
            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{props.data.imc[0]} e {props.data.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}

export default gridItem;