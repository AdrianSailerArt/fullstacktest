const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.ObjectId, auto: true },
  name: { type: String, required: true },
  firstName: { type: String, required: true },
  userName: { type: String, required: true },
  _created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Customer", customerSchema);
