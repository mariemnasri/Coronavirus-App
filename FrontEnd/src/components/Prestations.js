import React from "react";
import "../Css/Prestations.css";
export const Prestations = () => {
  return (
    <div id="prestations" className="margin-top text-center mb-3 ">
      <div className="container">
        <div className="section-title">
          <h2>Nos presations </h2>
          <p>
            L'entretien de votre voiture n'a jamais été aussi simple avec
            AutoAdviser !{" "}
          </p>
          <p>
            Retrouvez ci-dessous l'ensemble des interventions disponibles sur
            notre site{" "}
          </p>
        </div>

        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-6 col-md-4">
                <div className="garagiste-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="/vidange"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Révision / Vidange </h4>
                      </div>
                      <img
                        src={require("../img/prestations/01-small.jpg")}
                        className="img-responsive"
                        alt="Révision / Vidange"
                      />{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-4">
                <div className="garagiste-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="/courroie"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Courroie de distribution</h4>
                      </div>
                      <img
                        src={require("../img/prestations/02-small.jpg")}
                        className="img-responsive"
                        alt="Courroie de distribution"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="garagiste-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="/plaquette"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Plaquettes de freins </h4>
                      </div>
                      <img
                        src={require("../img/prestations/03-small.jpg")}
                        className="img-responsive"
                        alt="Plaquettes de freins "
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6 col-md-4">
                <div className="garagiste-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="/parallelisme"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Parrallélisme </h4>
                      </div>
                      <img
                        src={require("../img/prestations/04-small.jpg")}
                        className="img-responsive"
                        alt="Parrallélisme "
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-4">
                <div className="garagiste-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="/amortisseur"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Amortisseurs </h4>
                      </div>
                      <img
                        src={require("../img/prestations/05-small.jpg")}
                        className="img-responsive"
                        alt="Amortisseurs"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="garagiste-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="/echappement"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Echappement</h4>
                      </div>
                      <img
                        src={require("../img/prestations/06-small.jpg")}
                        className="img-responsive"
                        alt="Echappement"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-md-4">
                <div className="garagiste-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="/embrayage"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Embrayage</h4>
                      </div>
                      <img
                        src={require("../img/prestations/07-small.jpg")}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="garagiste-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="/climatisation"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Climatistation </h4>
                      </div>
                      <img
                        src={require("../img/prestations/08-small.jpg")}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-4">
                <div className="garagiste-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="/decalaminage"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Décalaminage </h4>
                      </div>
                      <img
                        src={require("../img/prestations/09-small.jpg")}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /> <br />
      <br /> <br />
    </div>
  );
};
