import styles from '../components/CardSection.module.css';
import CardItem from './CardItem';
import DelphiLogo from '../assets/img/icon-delphi.png';
import { FaPython } from 'react-icons/fa';
import { SiDjango } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TbSql } from "react-icons/tb";


export default function CardSection(){
    return(
        <div className={styles.CardSectionContainer} >
            <div className={styles.CardSectionHeaderText} >
                <h2>Tecnologias</h2>
            </div>
            <div className={styles.CardSectionContent} >
                <div className={styles.CardSectionCollumnLeft} >
                    <CardItem
                        icon={DelphiLogo}
                        styleItemPhoto='CardItemStyleDelphi'
                        textHeader='Delphi'
                        textLeft='Language'
                        textRight='Now'
                    />
                    <CardItem
                        icon={IoLogoJavascript}
                        styleItemPhoto='CardItemStyleJavascript'
                        textHeader='Javascript'
                        textLeft='Language'
                        textRight='2024'
                    />
                    <CardItem
                        icon={FaPython}
                        styleItemPhoto='CardItemStylePython'
                        textHeader='Python'
                        textLeft='Language'
                        textRight='2023'    
                    />
                </div>
                <div className={styles.CardSectionCollumnRight} >
                    <CardItem
                        icon={TbSql}
                        styleItemPhoto='CardItemStyleSQL'
                        textHeader='SQL'
                        textLeft='Language'
                        textRight='2024'
                    />
                    <CardItem
                        icon={SiDjango}
                        styleItemPhoto='CardItemStyleDjango'
                        textHeader='Django'
                        textLeft='Framework'
                        textRight='2023'    
                    />
                </div>
            </div>
        </div>
    )
}