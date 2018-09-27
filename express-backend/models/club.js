var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Club = new Schema({
    id: Number,
    name: String,
    pres: Number, //Account ID
    vice: Number, //Account ID
    chief: Number, //Account ID
    currentPoint: Number,
    currentRank: String,
    prevRank: String,
    staffID: Number,
});

module.exports = mongoose.model('Club', Club);
