const mongoose = require("mongoose");

const userLoginSchma = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

const UserLogin = mongoose.model('UserLogin',userLoginSchma);

module.exports = UserLogin;