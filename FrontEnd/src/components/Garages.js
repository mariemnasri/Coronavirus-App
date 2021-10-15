import Searchy from "./Searchy";
import React from "react";
import "../Css/Garages.css";
export const Garages = () => {
  return (
    <div className="container-fluid garagebg text-center mt-5">
      <div className="container">
        <br /> <br />
        <h1 className="mb-5 font-weight-bold text-white">Nos garages</h1>
        <h5 className="mb-5 font-italic text-white">
          Comment choisir le meilleur ?
        </h5>
      </div>
      <h3 className="text-white">Les garages inscrits sur AutoAdviser </h3>
      <Searchy />
    </div>
  );
};
