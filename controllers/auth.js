const User = require("../models/user");
const { check, validationResult } = require('express-validator');

exports.signout = (req,res) => {
  
};


exports.signup = (req,res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json(
          { 
              errors: errors.array()[0].msg
          }
        );
    }  
  const user = new User(req.body);
  user.save((err, user) => {
    if(err){
       return res.status(400).json({
           err : "Bad Request"
       }) 
    }
   return res.status(200).json({
       message:"Signup Sucessfull !"
   })
  })
};