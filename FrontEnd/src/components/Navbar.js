import React, { Component } from "react";
import "../Css/Navbar.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class Navbar extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
      <nav className="navbar shadow  bg-light rounded fixed-top navbar-expand-lg navbar-light background-color:#6e6e6e">
        <div
          className="collapse navbar-collapse pt-0 pb-0 mt-0 mb-2"
          id="navbarText"
        >
          <a className="navbar-brand " href="/"></a>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item rounded ">
              <a className="nav-link" href="/prestations">
                {" "}
                Nos prestations{" "}
              </a>
            </li>
            <li className="nav-item rounded">
              <a className="nav-link" href="/garages">
                Nos garages
              </a>
            </li>

            <li className="nav-item rounded">
              <a className="nav-link" href="/entretien">
                Entretenir ma voiture
              </a>
            </li>
            <li className="nav-item rounded">
              <a className="nav-link" href="/aide">
                Aide
              </a>
            </li>
            <li className="nav-item rounded">
              <a className="nav-link" href="/Contactez-nous">
                Contactez-nous
              </a>
            </li>
          </ul>
          <div className="Buttons-nav">
            <a
              className="btn connecter  "
              href={
                this.props.auth.user.category === "patient"
                  ? "/ProfilePatient"
                  : this.props.auth.user.category === "Labo"
                  ? "/ProfileLabo"
                  : "/Connexion"
              }
            >
              {this.props.auth.isAuthenticated
                ? this.props.auth.user.name
                : "Se connecter"}
            </a>
            <a
              className="btn inscription  "
              href="/Inscription"
              onClick={
                this.props.auth.isAuthenticated === true
                  ? this.onLogoutClick
                  : null
              }
            >
              {" "}
              {this.props.auth.isAuthenticated === true
                ? "Déconnexion"
                : "S'inscrire"}
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Navbar);
