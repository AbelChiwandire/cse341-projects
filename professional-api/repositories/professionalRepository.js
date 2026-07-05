const { getDatabase } = require('../db/connect');

async function getProfessional() {
    const db = await getDatabase();
    return db.collection('professionals').findOne();
}

module.exports = { getProfessional };