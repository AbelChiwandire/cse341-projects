const Tenant = require('../models/Tenants');

// GET /tenants
const getAllTenants = async (req, res) => {
    try {
        const tenants = await Tenant.find();
        res.status(200).json(tenants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET /tenants/:id
const getTenantById = async (req, res) => {
    try {
        const tenant = await Tenant.findById(req.params.id);

        if (!tenant) {
            return res.status(404).json({ message: 'Tenant not found' });
        }

        res.status(200).json(tenant);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST /tenants
const createTenant = async (req, res) => {
    try {
        const tenant = await Tenant.create(req.body);
        res.status(201).json(tenant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// PUT /tenants/:id
const updateTenant = async (req, res) => {
    try {
        const tenant = await Tenant.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!tenant) {
            return res.status(404).json({ message: 'Tenant not found' });
        }

        res.status(200).json(tenant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE /tenants/:id
const deleteTenant = async (req, res) => {
    try {
        const tenant = await Tenant.findByIdAndDelete(req.params.id);

        if (!tenant) {
            return res.status(404).json({ message: 'Tenant not found' });
        }

        res.status(200).json({ message: 'Tenant deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllTenants,
    getTenantById,
    createTenant,
    updateTenant,
    deleteTenant
};