'use strict';
// apply dotenv backage and used in server in file .env
require('dotenv').config();
// get the port from .env
const PORT=process.env.PORT;
// require server to start the server
const server=require('./src/server');
// require database before connection
const {db}=require('./src/modules/index');
// wait to connect to the database then start the server
db.sync().then(()=>{
    server.start(PORT|| 3000);
});

