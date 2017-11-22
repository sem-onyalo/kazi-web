"use strict";

module.exports = function(app) {
    app.route('/')
        .get((req, res) => {
            res.sendFile('main.htm', { root: './www' });
        });
        
    app.route('/favicon.ico')
        .get((req, res) => {
            res.sendFile('favicon.ico', { root: './www' });
        });

    app.route('/assets/:file.:ext')
        .get((req, res) => {
            res.sendFile('assets/' + req.params.file + '.' + req.params.ext, { root: './www' });
        });

    app.route('/assets/vendor/:vendorname/:file.css')
        .get((req, res) => {
            res.sendFile('assets/vendor/' + req.params.vendorname + '/css/' + req.params.file + '.css', { root: './www' });
        });
        
    app.route('/assets/vendor/:vendorname/:file.js')
        .get((req, res) => {
            res.sendFile('assets/vendor/' + req.params.vendorname + '/js/' + req.params.file + '.js', { root: './www' });
        });
}
  