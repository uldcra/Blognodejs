'use strict'


const jwT = require('jsonwebtoken');
const clave = "Mi clave secreta par el blog";

var moment = require('moment');
var userModel = require('../model/user');

function createToken(user) {


    var payload = {
        name: user.name,
        email: user.email,
        role: user.role,
        iat: moment().unix(),
        exp: moment().add(1, 'h').unix()
    }
    return jwT.sign(payload, clave);
}