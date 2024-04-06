const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./model/user.tsx");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/user");

app.post('/login', (req,res) => {
    const {email,password} = req.body;
    UserModel.findOne({email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("Incorrect Password")
            }
        }else{
            res.json("No record found")
        }

    })
})
app.post('/register', (req, res) =>{
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.listen(3005,() => {
    console.log("server is running")
})