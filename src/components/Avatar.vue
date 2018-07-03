<template>
  <span :title="username">
    <svg class="avatar"><use xlink:href="#icon-icon-test"></use></svg>
  </span>
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
  .avatar {
    width: 40px;
    height: 40px;
    margin-top: 15px;
  }

</style>
