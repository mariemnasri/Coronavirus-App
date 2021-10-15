import React  from "react";
import Conseils from "./Conseils";
import "../Css/Home.css";

function Proteger (){
  
    return (
       <div className="container-fluid mt-5 with-bg">
          <br/>
          
            <h1>
             <span className="title-proteg">Comment se protéger de Covid-19 ?</span>
            </h1>
          
          <br/><br/>
          <div className="parag-row">
             <div className="parag-info">
             <p>Tenez-vous au courant des dernières informations sur la flambée de COVID-19,disponibles sur le site Web de l’OMS et auprès</p>
             <p>des autorités de santé publique nationales et locales.La COVID-19 continue de toucher surtout la population de la Chine,</p> 
             <p>même si des flambées sévissent dans d’autres pays.La plupart des personnes infectées présentent des symptômes bénins </p> 
             <p>et guérissent, mais d’autres peuvent avoir une forme plus grave.</p>    
             <p><b>Prenez soin de votre santé et protégez les autres en suivant les conseils ci-après :</b></p>
          </div></div>
        
          <br/><br/><br/><br/>
          <div>
          <Conseils />
          </div>     
       </div>
       
 
        
    );
  }
  export default Proteger;