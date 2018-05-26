<template>
  <div id="app">
    <TitleBar/>
    <Dashboard/>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'
import TitleBar from './components/TitleBar.vue'

export default {
  name: 'app',
  components: {
    Dashboard,
    TitleBar
  }
}
</script>

<style lang="less">

@import "~font-awesome/less/font-awesome";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

#body {
  margin: 0;
}
</style>
