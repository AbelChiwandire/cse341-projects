const express = require('express'); 
const router = express.Router(); 
const propertyValidator = require('../middleware/propertyValidator');
const validateID = require('../middleware/objectIdValidator');

const { 
    getAllProperties, getPropertyById, 
    createProperty, updateProperty, 
    deleteProperty } = require('../controllers/propertyController'); 

router.get('/', getAllProperties); 
router.get('/:id', validateID, getPropertyById); 
router.post('/', propertyValidator, createProperty); 
router.put('/:id', propertyValidator, validateID, updateProperty); 
router.delete('/:id', validateID, deleteProperty); 

module.exports = router;