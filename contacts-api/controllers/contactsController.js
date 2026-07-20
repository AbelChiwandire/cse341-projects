const contactsModel = require('../models/contactsModel');
const { ObjectId } = require('mongodb');

async function getAllContacts(req, res) {
  /*
    #swagger.tags = ['Contacts']
    #swagger.summary = 'Get all contacts'
    #swagger.description = 'Returns a list of all contacts.'
    #swagger.responses[200] = {
        description: 'Contacts found.'
    }
    #swagger.responses[500] = {
        description: 'Failed to retrieve contacts.'
    }
  */
  try {
    const contacts = await contactsModel.getAllContacts();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error retrieving contacts:', error);
    res.status(500).json({ error: 'Failed to retrieve contacts' });
  }
}

async function getContactById(req, res) {
  /*
    #swagger.tags = ['Contacts']
    #swagger.summary = 'Get contact by ID'
    #swagger.description = 'Returns a contact by its ID.'
    #swagger.responses[200] = {
        description: 'Contact found.'
    }
    #swagger.responses[404] = {
        description: 'Contact not found.'
    }
    #swagger.responses[500] = {
        description: 'Failed to retrieve contact.'
    }
  */
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
      return res.status(400).json({
          error: "Invalid contact id"
      });
  }
  try {
    const contact = await contactsModel.getContactById(id);
    if (!contact) {
      res.status(404).json({ error: 'Contact not found' });
    } else {
      res.status(200).json(contact);
    }
  } catch (error) {
    console.error('Error retrieving contact:', error);
    res.status(500).json({ error: 'Failed to retrieve contact' });
  }
}

async function createContact(req, res) {
  /*
    #swagger.tags = ['Contacts']
    #swagger.summary = 'Create contact'
    #swagger.description = 'Creates a new contact.'
    #swagger.responses[201] = {
        description: 'Contact created successfully.'
    }
    #swagger.responses[500] = {
        description: 'Failed to create contact.'
    }
  */
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  try {
    const newContactId = await contactsModel.createContact(contact);
    res.status(201).json(newContactId);
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ error: 'Failed to create contact' });
  }
}

async function updateContact(req, res) {
  /*
    #swagger.tags = ['Contacts']
    #swagger.summary = 'Update contact'
    #swagger.description = 'Updates an existing contact.'
    #swagger.responses[200] = {
        description: 'Contact updated successfully.'
    }
    #swagger.responses[404] = {
        description: 'Contact not found.'
    }
    #swagger.responses[500] = {
        description: 'Failed to update contact.'
    }
  */
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
      return res.status(400).json({
          error: "Invalid contact id"
      });
  }
  const updatedContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  try {
    const success = await contactsModel.updateContact(id, updatedContact);
    if (!success) {
      res.status(404).json({ error: 'Contact not found' });
    }

    res.status(200).json({ message: 'Contact updated successfully' });
  
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({ error: 'Failed to update contact' });
  }
}

async function deleteContact(req, res) {
  /*
    #swagger.tags = ['Contacts']
    #swagger.summary = 'Delete contact'
    #swagger.description = 'Deletes an existing contact.'
    #swagger.responses[200] = {
        description: 'Contact deleted successfully.'
    }
    #swagger.responses[404] = {
        description: 'Contact not found.'
    }
    #swagger.responses[500] = {
        description: 'Failed to delete contact.'
    }
  */
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
      return res.status(400).json({
          error: "Invalid contact id"
      });
  }
  try {
    const success = await contactsModel.deleteContact(id);
    if (!success) {
      res.status(404).json({ error: 'Contact not found' });
    }

    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({ error: 'Failed to delete contact' });
  }
}

module.exports = { getAllContacts, getContactById, createContact, updateContact, deleteContact };
