const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json({ type: 'application/vnd.api+json' })); //built-in body-parser

app.use('/api', router);

module.exports = app;