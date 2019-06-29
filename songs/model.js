const Sequelize = require('sequelize');
const db = require('../db');

const Song = db.define(
  'song',
  {
    title: {
      type: Sequelize.STRING,
      field: 'title'
    },
    artist: {
      type: Sequelize.STRING,
      field: 'artist'
    },
    album: {
      type: Sequelize.STRING,
      field: 'album'
    }
  },

  { tableName: 'songs' }
);

module.exports = Song;
