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

module.exports = { getAllContacts, getContactById };