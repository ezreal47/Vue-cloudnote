<template>
  <div id="sidebar">
    <avatar></avatar>
    <div class="icons">
      <router-link to="/note" title="笔记">
        <div class="wrap">
          <svg class="iconfont icon-note"><use xlink:href="#icon-icon-test1"></use></svg>
          <span class="tip">笔记详情</span>
        </div>
      </router-link>
      <router-link to="/notebooks" title="笔记本">
        <div class="wrap">
          <svg class="iconfont icon-notebook"><use xlink:href="#icon-notebook"></use></svg>
          <span class="tip">笔记本列表</span>  
        </div>
      </router-link>
      <router-link to="/trash" title="回收站">
        <div class="wrap">
          <svg class="iconfont icon-trash"><use xlink:href="#icon-trashcan"></use></svg>
          <span class="tip">回收站</span>  
        </div>
      </router-link> 
    </div> 
    <div class="logout" title="注销用户">
      <div class="wrap" @click="onLogout">
        <svg class="iconfont icon-logout"><use xlink:href="#icon-logout"></use></svg>
        <span class="tip">注销</span>
      </div>
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
