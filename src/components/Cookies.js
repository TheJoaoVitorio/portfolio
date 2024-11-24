import Lottie from 'lottie-react';
import LottieCookies from '../assets/lotties/cookies.json';
import styles from '../components/Cookies.module.css';
import { useState, useEffect } from 'react';

export default function Cookies() {
    const [showCookiePopup, setShowCookiePopup] = useState(false);

    const generateUUID = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };

    const setCookie = (name, value) => {
        document.cookie = `${name}=${value}; path=/`;
    };

    const getCookie = (name) => {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) {
            return match[2];
        }
        return null;
    };

    const checkCookieUser = () => {
        const userId = getCookie("userId");
        if (!userId) {
            const newUserId = generateUUID();
            setCookie("userId", newUserId);
        }
    };

    const handleAcceptCookies = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setShowCookiePopup(false);
        checkCookieUser();
    };


    useEffect(() => {
        // Verifica se o usuário já aceitou ou rejeitou os cookies
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        if (!cookiesAccepted) {
            // Se não houver registro, exibe o pop-up de cookies
            setShowCookiePopup(true);
        }
    }, []);

    return (
        <>
            {showCookiePopup && (
                <div className={styles.CookiesContainer}>
                    <div className={styles.CookiesContent}>
                        <div className={styles.CookiesImage}>
                            <Lottie
                                animationData={LottieCookies}
                                loop={true}
                                style={{ width: 100, height: 100 }}
                            />
                        </div>
                        <div className={styles.CookiesSectionRight}>
                            <div className={styles.CookiesText}>
                                <h1>Usamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com o uso de cookies.</h1>
                            </div>
                            <div className={styles.CookiesButtons}>
                                <button onClick={handleAcceptCookies} className={styles.CookiesButton}>Não Permitir</button>
                                <button onClick={handleAcceptCookies} className={styles.CookiesButton}>Permitir</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
