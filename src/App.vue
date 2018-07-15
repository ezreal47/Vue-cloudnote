<template>
  <div id="app">
    <sidebar></sidebar>
    <router-view></router-view>     
  </div>
</template>



<script>
import sidebar from "@/components/Sidebar"
export default {
  name: 'App',
  components: {
    sidebar
  }
}
</script>

<style>
 .el-message {min-width: 240px;}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,body, #app {
  height: 100%;
  width: 100%;
}

a {
  text-decoration: none;
}
ul, li {
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
  -moz-osx-font-smoothing: grayscale;  
  /*background-color: #f4f4f4;*/
  background-color: #f2f6fc;
}
#app {
  display: flex;
}

</style>
