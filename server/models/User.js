const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const Post = require('./Post');


// const postSchema = require('./Post');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },

    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    city: {
      type: String
    },
    posts: [{
      type: Schema.Types.ObjectId,
      ref: "Post"
    }]
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for log in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get `postCount` (# of their saved posts)
// userSchema.virtual('postCount').get(function () {
//   return this.savedPosts.length;
// });
const User = model('User', userSchema);

module.exports = User;
