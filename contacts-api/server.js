require('dotenv').config();

const express = require('express');
const app = express();

const cors = require('cors');

const { getDatabase } = require('./db/connect');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes/contactsRoutes'));

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