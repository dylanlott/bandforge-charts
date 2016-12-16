'use strict';

const Nodal = require('nodal');

/* Include this file to enable Model relationships */

/* For example...

  const Post = Nodal.require('app/models/post.js');
  const Comment = Nodal.require('app/models/comment.js');

  Comment.joinsTo(Post, {multiple: true});

*/

  const User = Nodal.require('app/models/user.js');
  const Song = Nodal.require('app/models/song.js');

  Song.joinsTo(User, {multiple: true});
  Comment.joinsTo(Song, {multiple: true});

module.exports = {}; // Don't need to export anything
