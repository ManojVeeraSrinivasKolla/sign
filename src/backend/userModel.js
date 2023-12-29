//userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  blood: String,
  mobileNumber: Number,
  dateOfBirth: Number,
  details: String,
});

module.exports = mongoose.model('User', userSchema);
