import request from '@/helpers/request'

const URL = {
  SIGNUP: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  GET_INFO: '/auth'
}

export default {
  signup({username,password}) {
    return request(URL.SIGNUP,'POST',{username,password})
  },
  login({username,password}) {
    return request(URL.LOGIN,'POST',{username,password})
  },
  logout() {
    return request(URL.LOGOUT)
  },
  getInfo() {
    return request(URL.GET_INFO)
  }
}