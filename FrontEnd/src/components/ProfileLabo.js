import React, { useState, useEffect } from "react";
import "../Css/Profile.css";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import DatePicker from "./DatePicker";


function ProfileLabo ({auth}){
  const [labo, setLabo] = useState({});
  const [longitude,setLongitude] = useState(0)
  const [latitude,setLatitude] = useState(0)
  const [hidden,sethidden] = useState(true)

  
  
  useEffect(()=>

    {if (user.category==='patient'){
    const email = window.location.href.substring(40)
    fetch('http://localhost:5000/api/users/getthis/labo',{ 
      headers: {
        'Content-Type': 'application/json',
      },
     method : 'POST',
     body : JSON.stringify({email:email})

  })
    .then(response =>  response.json())
    .then(res => {setLabo(res)} ,console.log(labo))
    .catch(err=> console.log(err))
  }
  else if (user.category==='Labo'){
      navigator.geolocation.getCurrentPosition(p=>{
        console.log(p)
        setLongitude(p.coords.longitude)
        setLatitude(p.coords.latitude)
        console.log(`La précision est de ${p.coords.accuracy} mètres.`);
      },null,{
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      });
    }}
,[])



 
    const { user } = auth;
    
  
  return (
    <div className="container emp-profile">
      {console.log(longitude,"+++++++",latitude)}
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-6">
          <div className="profile-head">
            <h5>Informations du Labo</h5>
            
            <hr />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="tab-content profile-tab">
            <div
              className="tab-pane fade show active" >
              
              <div className="row">
                <div className="col-md-6">
                  <label>Nom du Labo</label>
                </div>
                <div className="col-md-6">
                  <p>{user.category==='Labo'?user.name:labo.name}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Email</label>
                </div>
                <div className="col-md-6">
                  <p>{user.category==='Labo'?user.email:labo.email}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Description</label>
                </div>
                <div className="col-md-6">
                  <p> {user.category==='Labo'?user.description:labo.description}</p>
                </div>
              </div>
              {user.category==='Labo'?              
              <div className="row">
                <div className="col-md-6">
                  <label>Localisation</label>
                </div>
                <div className="col-md-6">
                  <button
                  disabled={(latitude===0)||(longitude===0)}
                  onClick={
                    ()=>{
                      fetch('http://localhost:5000/api/users/add_location/labo',{ 
                        headers: {
                        'Content-Type': 'application/json' },
                        method : 'POST',
                        body : JSON.stringify({
                        mail:user.email,
                        location:{
                          latitude:latitude,
                          longitude:longitude}
                                              })

                      })
                      .then(response =>  response.json())
                      .then(sethidden(false))
                      .catch(err=> console.log(err))
                    }
                  }
                  >
                    {((user.location.longitude===null)&&
                    (user.location.latitude===null))?
                    'Ajouter votre Localisation':
                    'Modifier votre localisation'}
                    </button>
                    <p className="text-success" hidden={hidden}>Position ajoutée avec succéss !</p>
                    <p className="text-danger" hidden={!((latitude===0)||(longitude===0))}>Autoriser votre navigateur à avoir votre position d'abord</p>

                </div>
              </div>:''}
              
             
              
            </div>
          </div>
        </div>
      </div>

  <br /><br/>{user.category==='patient'&&<div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-6">
          <div className="profile-head">
            <h5>Calendrier des rendez-vous</h5> 
          </div>
        </div>
      </div>

      
      <DatePicker/></div>}
      {user.category==='Labo'&&<div>
      <div className="row ">
        <div className="col-md-4"><h5>Vos rendez-vous : </h5></div>
        <div style={{alignItems:"center"}}>
{       
    user.appointments.map(appointment =>
   { return (
     
<div className="col" >
            <div className="container rounded border shadow-sm border-blue  m-1 p-2 ">
              <div className="col font-weight-bold">Patient : {appointment.User && appointment.User.name} {appointment.User && appointment.User.lastname} </div>
              <div className="col font-weight-bold">Email :{appointment.User && appointment.User.email} </div>
              <div className="col font-weight-bold">Date :{appointment.User && appointment.time} </div>
            </div>
                  
        </div>
    )}
    
    )
}
</div>      
      </div>
      
      </div>}
    </div>
  );
}
ProfileLabo.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(ProfileLabo);