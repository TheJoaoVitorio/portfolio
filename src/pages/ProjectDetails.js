import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../pages/ProjectDetails.module.css';

import wlnDesktop from '../assets/imgProjects/01_WLN/WLNutrion_LandingPage.png';
import wlnLogin from '../assets/imgProjects/01_WLN/WLN-LoginMobile.png';
import wlnHome from '../assets/imgProjects/01_WLN/WLN-HomeMobile.png';
import wlnReceitas from '../assets/imgProjects/01_WLN/WLN-ReceitasMobile.png';
import wlnCriandoReceitas from '../assets/imgProjects/01_WLN/WLN-CriandoReceitaMobile.png';
import wlnCriandoIngredientes from '../assets/imgProjects/01_WLN/WLN-CriandoIngredienteMobile.png';
import wlnCriandoReceitaPDF from '../assets/imgProjects/01_WLN/WLN-CriandoReceitaPDFMobile.png';
import wlnContateNos from '../assets/imgProjects/01_WLN/WLN-ContateNosMobile.png';
import wlnGerenciarConta from '../assets/imgProjects/01_WLN/WLN-GerenciarContaMobile.png';
import wlnMobile from '../assets/imgProjects/01_WLN/WLN-LandPageMobile.png'


import { IoHeart } from 'react-icons/io5';
import { FaEye } from 'react-icons/fa';
import { FaUserLock, FaUtensils, FaClipboardList, FaUserEdit, FaFilePdf, FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import { BiLogoJavascript, BiLogoDjango,BiLogoPython } from 'react-icons/bi';
import { SiBootstrap } from "react-icons/si";
import axios from 'axios';
import Stepper from '../components/Stepper';
import BtnBackToTop from '../components/BtnBackToTop';

const projects = [
    {
      id: 1,
      title: 'WLNutrion',
      description: 'WLNutrion é um sistema web que permite a pequenos produtores de alimentos gerar tabelas nutricionais para seus produtos.',
      images: [
        wlnDesktop, //0
        wlnLogin,
        wlnHome,
        wlnReceitas,
        wlnCriandoReceitas,
        wlnCriandoIngredientes,
        wlnCriandoReceitaPDF,
        wlnContateNos,
        wlnGerenciarConta
      ],
      languages: {
        'Django': {
          icon: BiLogoDjango,
          style: 'badgeStyleDjango'
        },
        'JavaScript': {
          icon: BiLogoJavascript,
          style: 'styleJavascript'
        },
        'Python':{
            icon : BiLogoPython,
            style:'stylePython'
        }
      },
      features: [
        { name: 'Autenticação de Usuário', description: 'O sistema possui autenticação de usuários.', icon: FaUserLock },
        { name: 'Gerar Tabelas Nutricionais', description: 'Através da receita criada é possivel gerar o pdf da tabela nutricional.', icon: FaUtensils },
        { name: 'Gerenciamento de Ingredientes', description: 'Criar, editar e apagar ingredientes para utilizar nas receitas.', icon: FaClipboardList },
        { name: 'Customização de Perfil', description: 'Permite ao usuário personalizar seu perfil.', icon: FaUserEdit },
        { name: 'Geração de PDF', description: 'Gerar um PDF com os detalhes da tabela nutricional.', icon: FaFilePdf },
        { name: 'Suporte a PWA', description: 'O sistema é compatível com Progressive Web App.', icon: FaMobileAlt },
        { name: 'Envio de Email', description: 'Envio de emails utilizando protocolo SMTP.', icon: FaEnvelope }
      ]
    }
  ];

export default function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find((project) => project.id === parseInt(id));
    
    const api = axios.create({
        baseURL: 'https://deploy-free-test.vercel.app/'
    });

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [stats, setStats] = useState({
        likes: 0,
        views: 0
    });

    const [liked, setLiked] = useState(false);

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


    const [isMobile, setIsMobile] = useState(false);  
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
            
            setIsMobile(window.innerWidth < 385);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {
        if (!project) return;

        // Verifica se já curtiu
        const isLiked = localStorage.getItem(`projeto_${project.id}_liked`);
        setLiked(isLiked === 'true');

        // Carrega dados do projeto
        const loadProjectData = async () => {
            try {
                console.log(api);
                const response = await api.get(`/projetos/${project.id}`);
                setStats({
                    likes: response.data.likes || 0,
                    views: response.data.views || 0
                });
            } catch (error) {
                console.error('Erro ao carregar dados:', error);
            }
        };

        loadProjectData();
    }, [project]);


    const handleLike = async () => {
        if (liked) return;

        try {
            await api.post(`/projetos/${project.id}/like`);
            setStats(prev => ({
                ...prev,
                likes: prev.likes + 1
            }));
            setLiked(true);
            localStorage.setItem(`projeto_${project.id}_liked`, 'true');
        } catch (error) {
            console.error('Erro ao curtir:', error);
        }
    };

    if (!project) {
        return <p>Projeto não encontrado.</p>;
    }   

    return (
        <div className={styles.ProjectDetailsContainer}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className={styles.ProjectDetailsImageApresentation}>
                {windowSize.width > 900 ?(
                    <img src={project.images[0]} alt="Projeto" />
                ) :(
                    <img src={wlnMobile} alt="Projeto" />
                )}
            </div>
            <div className={styles.sectionDetailsApresentation}>
                <div className={styles.sectionDetailsApresentationContent}>
                    <div className={styles.badgesContainer}>
                        {project.languages && Object.entries(project.languages).map(([language, { icon: Icon, style }]) => (
                            <div key={language} className={`${styles.badgeDetailsLanguages} ${styles[style]}`}>
                                <Icon className={styles.iconStyle} />
                                {language}
                            </div>
                        ))}
                    </div>
                    <div className={styles.sectionDetailsApresentationReactions}>
                        <div className={`${styles.sectionDetailsApresentationLikes} ${liked ? styles.liked : ''}`} onClick={handleLike}>
                            <IoHeart className={`${styles.iconLike} ${liked ? styles.liked : ''}`} /> {stats.likes}
                        </div>
                        <div className={styles.sectionDetailsApresentationViews}>
                            <FaEye /> {stats.likes}
                        </div>
                    </div>
                </div>
            </div>

          
            <div className={`${styles.sectionAboutProjectTextContainer} ${isMobile ? styles.mobileStyle : ''}`}
            >
                <Stepper 
                    tools={project.features}
                    title='Sobre o projeto'
                    isFeature={true}
                />
            </div>
            

            <div className={styles.sectionAboutProjectContainer}>
                {project.images.slice(1).map((image, index) => (
                    <div key={index} className={styles.sectionAboutProjectContent}>
                        <div className={styles.sectionAboutProjectImage}>
                            <img src={image} alt={`WLNutrion - imagem ${index + 1}`} />
                        </div>
                    </div>
                ))}
            </div>
            <BtnBackToTop/>
        </div>
        
    );
}