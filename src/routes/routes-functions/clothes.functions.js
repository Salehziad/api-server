'use strict';
// require Food module to acces to table
const {
    Clothes
} = require('../../modules/index');
// home bage welcome
async function welcome(req, res) {
    res.status(200).send(`welcome to Clothes and clothes server`)
}
// add Clothes
async function addNewClothes(req, res) {
    let newClothes = req.body;
    let clothes = await Clothes.create(newClothes);
    res.status(201).json(clothes);
}
// get all Clothes
async function getAllClothes(req, res) {
    let clothes = await Clothes.read();
    res.status(200).json(clothes);
}
// get one Clothes
async function getOneClothes(req, res) {
    let ClothesId = req.params.id;
    let record = await Clothes.read(ClothesId);
    res.status(200).json(record);
}
// delete Clothes
async function deleteOneClothes(req, res) {
    let clothesId = req.params.id;
    let record = await Clothes.delete(clothesId);
    res.status(204).send("byby");
}
// delete all Clothes
async function deleteAllClothes(req, res) {
    let clothes = await Clothes.delete();
    res.status(204).send('deleted')
}
// update one Clothes
async function updateOneClothes(req, res) {
    const clothesId = req.params.id;
    let updateClothes = req.body;
    let foundClothes = await Clothes.read(clothesId);
    if (foundClothes) {
        let updatedClothes = await foundClothes.update(updateClothes);
        res.status(201).json(updatedClothes);
    }
}
module.exports = {
    welcome,
    addNewClothes,
    getAllClothes,
    getOneClothes,
    deleteOneClothes,
    deleteAllClothes,
    updateOneClothes
};