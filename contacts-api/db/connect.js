const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);
let database;

async function getDatabase() {
    if (database) {
        return database;
    }

    try {
        await client.connect();
        database = client.db('contactsDB');
        console.log('Connected to MongoDB Atlas. Using database: contactsDB');

        return database;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

module.exports = { getDatabase };