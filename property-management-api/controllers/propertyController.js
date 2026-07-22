const Property = require('../models/Property');

// GET /properties
const getAllProperties = async (req, res) => {
  /*
    #swagger.tags = ['Properties']
    #swagger.summary = 'Get all properties'
    #swagger.description = 'Returns a list of all properties.'
    #swagger.responses[200] = {
        description: 'Properties found.'
    }
    #swagger.responses[500] = {
        description: 'Failed to retrieve properties.'
    }
  */
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET /properties/:id
const getPropertyById = async (req, res) => {
    /*
        #swagger.tags = ['Properties']
        #swagger.summary = 'Get property by ID'
        #swagger.description = 'Returns a property by its ID.'

        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Property ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: 'Property found.'
        }

        #swagger.responses[400] = {
            description: 'Invalid property ID.'
        }

        #swagger.responses[404] = {
            description: 'Property not found.'
        }

        #swagger.responses[500] = {
            description: 'Failed to retrieve property.'
        }
    */

    try {
        const property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST /properties
const createProperty = async (req, res) => {
    /*
        #swagger.tags = ['Properties']
        #swagger.summary = 'Create property'
        #swagger.description = 'Creates a new property'

        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Property information',
            required: true,
            schema: {
                name: 'Luveve Apartments',
                address: '446 Hlangabeza, Bulawayo',
                type: 'Apartment',
                rent: 8500,
                rooms: 2,
                occupied: false,
                yearBuilt: 2015
            }
        }

        #swagger.responses[201] = {
            description: 'Property created successfully.'
        }

        #swagger.responses[400] = {
            description: 'Validation failed.'
        }

        #swagger.responses[500] = {
            description: 'Failed to create property.'
        }
    */
    try {
        const property = await Property.create(req.body);
        res.status(201).json(property);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// PUT /properties/:id
const updateProperty = async (req, res) => {
    /*
        #swagger.tags = ['Properties']
        #swagger.summary = 'Update property'
        #swagger.description = 'Updates an existing property.'

        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Property ID',
            required: true,
            type: 'string'
        }

        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Updated property information',
            required: true,
            schema: {
                name: 'Luveve Apartments',
                address: '446 Hlangabeza, Bulawayo',
                type: 'Apartment',
                rent: 12000,
                rooms: 4,
                occupied: false,
                yearBuilt: 2015
            }
        }

        #swagger.responses[200] = {
            description: 'Property updated successfully.'
        }

        #swagger.responses[400] = {
            description: 'Validation failed or invalid property ID.'
        }

        #swagger.responses[404] = {
            description: 'Property not found.'
        }

        #swagger.responses[500] = {
            description: 'Failed to update property.'
        }
    */
    try {
        const property = await Property.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: 'after' }
        );

        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE /properties/:id
const deleteProperty = async (req, res) => {
    /*
        #swagger.tags = ['Properties']
        #swagger.summary = 'Delete property'
        #swagger.description = 'Deletes an existing property.'

        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Property ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: 'Property deleted successfully.'
        }

        #swagger.responses[400] = {
            description: 'Invalid property ID.'
        }

        #swagger.responses[404] = {
            description: 'Property not found.'
        }

        #swagger.responses[500] = {
            description: 'Failed to delete property.'
        }
    */

    try {
        const property = await Property.findByIdAndDelete(req.params.id);

        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        res.status(200).json({ message: 'Property deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllProperties,
    getPropertyById,
    createProperty,
    updateProperty,
    deleteProperty
};
