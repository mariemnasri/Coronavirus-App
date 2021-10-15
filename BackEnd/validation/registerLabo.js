const Validator = require("validator");
const isEmpty = require("is-empty");
const { default: validator } = require("validator");
module.exports = function validateRegisterLaboInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.location = !isEmpty(data.location) ? data.location: "";
  data.description = !isEmpty(data.description) ? data.description: "";
  data.appointments = !isEmpty(data.appointments) ? data.appointments: [{
    time:null,
    User:{
      name:"",
      lastname:"",
      email:"",
      tel:"",
    }
  }];
  data.tel = !isEmpty(data.tel) ? data.tel: "";
// Name check
  if (Validator.isEmpty(data.name)) {
    errors.name = "Le champ du nom est requis";
  }else if(
    data.name.split(' ').every(function (word) { if ((!Validator.isAlpha(word,['en-US']))&&(!Validator.isAlpha(word,['ar']))){
      errors.name= 'Le nom doit être uniquement en caractéres';
    } else{data.name = data.name.replace(/  /g,''); 
    data.name=data.name.replace(/^\s+|\s+$/gm,''); 
  } })
  )
  if (Validator.isEmpty(data.description)) {
    errors.description = " Le champ de la description est requis";
  }
  if (Validator.isEmpty(data.tel)) {
    errors.tel = " Le numéro de téléphone est requis";
  } else if (!Validator.isMobilePhone(data.tel)) {
    errors.tel = "Veuillez entrer un numéro de téléphone valide ";
  }
  
// Email check
  if (Validator.isEmpty(data.email)) {
    errors.email = "Le champ de l'email est requis";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "L'email est invalide";
  }
// Password check
  if (Validator.isEmpty(data.password)) {
    errors.password = "Le champ du mot de passe est requis";
  }
if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Le champ du mot de passe de confirmation est requis";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Le mot de passe doit être d’au moins 6 caractères";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Les mots de passe doivent correspondre";
  }
  
  
 

return {
    errors,
    isValid: isEmpty(errors)
  };
};
