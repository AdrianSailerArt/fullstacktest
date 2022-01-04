const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.ObjectId, auto: true },
  _created: { type: Date, default: Date.now },
  product: { type: mongoose.Schema.ObjectId, ref: "Product", required: true },
  // customer: { type: mongoose.Schema.ObjectId, ref: "Customer", required: true },
  quantity: { type: Number, default: 1 },
});

module.exports = mongoose.model("Order", orderSchema);
