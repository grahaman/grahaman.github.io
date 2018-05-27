<template>
    <div id="app">
        <TitleBar/>
        <!-- <NavBar/> -->
        <div id="router-view">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Dashboard from './views/Dashboard.vue'
import TitleBar from './components/TitleBar.vue'
import NavBar from './components/NavBar.vue'

export default {
    name: 'app',
    components: {
        Dashboard,
        TitleBar,
        NavBar
    }
}
</script>

<style lang="less">
#app {
    position: fixed;
    top:0;
    left:0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100vw;
    height: 100vh;
   background: #2980b9;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2c3e50, #2980b9);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2c3e50, #2980b9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

#body {
    margin: 0;
    color: #f5f6f7;
}

#router-view {
    margin-top: 53px;
}

</style>
