const express = require("express");
const app = express();
require("dotenv").config()
require("./Connection")
const Auth = require("./Controller/AuthController")


// Middlarewares

app.use(express.json())




app.listen(5080, ()=>{
    console.log("Server is running at port 5080")
})

app.use("/API/Auth", Auth)




