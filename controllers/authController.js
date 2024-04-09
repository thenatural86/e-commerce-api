const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

const register = async (req, res) => {
  console.log(req.body)
  const { email } = req.body
  const emailAlreadyExist = await User.findOne({ email })

  if (emailAlreadyExist) {
    throw new CustomError.BadRequestError('Email already exist!')
  }
  const user = await User.create(req.body)
  res.status(StatusCodes.CREATED).json({ user })
}

const login = async (req, res) => {
  res.send('Login Route')
}
const logout = async (req, res) => {
  res.send('Logout Route')
}

module.exports = { register, login, logout }
