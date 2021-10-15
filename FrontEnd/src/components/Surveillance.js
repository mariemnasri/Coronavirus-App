import React, { Component } from "react";
import "../Css/surveillance.css";
import back from "../img/back.png";
const obj = {
  question: [
    " Question 1 sur 9",
    " Question 2 sur 9",
    " Question 3 sur 9",
    " Question 4 sur 9",
    " Question 5 sur 9",
    " Question 6 sur 9",
    " Question 7 sur 9",
    " Question 8 sur 9",
    " Question 9 sur 9",
  ],
  titre: [
    "Si vous(ou votre proche) ressentez un manque de souffle quand vous parlez ou faites un petit effort, comment cela a-t-il évolué depuis hier (ou depuis la dernière connexion) ?",
    "Comment vous (ou votre proche) vous sentez-vous par rapport à hier (ou depuis la dernière connexion) ?",
    "Quelle a été la température maximale des 24 dernières heures ?",
    "Ressentez-vous (ou votre proche) des maux de tête intolérables qui résistent aux médicaments anti-douleurs (dont paracétamol) depuis hier (ou depuis la dernière connexion) ?",
    "Depuis hier (ou depuis la dernière connexion), avez-vous eu (ou votre proche) de la diarrhée (3 selles molles par jour ou plus) ou des vomissements importants ?",
    "Est-ce que l’aspect des crachats lors de la toux s’est modifié (aspect coloré jaune ou orangé ou sanglant) depuis hier (ou depuis la dernière connexion) ?",
    'Êtes-vous (ou votre proche) dans l"impossibilité de vous alimenter ou de boire DEPUIS 24 HEURES OU PLUS ?',
    "Avez-vous noté l’apparition d’une forte somnolence ou d’une confusion ces dernières heures ?",
    "Comment votre moral et votre niveau d’anxiété (ou celui de votre proche) ont évolué depuis hier (ou depuis la dernière connexion) ?",
  ],
  contenu: [
    "Sélectionnez une option :",
    "Sélectionnez une option :",
    "Remplissez le champ :",
    "Sélectionnez une option :",
    "Sélectionnez une option :",
    "Sélectionnez une option :",
    "Sélectionnez une option :",
    "Sélectionnez une option :",
    "Sélectionnez une option :",
  ],
  label: ["Mieux", "Stable", "Un peu moins bien", "Beaucoup moins bien"],
};
class Surveillance extends Component {
  
  state = {
    count: 0,
    situation:"",
    rep1:"",
    rep2:"",
    rep3:"",
    rep4:"",
    rep5:"",
    rep6:"",
    rep7:"",
    rep8:"",
    rep9:"",
  };
 
  
getRepons1 =(e)=>{
  this.setState({rep1: e.target.value});

}
getRepons2 =(e)=>{
  this.setState({rep2: e.target.value});
}
getRepons3 =(e)=>{
  this.setState({rep3: e.target.value});
}
getRepons4 =(e)=>{
  this.setState({rep4: e.target.value});
}
getRepons5 =(e)=>{
  this.setState({rep5: e.target.value});
}
getRepons6 =(e)=>{
  this.setState({rep6: e.target.value});
}
getRepons7 =(e)=>{
  this.setState({rep7: e.target.value});
}
getRepons8 =(e)=>{
  this.setState({rep8: e.target.value});
}
getRepons9 =(e)=>{
  this.setState({rep9: e.target.value});
}

