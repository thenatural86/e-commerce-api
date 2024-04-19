const mongoose = require('mongoose')
const User = require('./User')
const Product = require('./Product')

const ReviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
    },
    title: {
      type: String,
    },
    comment: {
      type: String,
    },
    user: {
      type: User,
    },
    product: {
      type: Product,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Review', ReviewSchema)
