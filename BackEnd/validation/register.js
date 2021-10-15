const Validator = require("validator");
const isEmpty = require("is-empty");
const { default: validator } = require("validator");
module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.lastname =!isEmpty(data.lastname)?data.lastname:"";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.appointment = !isEmpty(data.appointment) ? data.appointment : [{
    time:null,
    Labo:{
      name:"",
      description:"",
      email:"",
      tel:""
    }
  }];
  data.tel = !isEmpty(data.tel) ? data.tel: "";

// Name check
  if (Validator.isEmpty(data.name)) {
    errors.name = "Le champ du nom est requis";
  }
  else if(
    data.name.split(' ').every(function (word) { if ((!Validator.isAlpha(word,['en-US']))&&(!Validator.isAlpha(word,['ar']))){
      errors.name= 'Le nom doit être uniquement en caractéres';
    } else{data.name = data.name.replace(/  /g,''); 
    data.name=data.name.replace(/^\s+|\s+$/gm,''); 


  } })
  )
  if (Validator.isEmpty(data.tel)) {
    errors.tel = " Le numéro de téléphone est requis";
  } else if (!Validator.isMobilePhone(data.tel))
  {errors.tel="Veuillez entrer un numéro de téléphone valide";}
  // Name check
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "Le champ du nom est requis";
  }else if(
    data.lastname.split(' ').every(function (word) { if ((!Validator.isAlpha(word,['en-US']))&&(!Validator.isAlpha(word,['ar']))){
      errors.lastname= 'Le prénom doit être uniquement en caractéres';
    } else{data.lastname = data.lastname.replace(/  /g,''); 
    data.lastname=data.lastname.replace(/^\s+|\s+$/gm,''); 
  } })
  )
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
