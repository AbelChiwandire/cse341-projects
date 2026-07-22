const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Property Management API',
    description: 'This is a RESTful API that provides information about properties and their tenants.',
  },
    host: 'property-management-api-1ai4.onrender.com',
    basePath: '/api',
    schemes: ['https'],
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);