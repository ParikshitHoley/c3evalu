const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    likes : { type : Number , required : true , default : 0},
    coverImage : { type : String , required : true },
    content : { type : String , required : true},
    userId : { type : mongoose.Schema.Types.ObjectId ,  ref: "user" , required : true},
    publicationId : { type : mongoose.Schema.Types.ObjectId ,  ref: "publication" , required : true}
},
{
    versionKey : false,
    timestamps : true
})

const Book = mongoose.model("book" , bookSchema);

module.exports=Book;