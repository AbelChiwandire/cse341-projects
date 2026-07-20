const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    moveInDate: { type: Date, required: true },
    propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true }
});

module.exports = mongoose.model('Tenant', tenantSchema);