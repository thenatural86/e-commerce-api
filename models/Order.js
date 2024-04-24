const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema(
  {
    tax: {
      type: Number,
    },
    shippingFee: {
      type: Number,
    },
    subtotal: {
      type: Number,
    },
    orderItems: [],
    status: { type: String },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    clientSecret: { type: String },
    paymentId: { type: String },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Order', OrderSchema)
