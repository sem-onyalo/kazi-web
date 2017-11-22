"use strict";

module.exports = function (app) {
    app.route('/:key')
        .get((req, res) => {
            res.sendFile('main.htm', { root: './www' });
        });
}