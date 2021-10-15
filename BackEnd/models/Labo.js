const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const LaboSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  tel :{
    type : String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  location: {
    latitude : {
      type : Number,
      required : false,
      default : "",
    },
    longitude : {
      type : Number,
      required : false,
      default : ""
    }
  },
  appointments: [{
    time : {
      type : String,
      required : false,
      
    },
    User : {
      name : {
        type: String,
        required : false,
        
      },
      lastname :{
        type : String,
        required: false,
        
      },
      email : {
        type: String,
        required : false,
      },
      tel :{
        type : String,
        required : false,
      }
    }
  }],
  description : {
    type : String,
    required : true ,
  },
  date: {
    type: Date,
    default: Date.now
  },
  
});
module.exports = Labo = mongoose.model("Labos", LaboSchema);
