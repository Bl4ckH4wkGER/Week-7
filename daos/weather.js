const mongoose = require("mongoose");
const Weather = require("../models/weather");

module.exports = {};

module.exports.getLocationData = async (name) => {
    try {
        const location = await Weather.findOne({ name: name});
        return location
    } catch (e) {
        throw e;
    }
}
