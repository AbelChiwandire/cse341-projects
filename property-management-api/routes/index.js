const express = require('express'); 
const router = express.Router(); 

const propertyRoutes = require('./propertyRoutes'); 
const tenantRoutes = require('./tenantRoutes'); 
router.use('/properties', propertyRoutes); 
router.use('/tenants', tenantRoutes); 

module.exports = router;