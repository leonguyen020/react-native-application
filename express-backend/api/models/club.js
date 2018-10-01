const mongoose = require('mongoose');

const clubSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    c_id: Number,
    c_name: String,
    president: String,
    vice: String,
    financeChief: String,
    curr_point: Number,
    curr_rank: String,
    prev_rank: String,
    staffId: String,
});

module.exports = mongoose.model('Club', clubSchema);