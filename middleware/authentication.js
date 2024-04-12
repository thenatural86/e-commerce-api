const { isTokenValid } = require('../utils')
const CustomError = require('../errors')

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token
  if (!token) {
    throw new CustomError.UnauthenticatedError('Authentication invalid')
  }
  try {
    const { name, userId, role } = isTokenValid({ token })
    req.user = { name, userId, role }
    // console.log('PAYLOAD', payload)
    next()
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication invalid')
  }
}

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.UnauthorizedError(
        'Unauthorized to access this route'
      )
    }
    next()
  }
}

module.exports = { authenticateUser, authorizePermissions }
