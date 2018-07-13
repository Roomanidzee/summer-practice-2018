const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const usersRoutes = require('../routes/users');
const artistsRoutes = require('../routes/artists');
const utils = require('../utils/validation');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/users', usersRoutes);
app.use('/artists', utils.validateUser, artistsRoutes);

app.use(function (req, resp, next) {

    let err = new Error('Requested page not found');
    err.status = 404;
    next();

});

app.use(function(err, req, resp, next){

    console.log(err);

    resp.status(err.status).json({message: err.message});

});

app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
});

module.exports = app;