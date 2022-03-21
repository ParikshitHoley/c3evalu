const express = require("express");
const router = express.Router();
const User = require("../models/user.m");
const { body, validationResult } = require('express-validator');
const upload = require("../middelware/user.middel");



router.post("" ,

body("firstName").not().isEmpty().withMessage("first name is required")
.isLength({min : 3 , max : 30}).withMessage("name should have min 3 and max 30 char"),

body("lastName").not().isEmpty().withMessage("first name is required")
.isLength({min : 3 , max : 30}).withMessage("name should have min 3 and max 30 char"),

body("age").not().isEmpty().withMessage("age is required").isNumeric()
.custom((value)=>{
    if(value<1 || value >150)
    {
        throw Error("age should be proper")
    }
}),
body("email").isEmail().custom(async(value)=>{
   let user = await User.findOne({email : value});
   if(user)
   {
       throw new Error("user already exist")
   }
}),

upload.array("profile" , 5 ),




async(req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        const user = await User.create({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            age : req.body.age,
            email : req.body.email,
            profile : req.filesPath
        })

        res.status(200).send(user)



    }
    catch(err)
    {
        res.status(500).send(err.message);
    }
})

module.exports=router;