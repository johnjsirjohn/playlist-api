const bodyParser = require('body-parser');
const express = require('express');
const db = require('./db');

const song = require('./songs/model');
const songRouter = require('./songs/router');

const app = express(); //this const is the api server
const jsonParser = bodyParser.json(); //used for the server to read JSON request bodies

// const JWT = require('./auth/jwt');
const authRouter = require('./user/router');
const user = require('./user/router');

//const user = require('./users/model');
//const userRouter = require('./users/router');

app.use(jsonParser);
app.use(songRouter);
app.use(authRouter);
// app.use(userRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));
