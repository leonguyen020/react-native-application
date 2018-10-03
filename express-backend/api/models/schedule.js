const mongoose = require('mongoose');

const scheduleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    clubId: { type: Number, require: true },
    accountId: { type: Number, require: true },
    time: { type: String, require: true},
    eventStart: { type: String, require: true },
    eventEnd: { type: String, require: true },
    description: { type: String, require: true },
    proposalStatus: { type: String, require: true },
    submitDate: { type: String, require: true },
    reportStatus: { type: String, require: true },
    reportDate: { type: String, require: true }
});

module.exports = mongoose.model('Schedule', scheduleSchema);