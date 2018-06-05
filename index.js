'use strict'
const app = require('./app');
var mongoose = require('mongoose');

var port = process.env.PORT || 3000;
var uri = "mongodb://localhost:27017/blog";
const options = {

    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
};
mongoose.connect(uri, options).then(
    () => {
        app.listen(port, () => {
            console.log("El servidor con node y express esta funcionando");
        });
    },
    err => {
        console.log(err);
    }
);