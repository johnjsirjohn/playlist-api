const Sequelize = require('sequelize');
const db = require('../db');

const Song = db.define(
  'song',
  {
    name: {
      type: Sequelize.STRING, //determines the name of the column that will be added to the table
      field: 'song_name'
    }
  },
  { tableName: 'playlist_songs' }
);

module.exports = Song;
