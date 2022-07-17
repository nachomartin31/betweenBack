const {model, Schema} = require('mongoose');

const locationSchema = Schema({
    city: String,
    country: String
})

const temperatureSchema = Schema({
    celsius: Number,
    farenheit: Number
})
const windSchema = Schema({
    metric: Number,
    imperial: Number
})
const weatherDataSchema = Schema({
    location: locationSchema,
    date: Date,
    hourlyTemperature: [temperatureSchema],
    averageTemperature: [temperatureSchema],
    averageWindSpeed: [windSchema],
    weatherType: String,
    
})

module.exports = model("Weather Data", weatherDataSchema)