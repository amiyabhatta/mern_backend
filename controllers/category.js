const User = require("../models/user");
const Category = require("../models/category");

exports.getCategoryById = (req,res,next,id) => {
    
    Category.findById(id).exec((err,user) => {
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