const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'This is a simple API that provides information about contacts. It allows users to retrieve a list of contacts and their details, as well as create new contact entries.',
  },
    host: 'cse341-contacts-api-2xbw.onrender.com',
    schemes: ['https'],
};

const outputFile = './swagger.json';
const routes = ['./routes/contactsRoutes.js'];

swaggerAutogen(outputFile, routes, doc);