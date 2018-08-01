var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// Location Schema
var LocationSchema = mongoose.Schema({
    useremail: {
        type: String,
        index: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
},{ collection: "locations" });


var Location = module.exports = mongoose.model('Location', LocationSchema);
module.exports.addLocation = function (location, callback) {
    location.save(callback);
}