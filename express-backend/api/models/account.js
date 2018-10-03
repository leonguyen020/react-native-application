const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, require: true },
    isStaff: { type: Boolean, require: true },
    staffID: { type: String, require: true },
    studentID: { type: String, require: true },
    clubID: { type: String, require: true },
    clubRole: { type: String, require: true },
    joinDate: { type: String, require: true },
});

module.exports = mongoose.model('Account', accountSchema);