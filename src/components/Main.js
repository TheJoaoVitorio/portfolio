import { useEffect, useState } from "react";
import styles from "../components/Main.module.css";
import 'animate.css';

export default function MainContent() {
    const [idade, setIdade] = useState(0);

    useEffect(() => {
        const calcularIdade = () => {
            const dataAtual = new Date();
            const dataNascimento = new Date(2003, 10, 24); //o mês é 0-indexado (0 = Janeiro, 10 = Novembro)
            let idadeAtual = dataAtual.getFullYear() - dataNascimento.getFullYear();

            
            const mesAtual = dataAtual.getMonth();
            const diaAtual = dataAtual.getDate();
            if (
                mesAtual < dataNascimento.getMonth() || 
                (mesAtual === dataNascimento.getMonth() && diaAtual < dataNascimento.getDate())
            ) {
                idadeAtual--;
            }

            return idadeAtual;
        };

        setIdade(calcularIdade());
    }, []);

    return (
        <div className={styles.main}>
            <div>
                <h1 
                    data-aos="fade-up" 
                    className={`animate__animated animate__headShake`}>
                    Olá, me chamo João Vitório,<br />
                    tenho {idade} anos e sou Full Stack Developer.
                </h1>
            </div>
        </div>
    );
}
