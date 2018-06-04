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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,body, #app {
  height: 100%;
  width: 100%;
  background-color: #eee;
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
  background-color: #eee;
  /*background-color: #f7f7f5;*/
}
#app {
  display: flex;
}

</style>
