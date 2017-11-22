"use strict";

module.exports = (app) => {
    app.use((req, res) => {
        res.status(400).send({ error: req.originalUrl + ' not found' });
    });
}