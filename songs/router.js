const express = require('express');
const { Router } = require('express');
const Song = require('./model');

const router = new Router();

router.get('/song', (request, response, next) =>
  Song.findAll()
    .then(songs => response.send(songs))
    .catch(error => next(error))
);

module.exports = router;
