import React from 'react';
import styles from '../components/CardItem.module.css';

export default function CardItem({ icon, styleItemPhoto , textHeader, textLeft, textRight }) {
    return (
        <div className={`${styles.CardItem}`}>
            <div className={`${styles.CardItemPhoto} ${styles[styleItemPhoto]}`}>
                {/* Verifica se o ícone é um componente (função) */}
                {typeof icon === 'function' ? (
                    // Renderiza o componente de ícone
                    React.createElement(icon, { className: styles.CardItemIcon })
                ) : (
                    // Renderiza a imagem
                    <img src={icon} alt={textHeader} className={styles.CardItemImage} />
                )}
            </div>
            <div className={styles.CardItemContent}>
                <div className={styles.CardItemHeader}>
                    <h1>{textHeader}</h1>
                </div>
                <div className={styles.CardItemFooter}>
                    <div className={styles.CardItemTextLeft}>
                        <h2>{textLeft}</h2>
                    </div>
                    <div className={styles.CardItemTextRight}>
                        <h2>{textRight}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}