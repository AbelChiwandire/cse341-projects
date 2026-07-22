const express = require('express'); 
const router = express.Router(); 
const swaggerRoute = require('./swaggerRoute');

const propertyRoutes = require('./propertyRoutes'); 
const tenantRoutes = require('./tenantRoutes'); 
router.use('/properties', propertyRoutes); 
router.use('/tenants', tenantRoutes); 
router.use('/docs', swaggerRoute);

module.exports = router;