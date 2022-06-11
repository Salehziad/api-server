'use strict';
const express=require('express');
const app=express();
const logger=require('./middleWar/logger')
// require routes
const foodRouter=require('./routes/food');
const clothesRouter=require('./routes/clothes');
const handleNotFound=require('./handlers/404');
const handleServerError=require('./handlers/500');
// to read what inside body
app.use(express.json());
// use routes wich as glopal consider as middle war functions
app.use(logger);
app.use(foodRouter);
app.use(clothesRouter);
app.use('*',handleNotFound);
app.use(handleServerError);
// this used for console all methods and endpoints that used in the server
const listEndpoints = require("express-list-endpoints"); // npm i express-list-endpoints
console.log(listEndpoints(app));
// this to start the sarver by taking PORT from index.js 
function start(PORT){
    app.listen(PORT,()=>{
        console.log(`server is lestining on port ${PORT}`)
    })
}
// to exports the function to start server from index.js
module.exports={
    app:app,
    start:start
}