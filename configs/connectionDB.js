"use strict"

require('dotenv').config()
const mongoose = require("mongoose")

const connect = () => {
  mongoose.connect(
    process.env.URL_DB,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  const db = mongoose.connection
  db.on('error', (error)=> console.error(error))
  db.once('open', () => console.log('Database Connected'))
}

module.exports = {
  connect
}
























