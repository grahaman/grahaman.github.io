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

    background-image: url(assets/renly.jpeg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center; 
    background-size: cover;
    filter: grayscale(1);
}

#body {
    margin: 0;
    color: #f5f6f7;

}

#router-view {
    margin-top: 53px;
    height: 100%;
    width: 100%;
    overflow: auto;
}

</style>

