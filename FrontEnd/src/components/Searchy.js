import React, { Component } from "react";

export default class Searchy extends Component {
  render() {
    return (
      <div>
        <div className="container bg-light bg-gradient rounded  text-center mt-5 mb-5">
          <form className="pt-3 pb-3">
            <div class="form-row ">
              <div class="col-md-3">
                <label for="inlineFormCustomSelectPref">Services</label>
                <select class="form-control " id="inlineFormCustomSelectPref">
                  <option selected>Choisir...</option>
                  <option value="1">Revision/Vidange</option>
                  <option value="2">Courroie de distribution</option>
                  <option value="3">Plaquette de freins</option>
                  <option value="4">Parallélisme</option>
                  <option value="5">Amortisseur</option>
                  <option value="6">Echappement</option>
                  <option value="7">Embrayage</option>
                  <option value="8">Climatisation</option>
                  <option value="9">Décalaminage</option>
                </select>
              </div>
              <div class="col-md-3">
                <label for="inlineFormCustomSelectPref2">Classé par</label>

                <select class="form-control " id="inlineFormCustomSelectPref2">
                  <option selected>Choisir...</option>
                  <option value="1">Mieux notées</option>
                  <option value="2">Alphabétique</option>
                  <option value="3">Les plus vues</option>
                </select>
              </div>
              <div class="col-md-3">
                <label for="inlineFormCustomSelectPref3">Classé par</label>
                <div className="form-group">
                  <select className="form-control" id="City">
                    <option selected>Ville</option>
                    <option>Ariana</option>
                    <option>Beja</option>
                    <option>Ben Arous</option>
                    <option>Bizerte </option>
                    <option>Gabes </option>
                    <option>Gafsa </option>
                    <option>Jandouba </option>
                    <option>Kairoun </option>
                    <option>Kasserine </option>
                    <option>Kebili </option>
                    <option>Kef </option>
                    <option>Mahdia </option>
                    <option>Manouba </option>
                    <option>Medenine </option>
                    <option>Monastir </option>
                    <option>Nabeul </option>
                    <option>Sfax </option>
                    <option>Sidi Bouzid </option>
                    <option>Siliana </option>
                    <option>Sousse </option>
                    <option>Tataouine </option>
                    <option>Tozeur </option>
                    <option>Tunis </option>
                    <option>Zaghouane </option>
                  </select>
                </div>
              </div>
              <div class="col-md-2">
                <br />
                <button type="submit" class="btn btn-success mt-1">
                  Rechercher
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="container shadow mt-5  text-center  mb-5">
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-5 shadow">
                <img
                  src="..."
                  class="card-img-top text-center "
                  alt="..."
                  style={{ width: "150px" }}
                />
                <div class="card-body">
                  <h5 class="card-title">Nom</h5>
                  <p class="card-text">adresse</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">service 1</li>
                  <li class="list-group-item">service 2</li>
                  <li class="list-group-item">service 3</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">
                    lien vers profile
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    );
  }
}
