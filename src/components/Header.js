import { useEffect } from 'react';
import styles from '../components/Header.module.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Header() {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(`.${styles.headerContent}`);
            if (window.scrollY > 40) {
                header.classList.add(styles.headerFixed);
                header.classList.add(styles.scrolled);
            } else {
                header.classList.remove(styles.headerFixed);
                header.classList.remove(styles.scrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.header} ${styles.headerTextColor}`}>
            <div className={styles.headerContent}>
                <div className={styles.text1Em}>
                    <a href='/' >
                        João Vitório
                    </a>
                </div>
                <div className={styles.headerIcons}>
                    <a href='https://www.linkedin.com/in/jo%C3%A3o-vit%C3%B3rio/' className={`${styles.icon} ${styles.headerTextColor}`}>
                        <FaLinkedin />
                    </a>
                    <a href='mailto:joaovtr999x@gmail.com' className={`${styles.icon} ${styles.headerTextColor}`}>
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </header>
    );
}
