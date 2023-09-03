const mongoose = require('mongoose');
const collection2Schema = new mongoose.Schema({
  Timestamp: Date,
  "Email address": String,
  "passedout year": Number,
  branch: String,
  "present status": String,
  "present location": String,
  salary: String,
  "personal mail(if students want to contact you)": String,
  "company name or job title (optional)": String,
  "anything that you want to share with others": String,
});

const Collection2 = mongoose.model('Collection2', collection2Schema);

module.exports = Collection2;
