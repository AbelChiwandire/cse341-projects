const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Property Management API',
    description: 'This is a RESTful API that provides information about properties and their tenants.',
  },
    host: 'localhost:8080',
    basePath: '/api',
    schemes: ['https', 'http'],
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);