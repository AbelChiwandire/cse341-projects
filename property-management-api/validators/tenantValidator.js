const Joi = require('joi');

const tenantSchema = Joi.object({
    firstName: Joi.string().trim().min(2).max(50).required(),
    lastName: Joi.string().trim().min(2).max(50).required(),
    email: Joi.string().trim().lowercase().email().required(),
    phoneNumber: Joi.string().trim().required(),
    moveInDate: Joi.date().required(),
    propertyId: Joi.string().hex().length(24).required()
});

module.exports = tenantSchema;