"use strict"

const mongoose = require("mongoose")
const { fetchAll, fetchDetail, store, update, remove } = require('./controller')
const { connect } = require('@configs/connectionDB')

describe('Test Pegawai Controller', function () {
  beforeAll(() => {
    connect()
  })
  test('Function FetchAll', async () => {
    const req = {}
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
    await fetchAll(req, res)
    expect([200, 400, 401]).toContain(res.fieldResponse.statusCode)
  })
  test('Function FetchDetail', async () => {
    const req = {
      params: {
        id: '624166196150eaf93e0ed419'
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
    await fetchDetail(req, res)
    expect([200, 400, 401]).toContain(res.fieldResponse.statusCode)
  })
  test('Function Store', async () => {
    const req = {
      body: {
        nama: 'Test',
        alamat: 'Test',
        telepon: '08999999999'
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
    await store(req, res)
    expect([200, 201, 400, 401]).toContain(res.fieldResponse.statusCode)
  })
  test('Function Update', async () => {
    const req = {
      body: {
        nama: 'Test',
        alamat: 'Test',
        telepon: '08999999999'
      },
      params: {
        id: '624166196150eaf93e0ed419'
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
    await update(req, res)
    expect([200, 400, 401, 404]).toContain(res.fieldResponse.statusCode)
  })
  test('Function Remove', async () => {
    const req = {
      params: {
        id: '624166196150eaf93e0ed419'
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
    await remove(req, res)
    expect([200, 400, 401, 404]).toContain(res.fieldResponse.statusCode)
  })
  afterAll(() => {
    mongoose.connection.close()
  })
})