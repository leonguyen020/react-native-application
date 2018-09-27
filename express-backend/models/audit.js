var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var audit = new Schema({
    id: Number,
    clubID: Number,
    accountID: Number,
    prevLogin: String,
    prevLogout: String,
    prevAction: String,
});
module.exports = mongoose.model('Audit', audit);
