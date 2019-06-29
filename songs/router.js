const express = require('express');
const { Router } = require('express');
const Song = require('./model');

const router = new Router();

router.get('/song', (request, response, next) =>
  Song.findAll()
    .then(songs => response.send(songs))
    .catch(error => next(error))
);

//add a song
router.post('/song', (req, res, next) => {
  let { title, artist, album } = req.body;
  Song.create(req.body)
    .then(song => {
      res.status(201).json({
        message: 'A NEW SONG WAS ADDED',
        'new Song': song
      });
    })
    .catch(error => next(error));
});

module.exports = router;
