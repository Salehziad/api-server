'use strict';
// require Food module to acces to table
const {
    Food
} = require('../../modules/index');
// home bage welcome
async function welcome(req, res) {
    res.status(200).send(`welcome to food and clothes server`)
}
// add food
async function addNewFood(req, res) {
    let newFood = req.body;
    let food = await Food.create(newFood);
    res.status(201).json(food);
}
// get all food
async function getAllFood(req, res) {
    let food = await Food.read();
    res.status(200).json(food);
}
// get one food
async function getOneFood(req, res) {
    let foodId = req.params.id;
    let record = await Food.read(foodId);
    res.status(200).json(record);
}
// delete food
async function deleteOneFood(req, res) {
    let foodId = req.params.id;
    let record = await Food.delete(foodId);
    res.status(204).send("byby");
}
// delete all food
async function deleteAllFood(req, res) {
    let food = await Food.delete();
    res.status(204).send('deleted')
}
// update one food
async function updateOneFood(req, res) {
    const foodId = req.params.id;
    let updateFood = req.body;
    let foundFood = await Food.read(foodId);
    if (foundFood) {
        let updatedFood = await foundFood.update(updateFood);
        res.status(201).json(updateFood);
    }
}
module.exports = {
    welcome,
    addNewFood,
    getAllFood,
    getOneFood,
    deleteOneFood,
    deleteAllFood,
    updateOneFood
};