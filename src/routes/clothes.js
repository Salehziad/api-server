'use strict';
const express = require('express');
// make variable to do routes work
const clothesRouter = express.Router();
// require function of food route
const myFunctions = require('./routes-functions/clothes.functions');
// use every function with his route
clothesRouter.get('/', myFunctions.welcome)
clothesRouter.post('/clothes', myFunctions.addNewClothes);
clothesRouter.get('/clothes', myFunctions.getAllClothes);
clothesRouter.get('/clothes/:id', myFunctions.getOneClothes);
clothesRouter.delete('/clothes/:id', myFunctions.deleteOneClothes);
clothesRouter.delete('/clothes', myFunctions.deleteAllClothes);
clothesRouter.put('/clothes/:id', myFunctions.updateOneClothes);
// export foodRouter to use it in server.js to run all these routes
module.exports = clothesRouter;