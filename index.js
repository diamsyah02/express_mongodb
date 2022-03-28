"use strict"

require('module-alias/register')
require('./pathAlias')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const { connect } = require('@configs/connectionDB')
const routes = require('./routes')
require('dotenv').config()

connect()
app.use(cors())
app.listen(process.env.PORT)
console.log('RESTful API server started on: ' + process.env.PORT)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
routes(app)