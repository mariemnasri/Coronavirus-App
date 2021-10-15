import React, { useEffect, useState } from "react";
import "../Css/DatePicker.css"
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



function DatePicker ({auth}){
    const [dataAppointments,setDataAppointments] = useState()
    const [dataLabo,setDataLabo]=useState()
    const email = window.location.href.substring(40)

    useEffect(()=>
    {
    fetch('http://localhost:5000/api/users/getthisappointments/labo',{ 
      headers: {
        'Content-Type': 'application/json',
      },
     method : 'POST',
     body : JSON.stringify({email:email})

  })
  .then(response =>  response.json())
  .then(res => {setDataAppointments(res);console.log(dataAppointments+"=")} ,
  )
  .catch(err=> console.log(err))
  fetch('http://localhost:5000/api/users/getthis/labo',{ 
    headers: {
      'Content-Type': 'application/json',
    },
   method : 'POST',
   body : JSON.stringify({email:email})

})
.then(response =>  response.json())
.then(res => {setDataLabo(res);} ,
)
.catch(err=> console.log(err))
},[])
const {user}=auth



var d = new Date();
var weekday = new Array(7);
weekday[0] = "Dimanche";
weekday[1] = "Lundi";
weekday[2] = "Mardi";
weekday[3] = "Mercredi";
weekday[4] = "Jeudi";
weekday[5] = "Vendredi";
weekday[6] = "Samedi";

var month = new Array(12);
month[0] = "Janvier";
month[1] = "Février";
month[2] = "Mars";
month[3] = "Avril";
month[4] = "Mai";
month[5] = "Juin";
month[6] = "Juillet";
month[7] = "Aout";
month[8] = "Septembre";
month[9] = "Octobre";
month[10] = "Novembre";
month[11] = "Décembre";
var m = month[d.getMonth()];
const day1 = day(0);
const day2 = day(1);
const day3 = day(2);
const day4 = day(3);
const day5 = day(4);
const day6 = day(5);
const day7 = day(6);
var y =  d.getFullYear();
function Time (actualDate,appointment){
    if ((actualDate===(d.getDate())+"/"+m+"/"+y)&& parseInt(d.getHours())>parseInt(appointment.substring(0,2))){
        return true
    }
    else return false
}

async function onClickLabo(fullDate){
    
        await fetch('http://localhost:5000/api/users/add_appointment/labo',{ 
          headers: {
            'Content-Type': 'application/json',
          },
         method : 'POST',
         body : JSON.stringify({mail:email,appointment:{time:fullDate,User:{name:user.name,lastname:user.lastname,email:user.email}}})
    
      })
      .then(response =>  response.json())
      .then(alert("Votre Rendez-vous à été pris avec succéss !"))
      .catch(err=> console.log(err))
}
async function onClickUser(fullDate,dataLabo){
    
    await fetch('http://localhost:5000/api/users/add_appointment/user',{ 
      headers: {
        'Content-Type': 'application/json',
      },
     method : 'POST',
     body : JSON.stringify({email:user.email,appointment:{time:fullDate,Labo:{name:dataLabo.name,description:dataLabo.description,tel:dataLabo.tel}}})

  })
  .then(response =>  response.json())
  .then(console.log("===="+fullDate+"====="+user.email))
  .catch(err=> console.log(err))
}
function renderAppointments(){
    var i
    let Array=[]
    
    if(dataAppointments){
    for(i=0; i<4;i++){
        Array.push(
            <div className="row">
                {renderApp(i)}
            </div>
        )
    }
    return(Array)}
}
function renderApp(i){
    
    const listAppointments=["08:00-10:00","10:00-12:00","13:00-15:00","15:00-17:00"]
    let ArrayDate=[]
    for(let j=0;j<7;j++){
        const val = j
        const actualDate=(d.getDate()+val)+"/"+m+"/"+y
        const fullDate=actualDate+"  "+listAppointments[i];
        
        if(
        dataAppointments.filter(res => res.time===fullDate).length || Time(actualDate,listAppointments[i])){
        ArrayDate.push (
        <div  className="col text-center" >
        <button  disabled className="btn btn-danger m-1">{listAppointments[i]}</button>
        </div>
     )}
     else  (
         ArrayDate.push (
        <div className="col text-center">
            <Popup modal nested trigger={<button  className="btn btn-success m-1">{listAppointments[i]}</button>} position="right center">
          <div className="container text-center">
            <h3 className="header">Confirmation</h3>
            
              <h4>Êtes vous sûre de vouloir continuer ? </h4><br></br>
              <h5>Date de rendez-vous :  {fullDate} </h5>
              <button className="btn btn-success" onClick={()=> {onClickLabo(fullDate);onClickUser(fullDate,dataLabo)}}>Confirmer</button>
            </div>

            </Popup>

        </div>)
     )
    }
    return (ArrayDate) 

}

function day (increment){
    if (weekday[d.getDay()+increment]!==undefined){
        return (
        <div>
            <span>{weekday[d.getDay()+increment]}</span>
            <h3>{d.getDate()+increment}</h3>
        </div>)}
        else{
        return  (
        <div>
            <span>{weekday[d.getDay()+increment-7]}</span>
            <h3>{d.getDate()+increment}</h3>
            </div>)}
            }
      return( 
 <div style={{width : "max-content"}} className="container center border rounded border-success mb-4">
     <div className="row m-1">
     <div className="col m-1 text-center border-bottom border-success">
         <h2>{m +" "+y}</h2>
     </div>
     </div>
        <div className="row ">
        <div className="col m-1 border-bottom border-success">{day1}</div>
        <div className="col m-1 border-bottom border-success">{day2}</div>
        <div className="col m-1 border-bottom border-success">{day3}</div>
        <div className="col m-1 border-bottom border-success">{day4}</div>
        <div className="col m-1 border-bottom border-success">{day5}</div>
         <div className="col m-1 border-bottom border-success">{day6}</div>
         <div className="col m-1 border-bottom border-success">{day7}</div>
     </div>
     {renderAppointments()}    

 </div>
        
    );
  }
  DatePicker.propTypes = {
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps
  )(DatePicker);