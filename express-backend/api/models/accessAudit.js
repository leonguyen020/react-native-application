const mongoose = require('mongoose');

const accessAudit = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    clubId: { type: Number, require: true },
    accountId: { type: Number, require: true },
    prevLogin: { type: String, require: true },
    prevLogout: { type: String, require: true },
    prevAction: { type: String, require: true },
});

module.exports = mongoose.model('AccessAudit', accessAudit);