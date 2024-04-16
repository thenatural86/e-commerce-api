const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

const createProduct = async (req, res) => {
  req.body.user = req.user.userId

  const product = await Product.create(req.body)
  res.send({ product })
}
const getAllProducts = async (req, res) => {
  const products = await Product.find({})
  console.log(products)
  res.status(StatusCodes.OK).json({ products })
}

const getSingleProduct = async (req, res) => {
  res.send('get single product route')
}

const updateProduct = async (req, res) => {
  res.send('update product route')
}

const deleteProduct = async (req, res) => {
  res.send('delete product route')
}

const uploadImage = async (req, res) => {
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
