const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname:{
    type : String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  tel:{
    type:String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  appointment:[{
    time: String,
    required:false,
    Labo : {
      name : {
        type : String,
        required : false,
      },
      email : {
        type: String,
        required : false,
      },
      tel : {
        type: String,
        required: false,
      },
      description : {
        type: String,
        required: false,
      }

      
    }
  }],
  date: {
    type: Date,
    default: Date.now
  },
  
});
module.exports = User = mongoose.model("users", UserSchema);