  changequestion = (e) => {
    e.preventDefault();
    if (this.state.count < 9) {
      this.setState({
        count: this.state.count + 1,
      });
    }
    const reponses = {
      rep1: this.state.rep1,
      rep2: this.state.rep2,
      rep3: this.state.rep3,
      rep4: this.state.rep4,
      rep5: this.state.rep5,
      rep6: this.state.rep6,
      rep7: this.state.rep7,
      rep8: this.state.rep8,
      rep9: this.state.rep9,
    };
    console.log(reponses);
/**partie intelligence */
if(
  ((reponses.rep1 === 'Un peu moins bien') ||( reponses.rep1 === 'Beaucoup moins bien'))
  && ((reponses.rep2 === 'Un peu moins bien') ||( reponses.rep2 === 'Beaucoup moins bien')) 
  && ( (reponses.rep3 >38 ))
  ){
    this.setState({situation:"Urgent"});
    console.log(this.state.situation);
  }

  if(
    (((reponses.rep4 === 'oui'))
    && (((reponses.rep5 === 'oui') &&( reponses.rep6 === 'oui'))) 
    || ( (reponses.rep7 === 'oui')&&( reponses.rep8 === 'oui')))

    ||
 (((reponses.rep4 === 'oui'))
 || (((reponses.rep5 === 'oui') &&( reponses.rep6 === 'oui'))) 
    || ( (reponses.rep7 === 'oui')&&( reponses.rep8 === 'oui')))

    ||
 ((reponses.rep6 === 'oui') &&  (reponses.rep7 === 'oui')&&( reponses.rep8 === 'oui'))
    ){
      this.setState({situation:"Pas Assez Urgent"});
      console.log(this.state.situation);
    }  
  };


