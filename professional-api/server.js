require('dotenv').config();

const express = require('express');
const app = express();

const { getProfessional } = require('./repositories/professionalRepository');
const { getDatabase } = require('./db/connect');

const cors = require('cors');
app.use(cors());

app.get('/professional', async (req, res) => {
    try {
        const professional = await getProfessional();
        res.json(professional);
    } catch (error) {
        console.error('Error fetching professional data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 8080;

async function startServer() {
    try {
        await getDatabase();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
};

startServer();
