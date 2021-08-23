const mongoose = require('mongoose');

// local Robo 3T db = colony
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/colony', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
