'use strict';
const food = (sequelize, DataTypes) =>
  sequelize.define('foods', {
    FoodName: {
      type: DataTypes.STRING,
    },
    Descreption: {
      type: DataTypes.STRING,
    },
    Benifits: {
      type: DataTypes.STRING,
    }
  });

module.exports = food;