const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.ObjectId, auto: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  _created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);
