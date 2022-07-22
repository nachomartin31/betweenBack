const {model, Schema} = require('mongoose');



const weatherDataSchema = Schema({
    location: {
        city: String,
        country: String
    },
    date: String,
    hourlyTemperature: [
        {
        celsius: Number,
        farenheit: Number
    }],
    averageTemperature: {
        celsius: Number,
        farenheit: Number
    },
    averageWindSpeed: {
        metric: Number,
        imperial: Number
    },
    weatherType: String,
    
})

module.exports = model("Weather Data", weatherDataSchema)