const express = require('express');
const userLoginRouter = express.Router();
const mongoose = require('mongoose');
const UserLogin = require('../module/userLoginData');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

// IbS6cdpxKnQYbjQv
mongoose.connect('mongodb+srv://partagowda15:IbS6cdpxKnQYbjQv@cluster0.0mchlyc.mongodb.net/')
.then(suce=>{
    console.log("Mongoose connected.!")
}).catch(err=>{
    console.log(err)
})

userLoginRouter.use(bodyParser());

userLoginRouter.get('/register',(req,res)=>{
    res.render("register")
})

userLoginRouter.post('/register',async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        // console.log(name,email,password)
        bcrypt.hash(password,10, async function(err,hash){
            if(err){
                res.render("register")
            }
            const userData = await UserLogin.create({
                name,
                email,
                password:hash
            })
            // console.log(userData)
        })

        res.render("login")

    }catch{
        res.render("register")
    }

})

userLoginRouter.get('/login',(req,res)=>{
    res.render("login")
})

userLoginRouter.post('/login',async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        const dataFinding = await UserLogin.findOne({email})

        bcrypt.compare(password,dataFinding.password,function(err,result){
            if(err){
                res.render("login")
            }
            if(result){
                res.render("home")
            }
        })

    }catch(e){
        res.render("login")
    }
})


userLoginRouter.get('/',(req,res)=>{
    res.render("home")
})

// function checkNotAuthonticated(req,res,next){
//     if(req.isAuthenticated()){
//         return res.redirect('/')
//     }
//     next()
// }

module.exports = userLoginRouter;