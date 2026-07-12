const routes = require('express').Router();
const temples = require('../controllers/temple');

// Retrieve all temples
routes.get('/', temples.findAll);

// Retrieve a single temple by temple_id
routes.get('/:temple_id', temples.findOne);

// Create a new temple
routes.post('/', temples.create);

// Update a temple by temple_id
routes.put('/:temple_id', temples.update);

// Delete a temple by temple_id
routes.delete('/:temple_id', temples.delete);

// Delete all temples
routes.delete('/', temples.deleteAll);

module.exports = routes;
