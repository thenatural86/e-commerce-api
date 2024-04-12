// const User = require('../models/User')
const isTokenValid = require('../utils')
const CustomError = require('../errors')

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token
  if (!token) {
    console.log('No token present')
  }
  console.log('token present')
  next()
}

module.exports = { authenticateUser }
