"use strict"

const response = require('@helpers/WebResponse')
const repo = require('./repository')

const fetchAll = async () => {
  const data = await repo.fetchAll()
  return response(200, 'Get data pegawai successfully!', data)
}
const fetchDetail = async (req) => {
  const data = await repo.fetchDetail(req)
  return response(200, `Get data pegawai with id = ${req.params.id} successfully!`, data)
}

const store = async (req) => {
  const data = await repo.store(req)
  return response(201, 'Insert data pegawai successfully!', data)
}

const update = async (req) => {
  const check = await repo.fetchDetail(req)
  if(typeof check == 'object') {
    const data = await repo.update(req)
    return response(200, 'Update data pegawai successfully!', data)
  }
  return response(404, 'Data not found!', [])
}

const remove = async (req) => {
  const check = await repo.fetchDetail(req)
  if(typeof check == 'object') {
    const data = await repo.remove(req)
    return response(200, 'Delete data pegawai successfully!', data)
  }
  return response(404, 'Data not found!', [])
}

module.exports = {
  fetchAll,
  fetchDetail,
  store,
  update,
  remove
}