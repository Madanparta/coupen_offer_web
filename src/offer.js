const express = require('express');
const Offers = require('../module/offerData')
const offerRouter = express.Router();
const bodyParser = require('body-parser');

offerRouter.use(bodyParser());

offerRouter.post('/offer',async(req,res)=>{
    try{
        // const registeredForm = {
        //     player_id : req.body.player_Id,
        //     age : req.body.age,
        //     country : req.body.country, 
        //     installed_days : req.body.installed_days, 
        //     coins : req.body.coins, 
        //     gems : req.body.gems, 
        //     game_level : req.body.game_level, 
        //     purchaser : req.body.purchaser,
        // }
        console.log(req.body)

        const offerCreating = await Offers.create(req.body);
        res.status(201).json({
            status:"sucess",
            message:"ok"
        })

    }catch(e){
        res.status(500).json({
            status:"failer",
            message:e.message
        })
    }
})

module.exports = offerRouter;