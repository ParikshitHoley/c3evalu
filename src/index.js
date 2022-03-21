const express= require("express");
const app = express();
app.use(express.json());
const connect = require("./configs/db");


const RegisterControl = require("./controls/user.c");
app.use("/register" , RegisterControl )

const bookControl = require("./controls/book.c");
app.use("/books" , bookControl)

const publicationControl = require("./controls/publication.c");
app.use("/publication" , publicationControl);





app.listen(5000, async()=>{
    await connect();
    console.log("on port 5000");
})