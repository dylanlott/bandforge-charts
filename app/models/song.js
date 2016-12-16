'use strict';

const Nodal = require('nodal');

class Song extends Nodal.Model {}

Song.setDatabase(Nodal.require('db/main.js'));
Song.setSchema(Nodal.my.Schema.models.Song);

module.exports = Song;
