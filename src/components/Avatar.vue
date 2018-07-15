<template>
  <div :title="username" class="symbol">
    <svg class="avatar"><use xlink:href="#icon-icon-test"></use></svg>
    <div class="title">CloudNote</div>
  </div>
</template>

<script>
import {mapGetters ,mapActions,mapMutations } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'username'
    ])
  },
  methods: {
    ...mapMutations([
      'setUser'
    ]),
    ...mapActions([
      'checkLogin'
    ])
  },
  created() {
    this.checkLogin() 
  }
}
</script>

<style scoped>
  .symbol {
    margin-top: 20px;
  }
  .avatar {
    width: 46px;
    height: 46px;
  }

  .title {
    color: #fff;
    letter-spacing: 1px;
    font-weight: bolder;
  }
</style>
