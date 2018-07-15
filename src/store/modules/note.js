import Note from '@/api/notes'
import {Message} from 'element-ui'

const state = {
  notes: null,
  currentnoteId: null
}

const getters = {
  notes: state => state.notes,

  currentNote: state => {
    if(!Array.isArray(state.notes)) return {}
    if(!state.currentnoteId) return state.notes[0] || {}
    return state.notes.find(note => note.id == state.currentnoteId) || {}
  }
}

const mutations = {
  setNotes(state,payload) {
    state.notes = payload.notes.reverse()
  },

  addNote(state,payload) {
    state.notes.unshift(payload.note)
  },

  updateNote(state,payload) {
    let note = state.notes.find(note => note.id == payload.noteId) 
    note.title = payload.title
    note.content = payload.content
  },

  deleteNote(state,payload) {
    state.notes = state.notes.filter(note => {return note.id !== payload.noteId})
  },
  setCurrentnote(state,payload = {}) {
    state.currentnoteId = payload.currentnoteId
  }
}

const actions = {
  getNotes({ commit }, { notebookId }) {
  return  Note.getNotebook({ notebookId })
      .then(res => {
        commit('setNotes',{notes: res.data})
      })
  },

  addNote({ commit }, {notebookId, title, content}) {
  return  Note.addNote({ notebookId },{title, content})
      .then( res=> {
        commit('addNote',{ note: res.data})
        Message.info({message:res.msg,center:true,duration:2000})
      })
  },

  updateNote({ commit }, {noteId, title, content}) {
  return  Note.updateNote({noteId}, {title, content})
      .then(res => {
        commit('updateNote', {noteId, title, content})
      })
  },

  deleteNote({ commit }, {noteId}) {
  return  Note.deleteNote({noteId})
      .then(res => {
        commit('deleteNote',{noteId})
        Message.info({message:res.msg,center:true,duration:2000})
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}