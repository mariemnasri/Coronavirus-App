import React  from "react";
import "../Css/laboratoire.css";
import LocationMap from "./Map";
function Laboratoire (){
  
    return (
       
 <div className="lab ">
    <h1>Laboratoires Disponibles </h1>
    <div className="container">
         <LocationMap/>
    </div>
   
 </div>
        
    );
  }
  export default Laboratoire;