import styles from "../components/Main.module.css"
import 'animate.css';

export default function MainContent(){
    return(
        <div className={styles.main} >
            <div>
                <h1 data-aos="fade-up" className={`animate__animated animate__headShake `}  >Olá, me chamo João Vitório,<br></br>tenho 20 anos e sou Full Stack Developer.</h1>
            </div>
        </div>
    )
}