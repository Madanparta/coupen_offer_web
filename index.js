const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userLoginRouter = require('./src/userLogin');
const offerRouter = require('./src/offer');
const port = 5000;

app.use(bodyParser());

app.use(express.static('public'))

app.set('view engine', 'ejs');
app.set('views','./public')

app.use('/',userLoginRouter)

app.use('/home',offerRouter)

app.listen(port,()=>console.log(`conected with port ${port}..`));