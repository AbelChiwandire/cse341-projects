const express = require('express'); 
const router = express.Router(); 
const tenantValidator = require('../middleware/tenantValidator');
const validateID = require('../middleware/objectIdValidator');

const { 
    getAllTenants, getTenantById, 
    createTenant, updateTenant, 
    deleteTenant } = require('../controllers/tenantController'); 
    
    router.get('/', getAllTenants); 
    router.get('/:id', validateID, getTenantById); 
    router.post('/', tenantValidator, createTenant); 
    router.put('/:id', tenantValidator, validateID, updateTenant); 
    router.delete('/:id', validateID, deleteTenant); 
    
    module.exports = router;