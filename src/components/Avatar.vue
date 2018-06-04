<template>
  <span :title="username">
    <svg class="avatar"><use xlink:href="#icon-icon-test"></use></svg>
  </span>
</template>

<script>
import Auth from '@/api/auth'
import Bus from '@/helpers/bus'

export default {
  data() {
    return {
      username: ''
    }
  },
  created() {
    Bus.$on('userInfo',user => {
      this.username = user.username
    }) 
    Auth.getInfo()
      .then(res => {
        if(res.isLogin){
          this.username = res.data.username
        }
      })
  }
}
</script>

<style scoped>
  .avatar {
    width: 40px;
    height: 40px;
    margin-top: 15px;
  }

</style>
