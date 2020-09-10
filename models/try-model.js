const mongoose = require('mongoose');

var  tryDataSchema = mongoose.Schema({
    data: Number
});

module.exports = mongoose.model('try', tryDataSchema);