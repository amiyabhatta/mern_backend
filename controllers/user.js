const User = require("../models/user");

exports.getUserById = (req,res,next,id) => {
    
    User.findById(id).exec((err,user) => {
        if(err | !user){
            return res.status(400).json({
                erro:"No user found in DB"
            })
        }

        //add parameter in req
        req.profile = user;
        next();
    })
}

exports.getUser = (req,res) => {

    //Remove filed from responce
    req.profile.salt = undefined;
    req.profile.encry_password = undefined;
    req.profile.createdAt = undefined;
    req.profile.updatedAt = undefined;

   return res.status(200).json({
      data: req.profile
   })
}



exports.getAllUser = (req,res) => {
    User.find().exec((err,user) => {
        if(err | !user){
            return res.status(400).json({
                erro:"No user found in DB"
            })
        }
        
        var userMap = {}; 

user.forEach(function(user) { 

    user.salt = undefined;
    user.encry_password = undefined;
    user.createdAt = undefined;
    user.updatedAt = undefined;
userMap[user._id] = user;



}); 

//res.send(userMap); 

        res.status(200).json({
            data:userMap
         })
    })
}

//update user
exports.updateUser = (req,res) => {
    User.findByIdAndUpdate(
        {_id:req.profile._id},
        {$set:req.body},
        {new:true,useFindAndModify:false},
        (err,user) => {
           if(err && !user){
            return res.status(400).json({
                erro:"You are not authorized to update this user"
            }) 
           } 

           user.salt = undefined;
           user.encry_password = undefined;
           res.json(user);
        }

        
    )
}