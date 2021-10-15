import React, { useEffect, useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "../Css/Map.css";
import 'leaflet/dist/leaflet.css';

export const pin = new Icon({
  iconUrl: "/marker.png",
  iconSize: [25, 25]

 
});

export const icon = new Icon({
  iconUrl: "/hospital.png",
  iconSize: [32, 32]
});

export default function LocationMap() {
  const [activeLabo, setActiveLabo] = React.useState(null);
  const [longitude,setLongitude] = useState(0)
  const [latitude,setLatitude] = useState(0)
  const [labo, setLabo] = useState([])
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(p=>{
      console.log(p)
      setLongitude(p.coords.longitude)
      setLatitude(p.coords.latitude)
      console.log(`La précision est de ${p.coords.accuracy} mètres.`);
    },null,options);
    fetch('http://localhost:5000/api/users/getall/labo',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
       method : 'POST'

    })
    .then(response => response.json())
    .then(data => setLabo(data));
    


  },[])
  return (
    <Map center={[latitude, longitude]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
        <Marker position={[latitude,longitude]} icon={pin}/>
      {labo.filter(lab => lab.location?.longitude != null).map(labo => (
        <Marker
          key={labo._id}
          position={[
            labo?.location.latitude,
            labo?.location.longitude
          ]}
          onClick={() => {
            setActiveLabo(labo);
          }}
          icon={icon}
        />
      ))}

      {activeLabo && (
        <Popup
          position={[
            activeLabo.location.latitude,
            activeLabo.location.longitude
          ]}
          onClose={() => {
            setActiveLabo(null);
          }}
        >
          <div >
            <h2>{activeLabo.name}</h2>
            <p>{activeLabo.description}</p>
            <a
            href={"/ProfileLabo"+"&email="+activeLabo.email}>Prendre un Rdv !</a>
          </div>
        </Popup>
      )}
    </Map>
  );
}
