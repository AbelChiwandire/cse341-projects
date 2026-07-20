const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    type: { type: String, required: true },
    rent: { type: Number, required: true },
    rooms: { type: Number, required: true },
    occupied: { type: Boolean, default: false },
    yearBuilt: { type: Date, required: true }
})

module.exports = mongoose.model('Property', propertySchema);