import React from "react";
import "../Css/Home.css";
import Searchy from "./Searchy";
import Contact from "./Contact";

function Home() {
  return (
    <div className="container-fluid mt-5 mb-5">
      <div className="intro">
        <div className="">
          <div className="overlay mt-5">
            <h1>AUTOADVISER</h1>
          </div>
          <br />
          <br />
          <center>
            <div>
              <h2>
                Le premier site Tunisien qui vous aidera a choisir le meilleur
                garagiste
              </h2>
              <a
                href="/prestations"
                className="btn btn-custom btn-lg page-scroll mt-5 mb-5"
              >
                Plus d'informations
              </a>{" "}
            </div>
          </center>
        </div>{" "}
        <Searchy />
      </div>

      <br />
      <br />
      <br />
      <br />
      <Contact />
    </div>
  );
}
export default Home;
