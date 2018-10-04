const mongoose = require('mongoose');

const clubSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    clubId: { type: String, require: true, unique: true },
    clubName: { type: String, require: true, unique: true },
    president: { type: String, require: true },
    vice: { type: String, require: true },
    finance: { type: String, require: true },
    currPoint: { type: Number, require: true },
    currRank: { type: String, require: true },
    prevRank: { type: String, require: true },
    staffId: { type: String, require: true },
});

module.exports = mongoose.model('Club', clubSchema);