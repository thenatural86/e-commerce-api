const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  tax: {
    type: Number,
  },
})
