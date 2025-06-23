const mongoose = require('mongoose');

const shortUrlSchema = new mongoose.Schema({
  url: String,
  validity: { type: Number, unique: true },
  shortCode: { type: String }
});

module.exports = mongoose.model("ShortUrl", shortUrlSchema);