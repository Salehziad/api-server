'use strict';
const clothes = (sequelize, DataTypes) =>
  sequelize.define('clothes', {
    name: {
      type: DataTypes.STRING,
    },
    Descreption: {
      type: DataTypes.STRING,
    },
    brand: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.STRING,
    },
  });

module.exports = clothes;