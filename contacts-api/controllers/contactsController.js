const contactsModel = require('../models/contactsModel');

async function getAllContacts(req, res) {
    try {
        const contacts = await contactsModel.getAllContacts();
        res.status(200).json(contacts);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to retrieve contacts' });
    }
}

async function getContactById(req, res) {
    const id = req.params.id;
    try {
        const contact = await contactsModel.getContactById(id);
        if (!contact) {
            res.status(404).json({ error: 'Contact not found' });
        } else {
            res.status(200).json(contact);
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to retrieve contact' });
    }
}

module.exports = { getAllContacts, getContactById };