const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

const register = async (req, res) => {
  console.log(req.body)
  const user = await User.create(req.body)
  res.json(user)
}

const login = async (req, res) => {
  res.send('Login Route')
}
const logout = async (req, res) => {
  res.send('Logout Route')
}

module.exports = { register, login, logout }
