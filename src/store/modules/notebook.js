import Notebook from '@/api/notebooks'
import {Message} from 'element-ui'

const state = {
  notebooks: null,
  currentbookId: null
}

const getters = {
  notebooks: state => state.notebooks || [],
  currentbook: state => {
    if(!Array.isArray(state.notebooks)) return {}
    if(!state.currentbookId) return state.notebooks[0] || {}
    return state.notebooks.find(notebook => notebook.id == state.currentbookId) 
  }
}

const mutations = {
  setNotebooks(state,payload) {
    state.notebooks = payload.notebooks.reverse()
  },

  addNotebook(state,payload) {
    state.notebooks.unshift(payload.notebook)
  },

  updateNotebook(state,payload) {
    let notebook = state.notebooks.find(noteboo => noteboo.id == payload.notebookId) 
    notebook.title = payload.title
  },

  deleteNotebook(state,payload) {
    state.notebooks = state.notebooks.filter(notebook => {return notebook.id !== payload.notebookId})
  },
  
  setCurrentbook(state,payload) {
    state.currentbookId = payload.currentbookId
  }
}

const actions = {
  getNotebooks({ commit }) {
    return  Notebook.getLIST()
      .then(res => {
        commit('setNotebooks',{notebooks: res.data})
      })
  },

  addNotebook({ commit }, payload) {
    return Notebook.addNotebook({ title: payload.title})
      .then( res=> {
        commit('addNotebook',{ notebook: res.data})
        Message.info({message:res.msg,center:true,duration:2000})
      })
  },

  updateNotebook({ commit }, payload) {
    return Notebook.updateNotebook(payload.notebookId, {title: payload.title})
      .then(res => {
        commit('updateNotebook', {notebookId: payload.notebookId, title: payload.title})
        // Message.success(res.msg)
      })
  },

  deleteNotebook({ commit }, payload) {
    return Notebook.deleteNotebook(payload.notebookId)
      .then(res => {
        commit('deleteNotebook',{ notebookId: payload.notebookId })
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