'use strict'

var bcrypt = require('bcrypt');
var jwt = require('../services/jwt');
var UserModel = require('../model/user');

function createUser(req, resp, next) {
    var params = req.body;
    var user = new UserModel();
    user.name = params.name;
    console.log(params);
    const saltRounds = 10;
    user.role = 'Role_User';
    user.surname = params.surname;

    bcrypt.hash(params.password, saltRounds, function(err, hash) {
        if (err) {
            console.log("erroooor");
        }
        if (hash) {
            user.password = hash;

            console.log(user);
            user.save((err, userCreate) => {
                if (err) {
                    console.log(err);
                }
                if (userCreate) {
                    console.log(userCreate);
                }
            })
        }

    });
    /*bcrypt.hash(params.password, null, null, function(err, hash) {
        if (err) {
            console.error(err);
            resp.status(400).send({ message: "Error" });
        }
        if (hash) {
            user.password = hash;
            resp.status(200).send(hash);
        }

    });*/

    user.password = myPassword;

    resp.status(200).send({ message: user });
    /* user.save((err, userCreate) => {
         if (err) {
             console.log(err);
         }
         if (userCreate) {
             console.log(userCreate);
         }
     });*/
    //UserModel.find({ name: '/john/i' }, null, { skip: 10 });

}

function login() {

}

function listUsers(req, res) {
    UserModel.find({}, function(err, users) {
        if (err) {
            console.log("error al listar usuarios");
        }
        if (users) {
            console.log(users);
            res.status(200).json({ users: users });
        }
    })

    .limit(10);
}

module.exports = {
    createUser,
    listUsers
}