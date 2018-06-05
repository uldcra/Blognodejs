'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
var rutas_user = require('./routes/userRoutes.js');

app.get('/', function(req, res) {

    res.status(200).send("Hola desde node");
});
app.get('/usuarios', function(req, res) {

    res.status(200).send("Hola desde node usuarios");
});

app.use('/create', rutas_user);



module.exports = app;