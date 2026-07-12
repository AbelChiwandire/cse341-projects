const routes = require('express').Router();
const temple = require('./temple');
const apiKeyMiddleware = require('../middleware/apiKey');

routes.use('/temples',apiKeyMiddleware, temple);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://nathanbirch.github.io/nathan-byui-api-docs',
    };
    res.send(docData);
  })
);

module.exports = routes;
