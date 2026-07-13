const { getDatabase } = require('../db/connect');
const { ObjectId } = require('mongodb');

async function getAllContacts() {
  const db = await getDatabase();
  return db.collection('contacts').find({}).toArray();
}

async function getContactById(id) {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const db = await getDatabase();
  return db.collection('contacts').findOne({ _id: new ObjectId(id) });
}

async function createContact(contact) {
  const db = await getDatabase();
  const result = await db.collection('contacts').insertOne(contact);
  return { id: result.insertedId };
}

async function updateContact(id, updatedContact) {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const db = await getDatabase();
  const result = await db.collection('contacts').updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedContact }
  );

  return result.modifiedCount > 0;
}

async function deleteContact(id) {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const db = await getDatabase();
  const result = await db.collection('contacts').deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount > 0;
}

module.exports = { getAllContacts, getContactById, createContact, updateContact, deleteContact };
