const Joi = require('joi');

const contactSchema = Joi.object({
    firstName: Joi.string().trim().min(2).max(50).required(),
    lastName: Joi.string().trim().min(2).max(50).required(),
    email: Joi.string().trim().lowercase().email().required(),
    favoriteColor: Joi.string().trim().min(3).max(50).optional(),
    birthday: Joi.date().optional()
})

module.exports = contactSchema;