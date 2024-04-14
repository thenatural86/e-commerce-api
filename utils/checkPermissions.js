const CustomError = require('../errors')
const checkPermissions = (requestUser, resourceUserId) => {
  console.log(requestUser)
  console.log(resourceUserId)
  console.log(typeof esourceUserId)
}

module.exports = checkPermissions
