const tenantSchema = require('../validators/tenantValidator');

function validateTenant(req, res, next) {
    const { error, value } = tenantSchema.validate(req.body, {
        abortEarly: false
    });

    if (error) {
        const errors = error.details.map(detail => detail.message);

        return res.status(400).json({ errors });
    }

    req.body = value;

    next();
}

module.exports = validateTenant;