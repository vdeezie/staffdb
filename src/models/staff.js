const mongoose = require ('mongoose');
//Create Schema
const staffSchema = new mongoose.Schema ({
    name: String,
    position: String,
    email: String,
    country: String
});
const Staff = mongoose.model('Staff', staffSchema)
module.exports = Staff;