const mongoose = require('mongoose');

// local Robo 3T db = et
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/colony', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
