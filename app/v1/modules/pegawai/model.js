"use strict"

const mongoose = require("mongoose")

const Pegawai = mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  alamat: {
    type: String,
    required: true
  },
  telepon: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('pegawais', Pegawai)