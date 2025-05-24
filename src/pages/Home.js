import React from 'react';
import '../App.css';
import MainContent from '../components/Main';
import CardSection from '../components/CardSection';
import CardMain from '../components/CardMain';
import SectionAboutMe from '../components/SectionAboutMe';
import VerticalStepper from '../components/Stepper';
import BtnBackToTop from '../components/BtnBackToTop';
import Cookies from '../components/Cookies';

import { SiDelphi, SiDbeaver, SiNotion } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaPhoenixSquadron, FaGitAlt, FaFigma , FaDocker } from "react-icons/fa";

export default function Home(){

    const tools = [
        {
          icon: <FaFigma  size={24} />,
          name: "Figma",
          description: "Design de interface e prototipagem."
        },
        {
          icon: <SiNotion size={24} />,
          name: "Notion",
          description: "Plataforma multifuncional para organização de projetos, gestão de tarefas e documentação colaborativa."
        },
        {
          icon: <FaGitAlt size={24} />,
          name: "Git",
          description: "Controle de versão e colaboração."
        },
        {
          icon: <SiDelphi size={24} />,
          name: "Delphi 10.3",
          description: "IDE para desenvolvimento rápido de aplicativos nativos multiplataforma, especializada em Windows e com suporte estendido para mobile."
        },
        {
          icon: <VscVscode size={24} />,
          name: "VS Code",
          description: "Ambiente de desenvolvimento integrado."
        },
        {
          icon: <FaDocker size={24} />,
          name: "Docker",
          description: "Containerização de aplicações para facilitar o desenvolvimento, teste e implantação em ambientes isolados."
        },
        {
          icon: <SiDbeaver size={24} />,
          name: "DBeaver",
          description: "Gerenciamento e visualização de banco de dados."
        },
        {
          icon: <BiLogoPostgresql size={24} />,
          name: "PostgreSQL",
          description: "Banco de dados relacional robusto, utilizado para armazenamento de dados e consultas complexas em projetos de diferentes tamanhos."
        },
        {
          icon: <FaPhoenixSquadron size={24} />,
          name: "Firebird",
          description: "Banco de dados leve e eficiente, ideal para aplicações embarcadas e sistemas que exigem alta performance e baixo consumo de recursos."
        }
        
      ];

    return(
        <div className='App' >
            <MainContent></MainContent>
            <CardMain></CardMain>
            <CardSection></CardSection>
            <SectionAboutMe></SectionAboutMe>
            <VerticalStepper
                tools={tools} title="Ferramentas"
             />
            <BtnBackToTop/>
            <Cookies/>
        </div>
    )
}