const Publication = require("../models/publication.m");
const express=require("express");
const router = express.Router();


router.post("" , async(req,res)=>{
    try{
        const publication = await Publication.create(req.body);
        res.status(200).send(publication)
    }
    catch(err)
    {
        res.status(500).send(err.message);
    }
})

module.exports=router;