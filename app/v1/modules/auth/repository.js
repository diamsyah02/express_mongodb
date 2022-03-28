"use strict"

const bcrypt = require('bcrypt')
const User = require('./model')

const register = async (req) => {
  const { username, password } = req.body
  const salt = await bcrypt.genSalt(10)
  const password_hashing = await bcrypt.hash(password, salt)
  try {
    const user = new User({
      username: username,
      password: password_hashing
    })
    return await user.save()
  } catch(e) {
    console.log(e)
  }
}

const checkUsername = async (req) => {
  const { username } = req.body
  try {
    const data = await User.find({username: username})
    return data
  } catch(e) {
    console.log(e)
  }
}

module.exports = {
  register,
  checkUsername
}