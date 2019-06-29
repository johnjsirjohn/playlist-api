const express = require('express');
const { Router } = require('express');
const Song = require('./model');

const router = new Router();

//Show all songs
router.get('/playlist/song', (request, response, next) =>
  Song.findAll()
    .then(songs => response.send(songs))
    .catch(error => next(error))
);

//Add a song
router.post('/playlist/:id/song', (req, res, next) => {
  let { title, artist, album } = req.body;
  Song.create(req.body)
    .then(song => {
      res.status(201).json({
        message: 'A New Song Was Added',
        'new Song': song
      });
    })
    .catch(error => next(error));
});

//Show a song by id
router.get('/playlist/song/:id', (req, res, next) => {
  const id = req.params.id;
  Song.findByPk(id)
    .then(song => {
      res.status(200).json({ song: song });
    })
    .catch(error => next(error));
});

module.exports = router;
