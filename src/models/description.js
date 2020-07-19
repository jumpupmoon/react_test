const mongoose = require("mongoose");

const descriptionSchema = new mongoose.Schema({
  description_id: Number,
  patient_name: String,
  disease_code: Number,
  doctor_name: String,
  expiry_date: { type: Date, default: Date.now },
  pills: [],
});

module.exports = mongoose.model("Description", descriptionSchema);
