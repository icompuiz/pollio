'use strict';

var mongoose = require('mongoose-bird')();
var Schema = mongoose.Schema;

var AuthenticationSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Authentication', AuthenticationSchema);
