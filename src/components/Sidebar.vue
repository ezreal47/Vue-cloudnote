<template>
  <div id="sidebar">
    <avatar></avatar>
    <div class="icons">
      <router-link to="/note" title="笔记">
        <svg class="iconfont icon-note"><use xlink:href="#icon-icon-test1"></use></svg>
      </router-link>
      <router-link to="/notebooks" title="笔记本">
       <svg class="iconfont icon-notebook"><use xlink:href="#icon-notebook"></use></svg>  
      </router-link>
      <router-link to="/trash" title="回收站">
        <svg class="iconfont icon-trash"><use xlink:href="#icon-trashcan"></use></svg>
      </router-link> 
    </div> 
    <div class="logout" title="注销用户">
      <svg class="iconfont icon-logout" @click="onLogout"><use xlink:href="#icon-logout"></use></svg>
    </div>
  </div>
</template>

<script>
import avatar from '@/components/Avatar.vue'
import { mapActions } from 'vuex'
import { Message } from 'element-ui'

export default {
  components: {
    avatar
  },
  methods: {
    ...mapActions([
      'logout'
    ]),

    onLogout() {
      this.logout()
        .then(() => {
          Message.success({message:'注销成功',center:true,duration:2000})
        })
    }
  }
}
</script>


<style lang="scss" scoped>

@import '../assets/scss/sidebar.scss';

</style>
