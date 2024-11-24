import styles from '../components/Footer.module.css'
import { FaGithub } from "react-icons/fa";
import Lottie from 'lottie-react'; 
import LottieReactIcon from '../assets/lotties/Animation - 1729298523997.json'

export default function Footer(){
    return(
        <footer className={styles.FooterContainer} >
            <div className={styles.FooterContentText} >
                <div className={styles.FooterTextLeft} >
                    <h2>Portifolio by  <span>João Vitório</span> </h2>
                </div>
                <div className={styles.FooterTextRight}  >
                    <a className={styles.FooterTextGitHub}  href='https://github.com/TheJoaoVitorio' >
                        <FaGithub/>
                    </a>
                    <div className={styles.BadgeReact} >
                        <div className={styles.BadgeReactText} >
                            <h2>Made with </h2> 
                        </div>
                        <div className={styles.BadgeIconReact} > 
                        <Lottie 
                            animationData={LottieReactIcon} // Arquivo JSON da animação
                            loop={true} 
                            style={{ width: 30, height: 30 }} // Estilo da animação
                        />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}