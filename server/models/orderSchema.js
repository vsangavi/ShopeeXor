const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { Objectid } = mongoose.Schema;
const cartSchema = new Schema({
  product: {
    type: Objectid,
    ref: "Product",
  },
  count: Number,
  price: Number,
  name: String,
});
const Cart = mongoose.model("Cart", cartSchema);
const orderSchema = new Schema(
  {
    product: [CartSchema],
    transaction_id: {},
    amount: { type: Number },
    user: {
      type: Objectid,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = { Order, Cart };
