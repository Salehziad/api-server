'use strict';
require('dotenv').config();
// make connection with database 
const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL; // npm i sqlite3
// to succesful connect when using heroku
let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
} : {};
// require models to use them in sequalize
const food = require('./food.module');
const clothes = require('./clothes.model')
// requiring sequalize  to start working with it
const {
    Sequelize,
    DataTypes
} = require("sequelize");
const sequalize = new Sequelize(POSTGRES_URI, sequelizeOptions);
// make modelTable to use them again to link with collection
const foodTable = food(sequalize, DataTypes);
const clothesTable = clothes(sequalize, DataTypes);
// require collection and use them with tables
const Collection = require('./collection-class');
// make tables in collections
const foodCollection = new Collection(foodTable);
const clothesCollection = new Collection(clothesTable)
// export database and modules to use them in routes
module.exports = {
    db: sequalize, // this to make connection server with database 
    Food: foodCollection,
    Clothes: clothesCollection
}