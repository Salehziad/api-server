'use strict';
const express = require('express');
// make variable to do routes work
const foodRouter = express.Router();
// require function of food route
const myFunctions = require('./routes-functions/foods.functions');
// use every function with his route
foodRouter.get('/', myFunctions.welcome)
foodRouter.post('/food', myFunctions.addNewFood);
foodRouter.get('/food', myFunctions.getAllFood);
foodRouter.get('/food/:id', myFunctions.getOneFood);
foodRouter.delete('/food/:id', myFunctions.deleteOneFood);
foodRouter.delete('/food', myFunctions.deleteAllFood);
foodRouter.put('/food/:id', myFunctions.updateOneFood);
// export foodRouter to use it in server.js to run all these routes
module.exports = foodRouter;