var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../models/users.js');

var appSchema = new Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  modules: [{type: String}]
});

module.exports = mongoose.model('App', appSchema);
