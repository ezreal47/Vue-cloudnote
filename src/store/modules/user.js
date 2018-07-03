import Auth from '@/api/auth'
import router from '@/router'

const state = {
  user: null
}

const getters = {
  username: state => state.user == null ? '未登录' : state.user.username 
}

const mutations = {
  setUser(state,payload) {
    state.user = payload.user
  }
}

const actions = {
  login({commit},{username,password}) {
    return Auth.login({username,password})
      .then(res => {
        commit('setUser',{user: res.data})
      }) 
  },

  signup({commit},{username,password}) {
    return Auth.signup({username,password})
      .then(res => {
        commit('setUser',{user: res.data})
      }) 
  },

  checkLogin({commit,state},payload = {}) {
    if(state.user !== null) return Promise.resolve()
    return Auth.getInfo()
      .then(res => {
        if (!res.isLogin) {
          router.push(payload)
        } else {
          commit('setUser',{user: res.data})
        }
      })
  },

  logout({commit}) {
    return Auth.logout()
      .then(res => {
        commit('setUser',{user: null})
        router.push({ path: '/login'})
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}