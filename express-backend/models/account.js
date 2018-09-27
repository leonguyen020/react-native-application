var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
    id: Number,
    name: String,
    isStaff: Boolean,
    staffID: Number,
    studentID: Number,
    clubID: Number,
    clubRole: String,
    joinDate: String,
});
module.exports = mongoose.model('Product', ProductSchema);
// module.exports = mongoose.model('Product', ProductSchema,'optiponally pass schema name ');
