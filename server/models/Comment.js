const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: String,
});

module.exports = commentSchema;