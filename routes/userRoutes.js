var express = require('express');

var userController = require('../controllers/userController');


var api = express.Router();

api.get('/controlador', function(req, res) {
    res.status(200).send("Desde el controlador")
});
api.get('/users', userController.listUsers);
api.post('/guardar', userController.createUser);


module.exports = api;