export default function SectionAboutMe(){
    return(
        <div className='SectionAboutMeContainer'>
            <div className='SectionAboutMeHeader' >
                <h1>Sobre mim</h1>
            </div>
    
            <div className="SectionAboutMeContent">
                <div className="SectionAboutMeText" >
                    <p> Atualmente trabalho com <span className="BlueColor" >Delphi</span> em uma empresa especializada em automação comercial. 
                        Minha trajetória na programação começou com <span className="BlueColor" >Python</span>, onde desenvolvi projetos utilizando o framework  
                        <span className="BlueColor" > Django</span>.<br></br> <br></br>
                        Nesses projetos, usei <span className="BlueColor" >JavaScript</span> para auxiliar na criação de APIs e enriquecer as funcionalidades do sistema. 
                        Hoje, com <span className="BlueColor" >Delphi</span>, atuo na conversão de dados para sistemas ERP, realizando consultas <span className="BlueColor" >SQL</span> e integrando diferentes bases de dados para garantir 
                        a migração eficiente e precisa das informações.                       
                    </p>
                </div>
            </div>
            <style jsx>{`
                
                .BlueColor {
                    color: #1DA1F2;
                    font-weight:600;
                }

                .SectionAboutMeContainer{
                    margin: 0 auto;
                    width: 50%;
                    display: flex;
                    flex-direction:column;
                    justify-content:center;
                    aligin-items:center;
                    text-align:center;
                    padding:40px 0;
                    color: whitesmoke;
                }
                .SectionAboutMeHeader{
                    font-size:20px;
                }
                .SectionAboutMeContent{
                    //width:70%;
                    // border: 3px solid cyan;
                    display:flex;
                    align-items:center;
                    justify-content:center;

                }
                .SectionAboutMeText{
                    // border: 2px solid yellow;
                    // width:70%;
                    letter-spacing: 1.5px;
                    text-align:justify;
                }    

                @media (max-width:700px) {
                    .SectionAboutMeContainer {
                        width: 80%;
                    }
                }
            `}</style>
        </div>
        );
}