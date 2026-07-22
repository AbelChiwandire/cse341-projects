const Tenant = require('../models/Tenants');

// GET /tenants
const getAllTenants = async (req, res) => {
    /*
        #swagger.tags = ['Tenants']
        #swagger.summary = 'Get all tenants'
        #swagger.description = 'Returns a list of all tenants.'

        #swagger.responses[200] = {
            description: 'Tenants found.'
        }

        #swagger.responses[500] = {
            description: 'Failed to retrieve tenants.'
        }
    */
    try {
        const tenants = await Tenant.find();
        res.status(200).json(tenants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET /tenants/:id
const getTenantById = async (req, res) => {
    /*
        #swagger.tags = ['Tenants']
        #swagger.summary = 'Get tenant by ID'
        #swagger.description = 'Returns a tenant by its ID.'

        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Tenant ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: 'Tenant found.'
        }

        #swagger.responses[400] = {
            description: 'Invalid tenant ID.'
        }

        #swagger.responses[404] = {
            description: 'Tenant not found.'
        }

        #swagger.responses[500] = {
            description: 'Failed to retrieve tenant.'
        }
    */
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
    /*
        #swagger.tags = ['Tenants']
        #swagger.summary = 'Create tenant'
        #swagger.description = 'Creates a new tenant'

        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Tenant information',
            required: true,
            schema: {
                firstName: 'Abel',
                lastName: 'Chiwandire',
                email: 'abel.chi@email.com',
                phoneNumber: '0821234567',
                moveInDate: '2025-01-15',
                propertyId: '6a5e982137a85022115d397b'
            }
        }

        #swagger.responses[201] = {
            description: 'Tenant created successfully.'
        }

        #swagger.responses[400] = {
            description: 'Validation failed.'
        }

        #swagger.responses[500] = {
            description: 'Failed to create tenant.'
        }
    */
    try {
        const tenant = await Tenant.create(req.body);
        res.status(201).json(tenant);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// PUT /tenants/:id
const updateTenant = async (req, res) => {
    /*
        #swagger.tags = ['Tenants']
        #swagger.summary = 'Update tenant'
        #swagger.description = 'Updates an existing tenant.'

        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Tenant ID',
            required: true,
            type: 'string'
        }

        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Updated tenant information',
            required: true,
            schema: {
                firstName: 'Abel',
                lastName: 'Chiwandire',
                email: 'abel.chi@email.com',
                phoneNumber: '0783782606',
                moveInDate: '2025-01-15',
                propertyId: '6a5e982137a85022115d397b'
            }
        }

        #swagger.responses[200] = {
            description: 'Tenant updated successfully.'
        }

        #swagger.responses[400] = {
            description: 'Validation failed or invalid tenant ID.'
        }

        #swagger.responses[404] = {
            description: 'Tenant not found.'
        }

        #swagger.responses[500] = {
            description: 'Failed to update tenant.'
        }
    */
    try {
        const tenant = await Tenant.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: 'after' }
        );

        if (!tenant) {
            return res.status(404).json({ message: 'Tenant not found' });
        }

        res.status(200).json(tenant);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE /tenants/:id
const deleteTenant = async (req, res) => {
    /*
        #swagger.tags = ['Tenants']
        #swagger.summary = 'Delete tenant'
        #swagger.description = 'Deletes an existing tenant.'

        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Tenant ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: 'Tenant deleted successfully.'
        }

        #swagger.responses[400] = {
            description: 'Invalid tenant ID.'
        }

        #swagger.responses[404] = {
            description: 'Tenant not found.'
        }

        #swagger.responses[500] = {
            description: 'Failed to delete tenant.'
        }
    */
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