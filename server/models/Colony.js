const { Schema } = require('mongoose');
// const userSchema = require('./User');


const colonySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  // members: [
  //   userSchema
  // ]
});

module.exports = colonySchema;
