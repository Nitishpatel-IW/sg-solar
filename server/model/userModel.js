const mongo = require('mongoose');

const UserSchema = new mongo.Schema({
    name: String,
    email: String,
    password: String,
})

const Model = mongo.model("users",UserSchema); 
module.exports = Model;