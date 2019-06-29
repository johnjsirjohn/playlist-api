const express = require('express');
const db = require('./db');

const song = require('./songs/model');
const songRouter = require('./songs/router');

const app = express(); //this const is the api server
app.use(songRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));
