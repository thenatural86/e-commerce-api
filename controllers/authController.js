const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  const { email, name, password } = req.body
  const emailAlreadyExist = await User.findOne({ email })

  if (emailAlreadyExist) {
    throw new CustomError.BadRequestError('Email already exist!')
  }

  // first registered user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 0
  const role = isFirstAccount ? 'admin' : 'user'

  const user = await User.create({ email, name, password, role })
  const tokenUser = {
    name: user.name,
    userId: user._id,
    role: user.role,
  }
  const token = jwt.sign(tokenUser, 'jwtSecret', {
    expiresIn: '1d',
  })

  res.status(StatusCodes.CREATED).json({ user: tokenUser, token })
}

const login = async (req, res) => {
  res.send('Login Route')
}
const logout = async (req, res) => {
  res.send('Logout Route')
}

module.exports = { register, login, logout }
