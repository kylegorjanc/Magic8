'use strict';

var mongoose = require('mongoose');

var ResponseSchema = new mongoose.Schema({
	text : String,
	filename: String,
	type: String
});

module.exports = mongoose.model('Response', ResponseSchema);