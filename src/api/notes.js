import request from '@/helpers/request'
import Time from '@/helpers/util'

const URL = {
  GET: '/notes/from/:notebookId',
  ADD: '/notes/to/:notebookId',
  UPDATE: '/notes/:noteId',
  DELETE: '/notes/:noteId'
}

export default {
  getNotebook({ notebookId }) {
    return new Promise((resolve, reject) => {
      request(URL.GET.replace(':notebookId', notebookId))
        .then(res => {
          res.data.forEach(currentbook => {
            currentbook.newCreatedAt = Time.transformTime(currentbook.updatedAt)
            currentbook.localDate = Time.ADtime(currentbook.createdAt)
          })
          resolve(res)
        }).catch(err => {
          reject(err)
        })
    })
  },
  updateNote({ noteId }, { title, content }) {
    return request(URL.UPDATE.replace(':noteId', noteId), 'PATCH', { title, content })
  },
  deleteNote({ noteId }) {
    return request(URL.DELETE.replace(':noteId', noteId), 'DELETE')
  },
  addNote({ notebookId }, { title = '', content = '' } = { title: '', content: '' }) {
    return request(URL.ADD.replace(':notebookId', notebookId), 'POST', { title, content })
  }
}