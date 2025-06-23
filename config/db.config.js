const mongoose = require('mongoose');

const connection = mongoose.connect("monogodb://localhost:27017/URLshorther",{
    "url": String,
    "validity": Number,
    "shortCode": String
} )

module.exports = connection;