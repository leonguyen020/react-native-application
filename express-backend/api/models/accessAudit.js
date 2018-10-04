const mongoose = require('mongoose');

const accessAudit = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    clubId: { type: String, require: true },
    accountId: { type: String, require: true },
    prevLogin: { type: String, require: true },
    prevLogout: { type: String, require: true },
    prevAction: { type: String, require: true },
});

module.exports = mongoose.model('AccessAudit', accessAudit);