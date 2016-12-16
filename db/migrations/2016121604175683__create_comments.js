'use strict';

const Nodal = require('nodal');

class CreateComments extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016121604175683;
  }

  up() {

    return [
      this.createTable("comments", [{"name":"body","type":"text"},{"name":"deleted","type":"boolean"},{"name":"user_id","type":"int"},{"name":"votes","type":"int"}])
    ];

  }

  down() {

    return [
      this.dropTable("comments")
    ];

  }

}

module.exports = CreateComments;
