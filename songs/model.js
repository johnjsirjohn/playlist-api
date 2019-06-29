const Sequelize = require('sequelize');
const db = require('../db');

const Song = db.define(
  'song',
  {
    title: {
      type: Sequelize.STRING,
      field: 'song_title'
    },
    artist: {
      type: Sequelize.INTEGER,
      field: 'artist_name'
    },
    album: {
      type: Sequelize.STRING,
      field: 'albums_title'
    }
  },
  { tableName: 'songs' }
);

module.exports = Song;
