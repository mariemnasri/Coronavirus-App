const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateLoginLaboInput(data) {
  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
// Email check
  if (Validator.isEmpty(data.email)) {
    errors.email = "Le champ de l'email est requis";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "L'email est invalide";
  }
// Password check
  if (Validator.isEmpty(data.password)) {
    errors.password = "Le champ de mot de passe est requis";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};
