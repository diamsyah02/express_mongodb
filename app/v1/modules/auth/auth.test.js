"use strict"

const mongoose = require("mongoose")
const { register, login } = require('./controller')
const { connect } = require('@configs/connectionDB')

describe('Test Auth Controller', function () {
  beforeAll(() => {
    connect()
  })
  test('Function Register', async () => {
    const req = {
      body: {
        username: 'Test',
        password: 'Test'
      }
    }
    const res = {fieldResponse: {},
      send: function(res) {
        this.fieldResponse = res
        function status(status) {
          return status
        }
        return {
          status
        }
      },
    }
    await register(req, res)
    expect([200, 400]).toContain(res.fieldResponse.statusCode)
  })
  test('Function Login', async () => {
    const req = {
      body: {
        username: 'Test',
        password: 'Test'
      }
    }
    const res = {fieldResponse: {},
      send: function(res) {
        this.fieldResponse = res
        function status(status) {
          return status
        }
        return {
          status
        }
      },
    }
    await login(req, res)
    expect([200, 400]).toContain(res.fieldResponse.statusCode)
  })
  afterAll(() => {
    mongoose.connection.close()
  })
})