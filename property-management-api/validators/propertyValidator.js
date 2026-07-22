const Joi = require('joi');

const propertySchema = Joi.object({
    name: Joi.string().trim().min(2).max(100).required(),
    address: Joi.string().trim().min(5).max(200).required(),
    type: Joi.string().trim().required(),
    rent: Joi.number().positive().required(),
    rooms: Joi.number().integer().min(1).required(),
    occupied: Joi.boolean().required(),
    yearBuilt: Joi.number().integer().min(1800).required()
});

module.exports = propertySchema;