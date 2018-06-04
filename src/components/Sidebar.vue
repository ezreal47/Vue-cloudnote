<template>
  <div id="sidebar">
    <avatar></avatar>
    <div class="icons">
      <router-link to="/note/1" title="笔记">
        <svg class="iconfont icon-note"><use xlink:href="#icon-icon-test1"></use></svg>
      </router-link>
      <router-link to="/notebooks" title="笔记本">
       <svg class="iconfont icon-notebook"><use xlink:href="#icon-notebook"></use></svg>  
      </router-link>
      <router-link to="/trash/2" title="回收站">
        <svg class="iconfont icon-trash"><use xlink:href="#icon-trashcan"></use></svg>
      </router-link> 
    </div> 
    <div class="logout" title="注销用户">
      <svg class="iconfont icon-logout" @click="logout"><use xlink:href="#icon-logout"></use></svg>
    </div>
  </div>
</template>

<script>
import avatar from '@/components/Avatar.vue'
import Auth from '@/api/auth'

export default {
  components: {
    avatar
  },
  methods: {
    logout() {
      Auth.logout()
        .then(data => {
          console.log(data)
          this.$router.push({path: 'login'})
        })
    } 
  }
}
</script>


<style lang="scss" scoped>


#sidebar {
  position: relative;
  width: 56px;
  text-align: center;
  background-color: #2c333c;
  .iconfont {
      margin: 8px 0;
      height: 25px;
      width: 25px;
  }
  .icons {
    margin-top: 20px;
    .icon-notebook {
      height: 22px;
      width: 22px;
    }
    .icon-trash {
      fill: #fff;
    }
    a {
      display: block;
    }
    .router-link-active {
      background-color: #5e6266;
    }
  }
  .logout {
      position: absolute;
      bottom: 20px;
      text-align: center;
      width: 100%;
      fill: #fff;
      cursor: pointer;
  }
}




</style>
