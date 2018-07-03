import Trash from '@/api/trash'
import {Message} from 'element-ui'

const state = {
  trashNotes: null,
  currentTrashNoteId: null
}

const getters = {
  trashNotes: state => state.trashNotes || [],
  
  currentTrashNote: (state,getters) => {
    if(!state.currentTrashNoteId) return getters.trashNotes[0] || {}
    return state.trashNotes.find(note => note.id == state.currentTrashNoteId) || {}
  }
}

const mutations = {
  setTrashNotes(state, payload) {
    state.trashNotes = payload.trashNotes
  },

  deleteTrashNote(state, payload) {
    state.trashNotes = state.trashNotes.filter( note => note.id != payload.noteId)
  },

  setCurrentTrashNote(state, payload = {}) {
    state.currentTrashNoteId = payload.currentTrashNoteId
  },

  addTrashNote(state, payload) {
    state.trashNotes.unshift(payload.note)
  }
}

const actions = {
  getTrashNotes({commit}) {
    return Trash.getNotes()
      .then(res => {
        commit('setTrashNotes',{trashNotes: res.data})
      })
  },

  deleteTrashNote({commit}, {noteId}) {
    return Trash.deleteNote({noteId})
      .then (res => {
        commit('deleteTrashNote', {noteId})
        Message.info({message:res.msg,center:true,duration:2000})
      })
  },

  revertTrashNote({commit}, {noteId}) {
    return Trash.revertNote({noteId})
      .then(res => {
        commit('deleteTrashNote',{noteId})
        Message.info({message:'已恢复笔记',center:true,duration:2000})
      })
  }
}


export default{
  state,
  getters,
  mutations,
  actions
}