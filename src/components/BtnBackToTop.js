import React, { useState, useEffect } from 'react';
import { IoChevronUpOutline } from "react-icons/io5";
import styles from '../components/BtnBackToTop.module.css'

export default function BtnBackToTop(){
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const [isVisible, setVisible] = useState(false);

    useEffect(()=>{
        const toggleVisibility = ()=>{
            if (window.pageYOffset > 100){
                setVisible(true)
            }else{
                setVisible(false)
            }
        }
        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return(
        <div>
            { isVisible && (
                <button className={styles.btnBackToTop} onClick={scrollToTop} >            
                    <IoChevronUpOutline/>
                </button>        
            )}
        </div>
        
    )
}