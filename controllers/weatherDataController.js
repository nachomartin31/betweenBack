const weatherData = require("../models/weatherDataModel");

const serverError = require("../utils/error500")

async function getData({query}, res){
    try {
        const weatherEntries = await weatherData.find(query);
        if(!weatherEntries){
            return res.status(404)
        }
        return res.status(200).json(weatherEntries);
    } catch (error) {
        serverError(res);
    }
};

async function deleteData({query}, res){
    try {
        const deletedWeatherEntries = await weatherData.deleteMany(query);
        res.status(200).json(deletedWeatherEntries);
    } catch (error) {
        serverError(res);
    }
};

async function createData({body}, res){
    try {
        const newWeatherEntry = await weatherData.create(body);
        if(!newWeatherEntry){res.status(403).json({message: "Bad request"})}
        res.status(201).json(newWeatherEntry)
    } catch (error) {
        serverError(res);
    }
};

module.exports ={
    getData,
    deleteData,
    createData
};