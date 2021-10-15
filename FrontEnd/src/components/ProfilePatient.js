import React, {Component} from "react";
import "../Css/Profile.css";
import PropTypes from "prop-types";
import {connect} from "react-redux";


class ProfilePatient extends Component {
  render(){
    const { user } = this.props.auth;
    console.log(user);

  return (
    <div className="container emp-profile">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-6">
          <div className="profile-head">
            <h5>Informations du patient</h5>

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
                  <label>Id du patient</label>
                </div>
                <div className="col-md-6">
                  <p>{user.id}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Nom</label>
                </div>
                <div className="col-md-6">
                  <p>{user.name}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Email</label>
                </div>
                <div className="col-md-6">
                  <p>{user.email}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Telephone</label>
                </div>
                <div className="col-md-6">
                  <p>123 456 7890</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

  <br /><br/>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-6">
          <div className="profile-head">
            <h5>Informations du rendez-vous</h5>

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
                  <p>{user.appointment[0].Labo.name} </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Description</label>
                </div>
                <div className="col-md-6">
                  <p>{user.appointment[0].Labo.description}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Telephone</label>
                </div>
                <div className="col-md-6">
                  <p>{user.appointment[0].Labo.tel}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Date du rendez-vous</label>
                </div>
                <div className="col-md-6">
                  <p>Le {user.appointment[0].time}</p>
                  <a className="btn btn-success" href="/Laboratoires">Modifier date du rendez-vous</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );}
}
ProfilePatient.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(ProfilePatient);
