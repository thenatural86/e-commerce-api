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
  res.status(StatusCodes.OK).json({ products })
}

const getSingleProduct = async (req, res) => {
  const { id: productId } = req.params

  const product = await Product.findOne({ _id: productId }).populate('name')

  if (!product) {
    throw new CustomError.NotFoundError(`No product with id : ${productId}`)
  }

  res.status(StatusCodes.OK).json(product)
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
