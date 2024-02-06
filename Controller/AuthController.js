const express = require("express")
const Router = express.Router();
const Auth = require("../Models/Authmodel")




//Register API

Router.post("/register", async (req, res) => {
    const { firstname, lastname, email, phone, password } = req.body;

    if (!firstname || !lastname || !email || !phone || !password) {
        return res.json({ "msg": "All fields are mandatory" })
    }


    const checkUser = await Auth.findOne({ email });

    if (checkUser) {
        return res.json({ "msg": "User Already Registered with this Email Address" })
    }

    else {
        const createUser = await Auth.create({
            firstname,
            lastname,
            email,
            phone,
            password
        });

        if (createUser) {
            return res.json({ "msg": "Registed successfully!" })
        }

        else {
            return res.json({ "msg": "Failed to create an Account" })
        }
    }
})


//Login API

Router.post("/login", async(req, res)=>{
    const {email, password} = req.body
})

module.exports = Router