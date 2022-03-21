const mongoose = require("mongoose");

const publicationSchema = mongoose.Schema({
    publicationname : { type : String , required : true}

}
,{
    versionKey:false,
    timestamps:true
})

const Publication = mongoose.Schema("publication" , publicationSchema);

module.exports=Publication;