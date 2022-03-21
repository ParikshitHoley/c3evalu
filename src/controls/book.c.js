const express = require("express");
const router = express.Router();
const Book = require("../models/book.m");
const bookupload = require("../middelware/book.upload");
const User = require("../models/user.m");


router.post("" , bookupload.single("coverImage")), async(req,res)=>{
    try{
        const bookdetail = await Book.create({
            likes : req.body.likes,
            content : req.body.content,
            coverImage : req.file.path,
            userId : req.body.userId,
            publicationId : req.body.publicationId
        })

        res.status(200).send(bookdetails);

    }
    catch(err)
    {
        res.status(500).send("err.message")
    }
}

module.exports=router;

