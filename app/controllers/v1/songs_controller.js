'use strict';

const Nodal = require('nodal');
const Song = Nodal.require('app/models/song.js');

class V1SongsController extends Nodal.Controller {

  index() {

    Song.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Song.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    Song.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Song.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Song.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = V1SongsController;
