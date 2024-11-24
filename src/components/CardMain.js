import styles from '../components/CardMain.module.css'
import Card from './Card'

export default function CardMain(){
    return(
        <div className={styles.cardMain} >
            <Card/>
        </div>
    )
}