const router = require('express').Router();
const contactsController = require('../controllers/contactsController');
const validateContact = require('../middleware/validateContact');

router.get('/', (req, res) => {
  res.send('Welcome to the Contacts API');
});
router.get('/contacts', contactsController.getAllContacts);
router.get('/contacts/:id', contactsController.getContactById);
router.post('/contacts', validateContact, contactsController.createContact);
router.put('/contacts/:id', validateContact, contactsController.updateContact);
router.delete('/contacts/:id', contactsController.deleteContact);

module.exports = router;
