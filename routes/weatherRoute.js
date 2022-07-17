const {Router} = require("express");
const weatherDataController = require("../controllers/weatherDataController");

const {getData, deleteData, createData} = weatherDataController;

const weatherRouter = new Router();

weatherRouter
.route("/")
.get(getData)
.post(createData)
.delete(deleteData);

module.exports = weatherRouter;