"use strict";

const application = require('../package.json');
const associationRoutes = require('./association-routes');
const defaultRoutes = require('./default-routes');
const errorRoutes = require('./error-routes');
const path = require('path');

module.exports = (app) => {
    defaultRoutes(app);
    associationRoutes(app);
    errorRoutes(app);
}