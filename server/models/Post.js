const { Schema, model } = require('mongoose');
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
  city: {
    type: String,
  },
  name: {
    type: String,
  },
  date: { 
    type: Date, 
    default: Date.now
  },
  comments: [
    commentSchema
  ]
});


const Post = model('Post', postSchema);

module.exports = Post;
