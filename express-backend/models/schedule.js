var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schedule = new Schema({
    id: Number,
    clubID: Number,
    accountID: Number,
    time: Number,
    type: String,
    eventStartTime: String,
    eventEndTime: String,
    desc: String,
    proposalStatus: String,
    submitDate: String,
    reportStatus: String,
    reportDate: String,
});
module.exports = mongoose.model('Schedule', schedule);
