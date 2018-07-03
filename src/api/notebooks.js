import request from '@/helpers/request'
import Time from '@/helpers/util'

const URL = {
  GET: '/notebooks',
  ADD: '/notebooks',
  UPDATE: '/notebooks/:id',
  DELETE: '/notebooks/:id'
}

export default {
  getLIST() {
    return new Promise((resolve, reject) => {
      request(URL.GET)
        .then(res => {
          res.data = res.data.sort((book1, book2) => { book1.createdAt < book2.createdAt })
          res.data.forEach(currentbook => {
            currentbook.newCreatedAt = Time.transformTime(currentbook.createdAt)
          })
          resolve(res)
        }).catch(err => {
          reject(err)
        })
    })
  },
  updateNotebook(notebookId, { title = "" } = { title: "" }) {
    return request(URL.UPDATE.replace(':id', notebookId), 'PATCH', { title })
  },
  deleteNotebook(notebookId) {
    return request(URL.DELETE.replace(':id', notebookId), 'DELETE')
  },
  addNotebook({ title = '' } = { title: '' }) {
    return new Promise((resolve, reject) => {
      request(URL.ADD, 'POST', { title })
        .then(res => {
          res.data.newCreatedAt = Time.transformTime(res.data.createdAt)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
    })
  }
}