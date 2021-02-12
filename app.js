
const express = require('express');
const DB = require('./config/db');
const app = express();

const authenticateDB = async () => {
    try {
        await DB.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
}

const init = async () => {
    await authenticateDB();

    app.get('/', (req, res) => {
        res.send('Hello World!')
    });

    const port = process.env.PORT || 3000

    app.listen(port, () => {
        console.log(`Savers API listening at PORT: ${port}`)
    })
}


init();

