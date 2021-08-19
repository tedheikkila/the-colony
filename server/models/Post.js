const { Schema } = require('mongoose');
const commentSchema = require('./Comment')

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true,
  },
  date: { 
    type: Date, 
    default: Date.now
  },
  comments: [
    commentSchema
  ]
});

module.exports = postSchema;
