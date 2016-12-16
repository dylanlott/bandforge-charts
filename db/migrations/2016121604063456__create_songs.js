'use strict';

const Nodal = require('nodal');

class CreateSongs extends Nodal.Migration {

    constructor(db) {
        super(db);
        this.id = 2016121604063456;
    }

    up() {

        return [
            this.createTable("songs", [{
                "name": "title",
                "type": "string"
            }, {
                "name": "album",
                "type": "string"
            }, {
                "name": "artist",
                "type": "string"
            },{
                "name": "label",
                "type": "string"
            },{
                "name": "url",
                "type": "string"
            },{
                "name": "city",
                "type": "string"
            },{
                "name": "state",
                "type": "string"
            },{
                "name": "description",
                "type": "string"
            }, {
                "name": "user_id",
                "type": "string"
            }, {
                "name": "genre1",
                "type": "string"
            },{
                "name": "genre2",
                "type": "string"
            }])
        ];

    }

    down() {

        return [
            this.dropTable("songs")
        ];

    }

}

module.exports = CreateSongs;
