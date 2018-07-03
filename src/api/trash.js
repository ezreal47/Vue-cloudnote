import request from '@/helpers/request'
import Time from '@/helpers/util'

const URL = {
  GET: './notes/trash',
  REVERT: './notes/:noteId/revert',
  DELETE: '/notes/:noteId/confirm'
}

export default {
  getNotes() {
    return new Promise((resolve, reject) => {
      request(URL.GET)
        .then(res => {
          res.data = res.data.sort((note1, note2) => note1.createdAt < note2.createdAt)
          res.data.forEach(currentbook => {
            currentbook.newCreatedAt = Time.transformTime(currentbook.createdAt)
            currentbook.localDate = Time.ADtime(currentbook.createdAt)
          })
          resolve(res)
        }).catch(err => {
          reject(err)
        })
    })
  },

  revertNote({ noteId }) {
    return request(URL.REVERT.replace(':noteId', noteId), 'PATCH')
  },

  deleteNote({ noteId }) {
    return request(URL.DELETE.replace(':noteId', noteId), 'DELETE')
  }
}