"use strict"

const Pegawai = require('./model')

const fetchAll = async () => {
  try {
    return await Pegawai.find()
  } catch(e) {
    console.log(e)
  }
}
const fetchDetail = async (req) => {
  const { id } = req.params
  try {
    return await Pegawai.findById(id)
  } catch(e) {
    console.log(e)
  }
}

const store = async (req) => {
  const { nama, alamat, telepon } = req.body
  try {
    const pegawai = new Pegawai({
      nama: nama,
      alamat: alamat,
      telepon: telepon
    })
    return pegawai.save()
  } catch(e) {
    console.log(e)
  }
}

const update = async (req) => {
  const { id } = req.params
  try {
    return await Pegawai.updateOne({_id: id}, {$set: req.body})
  } catch(e) {
    console.log(e)
  }
}

const remove = async (req) => {
  const { id } = req.params
  try {
    return await Pegawai.deleteOne({_id: id})
  } catch(e) {
    console.log(e)
  }
}

module.exports = {
  fetchAll,
  fetchDetail,
  store,
  update,
  remove
}