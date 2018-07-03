import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Login from '@/components/Login'
// import NotebookList from '@/components/NotebookList'
// import Note from '@/components/NoteDetail'
// import Trash from '@/components/TrashDetail'

Vue.use(Router)

const notebookList = () => import('@/components/NotebookList.vue');
const login = () => import('@/components/Login.vue')
const note = () => import('@/components/NoteDetail.vue')
const trash = () => import('@/components/TrashDetail.vue')

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/notebooks',
      component: notebookList
    },
    {
      path: '/login',
      component: login
    },
     {
      path: '/note',
      component: note
    },
     {
      path: '/trash',
      component: trash
    }
  ]
})
