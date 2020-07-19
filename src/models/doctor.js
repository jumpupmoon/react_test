const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  hospital_id: Number,
  name: String,
  password: String,
  license: Number,
  major: String,
});

module.exports = mongoose.model("Doctor", doctorSchema);
