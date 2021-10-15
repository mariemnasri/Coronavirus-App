const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");



const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validateRegisterLaboInput = require("../../validation/registerLabo");
const validateLoginLaboInput = require("../../validation/loginLabo");


const User = require("../../models/User");
const Labo = require("../../models/Labo");


router.use(
  express.urlencoded({
    extended: true
  })
)
router.use(express.json())
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});




// @route POST api/users/register

router.post("/register/user", (req, res) => {
    
  const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "L'email existe déjà" });
      } else {
        const newUser = new User({
          name: req.body.name,
          lastname: req.body.lastname,
          email: req.body.email,
          password: req.body.password,
          tel : req.body.tel,
          appointment: req.body.appointment,

        });
  // Hash password 
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

  // @route POST api/users/login

router.post("/login/user", (req, res) => {
    
  const { errors, isValid } = validateLoginInput(req.body);
  
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const email = req.body.email;
    const password = req.body.password;
  // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ email: "Email non trouvé" });
      }
  // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {

          const payload = {
            id: user.id,
            name: user.name,
            lastname : user.lastname,
            email:user.email,
            tel:user.tel,
            category : "patient",
            appointment:user.appointment,
            
          };
  
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ password: "Le mot de passe est incorrect" });
        }
      });
    });
  });

    // @route POST api/register/labo

router.post("/register/labo", (req, res) => {
    
  const { errors, isValid } = validateRegisterLaboInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
  Labo.findOne({ email: req.body.email }).then(labo => {
      if (labo) {
        return res.status(400).json({ email: "L'email existe deja" });
      } else {
        const newLabo = new Labo({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          location: req.body.location,
          description : req.body.description,
          appointments : req.body.appointments,
          tel: req.body.tel,
        });
  // Hash password 
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newLabo.password, salt, (err, hash) => {
            if (err) throw err;
            newLabo.password = hash;
            newLabo
              .save()
              .then(labo => res.json(labo))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

  // @route POST api/getall/labo

router.post("/getall/labo", (req, res) => {
    
  Labo.find({}).then(labo => {res.json(labo)});
  });

  // @route POST api/add_appointment/labo

router.post("/add_appointment/labo",  (req,res)=>{
  var appointment = req.body.appointment;
  const labmail = req.body.mail;
  function add(){
  Labo.findOne({email:labmail},function (err, docs) { 
      if (err){ 
          return(err) 
      } 
      else{ 
        if(docs.appointments[0].time===null){
          Labo.updateOne({email:labmail},{$set: { appointments: appointment}},{new:true},
            function (error, success ) {
            if (error) {
                res.json(error);
            } else {
               console.log("update")
                res.json(success);
            }})
        } else
        {
          Labo.updateOne({email:labmail},{$push: { appointments: appointment}},{new:true},
            function (error, success ) {
            if (error) {
                res.json(error);
            } else {
               console.log("add")
                res.json(success);
            }})
        }
      } 
  });
  }
  add();
 
    });
  // @route POST api/add_appointment/user

  router.post("/add_appointment/user",  (req,res)=>{
    const appointment = req.body.appointment;
    const email = req.body.email;
    console.log(email)
    console.log(appointment)
    User.findOne({email:email},function (err, docs) { 
        if (err){return(err)} 
        else{ 
          console.log("Found")
            User.updateOne({email:email},{$set: { appointment: appointment}},{new:true},
              function (error, success ) {
              if (error) {
                  res.json(error);
              } else {
                 console.log("update USer")
                  res.json(success);
              }})
          } 
        } 
    );
    
  
      });
  
  

  
  // @route POST api/users/login/labo

router.post("/login/labo", (req, res) => {
    
  const { errors, isValid } = validateLoginLaboInput(req.body);
  
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
  // Find labo by email
    Labo.findOne({ email }).then(labo => {
      // Check if user exists
      if (!labo) {
        return res.status(404).json({ email: "Email not found" });
      }
  // Check password
      bcrypt.compare(password, labo.password).then(isMatch => {
        if (isMatch) {

          const payload = {
            id: labo.id,
            name: labo.name,
            description:labo.description,
            email:labo.email,
            tel:labo.tel,
            appointments:labo.appointments,
            category:"Labo",
            location:labo.location,
            
          };
  
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ password: "Password incorrect" });
        }
      });
    });
  });

  // @route POST api/getthis/labo

  router.post("/getthis/labo", (req, res) => {
    Labo.findOne({email:req.body.email}).then(labo => {res.json(labo)});
    });
      // @route POST api/getthisappointments/labo

  router.post("/getthisappointments/labo", (req, res) => {
    Labo.findOne({email:req.body.email})
    
    .then(labo => {res.json(labo.appointments)});
    });

  //@route POST api/add_location/labo

  router.post("/add_location/labo",  (req,res)=>{
    var location = req.body.location;
    const labmail = req.body.mail;
    function add(){
      console.log("======= input location :",location);
      console.log("======= input mail :",labmail);
    Labo.findOne({email:labmail},function (err, docs) { 
        if (err){ 
            return(err) 
            
        } 
        else{ if(((location.latitude&&location.longitude)!==null)||
          (((location.latitude&&location.longitude)!==undefined)))
          {
            console.log(docs.location.latitude);
            Labo.updateOne({email:labmail},{$set: { location: location}},{new:true},
              function (error, success ) {
              if (error) {
                  res.json(error);


              } else {
                 console.log("update")
                  res.json(success);
              }})}
          
        } 
    });
    }
    add();
   
      });
  
  module.exports = router;