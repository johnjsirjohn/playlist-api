const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');

const song = require('./songs/model');
const songRouter = require('./songs/router');

const app = express(); //this const is the api server
const jsonParser = bodyParser.json(); //used for the server to read JSON request bodies
app.use(jsonParser);
app.use(songRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));
