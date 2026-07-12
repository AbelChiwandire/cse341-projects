const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Temples API',
    description: 'This is a simple API that provides information about temples. It allows users to retrieve a list of temples and their details, as well as create new temple entries. The API requires an API key for access, which can be obtained by following the documentation provided.',
  },
  host: 'localhost:8080'
};

const outputFile = './swagger-output.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);
