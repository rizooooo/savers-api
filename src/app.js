const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
const DB = require('../config/db');
const { InquiryRoutes } = require('./routes');


const authenticateDB = async () => {
    try {
        await DB.authenticate();
        await DB.sync();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
}

const init = async () => {
    await authenticateDB();

    const app = express();
    const router = express.Router();

    app.use(express.json());
    app.use('/api/v1', router);

    app.get('/', (req, res) => {
        res.send('Hello World!')
    });


    router.use('/inquiry', InquiryRoutes)


    const port = process.env.PORT || 3000

    app.listen(port, () => {
        console.log(`Savers API listening at PORT: ${port}`)
    })
}


init();

