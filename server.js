const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

import('open').then((openModule) => {
    const open = openModule.default;

    dotenv.config();

    const app = express();

    app.use(cors());
    app.use(express.static(path.join(__dirname, 'public')));
    app.get('/config', (req, res) => {
        res.json({
            API_KEY: process.env.API_KEY,
            API_URL: process.env.API_URL,
        });
    });

    const PORT = 5000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        open(`http://localhost:${PORT}`);
    });
});