'use strict';

var mongoose = require('mongoose');

var ResponseSchema = mongoose.Schema({
	text : String
	imgurl: String
});

module.exports = mongoose.model('Response', ResponseSchema);