const router = require('express').Router();
const contactsController = require('../controllers/contactsController');

router.get('/', (req, res) => {
    res.send('Welcome to the Contacts API');
});
router.get('/contacts', contactsController.getAllContacts);
router.get('/contacts/:id', contactsController.getContactById);

module.exports = router;