  /**counteur */
  comeback = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };
  
  render() {
    return (
      <div className="test1">
        {((this.state.count === 8) &&(this.state.situation === 'Pas Assez Urgent'))?(
          <div type="button" class="btn btn-warning" style={{ marginTop: 200,maxWidth:700 }} >
            <h3>Pas Urgent!</h3>
            <h2>Votre situation n'est assez critique !Vous devez consulter un médecin géneral.</h2>
            <h1>Nous ésperons que vous serez bien</h1>
      
          </div>
        ):
        ((this.state.count === 6) &&(this.state.situation === 'Pas Assez Urgent'))?(
          <div type="button" class="btn btn-warning" style={{ marginTop: 200,maxWidth:700 }} >
            <h3>Pas Urgent!</h3>
            <h2>Votre situation n'est assez critique !Vous devez consulter un médecin géneral.</h2>
            <h1>Nous ésperons que vous serez bien</h1>
      
          </div>
        ):
        ((this.state.count === 3) &&(this.state.situation === 'Urgent'))?(
          <div type="button" class="btn btn-danger" style={{ marginTop: 200,maxWidth:720 }} >
            <h3>Urgent!</h3>
            <h2>Votre situation est critique !Vous devez consulter un médecin immédiatement ou appelez 190 pour une intervention rapide.</h2>
            <h1><b>N'oubliez pas toujours de suiver nos conseils!!</b></h1>
            <h1><b>Vous pouvez reprendre un rendez-Vous en ligne</b></h1>
          </div>
        ):
        this.state.count === 9 ? (
          <div
            className="card-body cad card border-info mb-3 mb-3 container-lg"
            style={{ maxWidth: 900, marginTop: 200 }}
          >
            <p className="card-text">
            Selon ces informations en provenance des autorités de santé et des chercheurs. 
            Elle ne constitue pas un avis exacte. En cas de doute ou apparition de nouveaux
             symptômes, demandez conseil à votre médecin ou pharmacien.
            </p>
          </div>
        ) : (
          <div className="div1 container-lg">
            <div className="question">          
              <h4>
                <img
                className="fleche"
                onClick={this.comeback}
                src={back}
                alt=""
              ></img>
              {obj.question[this.state.count]}
              </h4><br/>
              
              <p className="questionsTitle">{obj.titre[this.state.count]}</p>
              <p className="questionsIndication">
                {obj.contenu[this.state.count]}{" "}
              </p>

              <form  onSubmit={this.changequestion}>
                {this.state.count === 0 ? (
                  <div className="questionsOptions2 custom-control custom-radio">
                    
                      <input
                        className="m-2"
                        type="radio"
                        name="question1"
                        value="Mieux"
                        id="radio-input"
                        onChange={this.getRepons1}
                        required
                      />
                     
                      <label id="label-radio">
                        {obj.label[0]}
                        <span className="hover-border"></span>
                      </label>
                   <div style={{height:15}}></div>
                  
                      <input
                        className="m-2"
                        type="radio"
                        name="question1"
                        value="Stable"
                        id="radio-input"
                        onChange={this.getRepons1}
                      />
                      <label id="label-radio">
                        {obj.label[1]}
                        <span className="hover-border"></span>
                      </label>
                      <div style={{height:15}}></div>
                    
                      <input
                        className="m-2"
                        type="radio"
                        name="question1"
                        value="Un peu moins bien"
                        id="radio-input"
                        onChange={this.getRepons1}
                      />
                      <label id="label-radio">
                        {obj.label[2]}
                        <span className="hover-border"></span>
                      </label>
                      <div style={{height:15}}></div>
                      <input
                        className="m-2"
                        type="radio"
                        name="question1"
                        value="Beaucoup moins bien"
                        id="radio-input"
                        onChange={this.getRepons1}
                      />
                      <label id="label-radio">
                        {obj.label[3]}
                        <span className="hover-border"></span>
                      </label>
                  <div style={{height:15}}></div>
                  </div>
                ) : 
                   /***************************************************** Question 2 ***********************************************************/
                this.state.count === 1 ? (
                  <div className="questionsOptions2">
                    <div className="custom-control custom-radio">
                      <input
                        className="m-2"
                        type="radio"
                        value="Mieux"
                        name="question2"
                        id="radio-input"
                        onChange={this.getRepons2}
                        required
                      />
                      <label id="label-radio">
                        {obj.label[0]}
                        <span className="hover-border"></span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        className="m-2"
                        type="radio"
                        value="Stable"
                        name="question2"
                        id="radio-input"
                        onChange={this.getRepons2}
                      
                      />
                      <label id="label-radio">
                        {obj.label[1]}
                        <span className="hover-border"></span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        className="m-2"
                        type="radio"
                        value="Un peu moins bien"
                        name="question2"
                        id="radio-input"
                        onChange={this.getRepons2}
                        
                      />
                      <label id="label-radio">
                        {obj.label[2]}
                        <span className="hover-border"></span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        className="m-2"
                        type="radio"
                        value="Beaucoup moins bien"
                        name="question2"
                        id="radio-input"
                        onChange={this.getRepons2}
                      />
                      <label id="label-radio">
                        {obj.label[3]}
                        <span className="hover-border"></span>
                      </label>
                    </div>
                  </div>
                ) : 
/***************************************************** Question 3 ***********************************************************/
                this.state.count === 2 ? (
                  <div className="questionsOptions">
                    <div className="customText">
                      <input
                        className="input-text"
                        type="number"
                        name="Temperature"
                        placeholder="37.0"
                        min="36"
                        max="42"
                        step="0.1"
                        autoFocus
                        value={this.state.reponsequestion3}
                        required
                        onChange={this.getRepons3}
                      />
                      degrés
                    </div>
                  </div>
                ) :  
/***************************************************** Question 4 ***********************************************************/
                this.state.count === 3 ? (
                  
                  <div className="questionsOptions flex-direction-row custom-control custom-radio">
                    
                      
                        <input
                          id="radio-input"
                          type="radio"
                          name="question4"
                          value="oui"
                          required
                          onChange={this.getRepons4}
                        />
                        <label id="label-radio" style={{marginRight:20}}>
                          Oui <span className="hover-border"></span>
                        </label>
                     
                  
                        <input
                          id="radio-input"
                          type="radio"
                          value="non"
                          name="question4"
                          onChange={this.getRepons4}
                        />
                        <label id="label-radio">
                          Non <span className="hover-border"></span>
                        </label>
                     
                    </div>
                 
                ) : 
/***************************************************** Question 5 ***********************************************************/
                this.state.count === 4 ? (
                  <div className="questionsOptions">
                    <div className="flex-direction-row ">
                      <div className="custom-control custom-radio">
                        <input
                          id="radio-input"
                          type="radio"
                          name="question5"
                          value="oui"
                          required 
                          onChange={this.getRepons5}
                        />
                        <label id="label-radio">
                          Oui <span className="hover-border"></span>
                        </label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input
                          id="radio-input"
                          type="radio"
                          name="question5"
                          value="non"
                          required 
                          onChange={this.getRepons5}
                        />
                        <label id="label-radio">
                          Non <span className="hover-border"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                ) : 
/***************************************************** Question 6 ***********************************************************/
                this.state.count === 5 ? (
                  <div className="questionsOptions custom-control custom-radio flex-direction-row">
                   
                        <input
                          id="radio-input"
                          type="radio"
                          name="question6"
                          value="oui"
                          required
                          onChange={this.getRepons6}
                        />
                        <label id="label-radio" style={{marginRight:20}}>
                          Oui <span className="hover-border"></span>
                        </label>
                    
               
                        <input
                          id="radio-input"
                          type="radio"
                          name="question6"
                          value="non"
                          onChange={this.getRepons6}
                        />
                        <label id="label-radio">
                          Non <span className="hover-border"></span>
                        </label>
                     
                  </div>
                ) : 
/***************************************************** Question 7 ***********************************************************/
                this.state.count === 6 ? (
                  <div className="questionsOptions">
                    <div className="flex-direction-row">
                      <div className="custom-control custom-radio">
                        <input
                          id="radio-input"
                          type="radio"
                          name="question7"
                          required
                          value="oui"
                          onChange={this.getRepons7}
                        />
                        <label id="label-radio">
                          Oui <span className="hover-border"></span>
                        </label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input
                          id="radio-input"
                          type="radio"
                          value="non"
                          name="question7"
                          onChange={this.getRepons7}
                        />
                        <label id="label-radio">
                          Non <span className="hover-border"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                ) : 
/***************************************************** Question 8 ***********************************************************/
                this.state.count === 7 ? (
                  <div className="questionsOptions custom-control custom-radio flex-direction-row">
                    
                        <input
                          id="radio-input"
                          type="radio"
                          name="question8"
                          required
                          value="oui"
                          onChange={this.getRepons8}
                        />
                        <label id="label-radio" style={{marginRight:20}}>
                          Oui <span className="hover-border"></span>
                        </label>
                     
                     
                        <input
                          id="radio-input"
                          type="radio"
                          value="non"
                          name="question8"
                          onChange={this.getRepons8}
                        />
                        <label id="label-radio">
                          Non <span className="hover-border"></span>
                        </label>
                   
                  </div>
                ) :
/***************************************************** Question 9 ***********************************************************/
                this.state.count === 8 ? (
                  <div className="questionsOptions2">
                    <div className="custom-control custom-radio">
                      <input
                        className="m-2"
                        type="radio"
                        value="Mieux"
                        name="question9"
                        id="radio-input"
                        required
                        onChange={this.getRepons9}
                      />
                      <label id="label-radio">
                        {obj.label[0]}
                        <span className="hover-border"></span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        className="m-2"
                        type="radio"
                        value="Stable"
                        name="question9"
                        id="radio-input"
                        onChange={this.getRepons9}
                      />
                      <label id="label-radio">
                        {obj.label[1]}
                        <span className="hover-border"></span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        className="m-2"
                        type="radio"
                        value="Un peu moins bien"
                        name="question9"
                        id="radio-input"
                        onChange={this.getRepons9}
                      />
                      <label id="label-radio">
                        {obj.label[2]}
                        <span className="hover-border"></span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        className="m-2"
                        type="radio"
                        name="question9"
                        id="radio-input"
                        value="Beaucoup moins bien"
                        onChange={this.getRepons9}
                      />
                      <label id="label-radio">
                        {obj.label[3]}
                        <span className="hover-border"></span>
                      </label>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {this.state.count === 9 ? (
                  <></>
                ) : (
                  <div>
                    <br />
                    <input
                      className="btn btn-primary bt1"
                      type="submit"
                      name="submit"
                      value="Continuer"
                      onSubmit={this.changequestion}
                    />
                  </div>
                )}
               
              </form>
            </div>
          </div>
        )}
       
      </div>
    );
  }
}
export default Surveillance;
