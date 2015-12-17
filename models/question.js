'use strict';

var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
});

module.exports = mongoose.model('Question', QuestionSchema);