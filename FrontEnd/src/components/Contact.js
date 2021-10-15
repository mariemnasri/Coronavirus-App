import React from "react";

export default function Contact() {
  return (
    <div>
      <div class="container mb-5 mt-5">
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-header bg-primary text-white">
                <i class="fa fa-envelope"></i> Contactez nous !
              </div>
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="name">Nom et Prénom </label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      aria-describedby="emailHelp"
                      placeholder="Enter name"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="message">Message</label>
                    <textarea
                      class="form-control"
                      id="message"
                      rows="6"
                      required
                    ></textarea>
                  </div>
                  <div class="mx-auto">
                    <button type="submit" class="btn btn-primary text-right">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-4">
            <div class="card bg-light mb-3">
              <div class="card-header bg-success text-white text-uppercase">
                <i class="fa fa-home"></i> Addresse
              </div>
              <div class="card-body">
                <p>Ariana,Tunisie</p>
                <p>7070, Ariana</p>
                <p>Tunisie</p>
                <p>Email : AutoAdviser@autoadviser.com</p>
                <p>Tel. +216 23 50 80 70 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
