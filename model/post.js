var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = Schema({
    title: String,
    content: String,
    user: { type: Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Post', PostSchema);