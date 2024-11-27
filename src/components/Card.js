import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import 'animate.css/animate.min.css';

import styles from '../components/Card.module.css';
import gifDesktopWLNutrion from '../assets/gifProjects/Wlnutrion.gif';
import gifMobileWLNutrion from '../assets/gifProjects/WLN-mobile2.gif';


const projects = [
    {
        id: 1,
        gifDesktop: gifDesktopWLNutrion,
        gifMobile: gifMobileWLNutrion,
        title: 'Wlnutrion'
    }
];

export default function Card() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleNextProject = () => {
        setCurrentProjectIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePreviousProject = () => {
        setCurrentProjectIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const handleProjectClick = () => {
        navigate(`projetos/${currentProject.id}`);
    };

    const currentProject = projects[currentProjectIndex];

    return (
        <div className={styles.Card}>
            <div className={`${styles.CardHeader} animate__animated animate__flash animate__infinite animate__delay-5s animate__slower`}>
                <div className={styles.CardHeaderContent}>
                    <h1>Projetos</h1>
                </div>                
            </div>
            <div className={styles.CardContainerContent}>
                <button className={styles.BackProject} onClick={handlePreviousProject}>
                    <IoChevronBackOutline />
                </button>
                <div className={styles.CardContent} onClick={handleProjectClick} >
                    {windowSize.width > 768 ? (
                        <img className={styles.GifDesktop} src={currentProject.gifDesktop} alt={currentProject.title} />
                    ) : (
                        <img className={styles.GifMobile} src={currentProject.gifMobile} alt={currentProject.title} />
                    )}
                    <div className={styles.OverlayText}> <FaEye/> Ver mais</div>
                </div>
                <button className={styles.NextProject} onClick={handleNextProject}>
                    <IoChevronForwardOutline />
                </button>
            </div>
        </div>
    );
}
