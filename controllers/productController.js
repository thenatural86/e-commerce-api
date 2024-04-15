const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

const createProduct = (req, res) => {
  res.send('create product route')
}
const getAllProducts = (req, res) => {
  res.send('get all products route')
}

const getSingleProduct = (req, res) => {
  res.send('get single product route')
}

const updateProduct = (req, res) => {
  res.send('update product route')
}

const deleteProduct = (req, res) => {
  res.send('delete product route')
}

const uploadImage = (req, res) => {
  res.send('upload image route')
}

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
}
