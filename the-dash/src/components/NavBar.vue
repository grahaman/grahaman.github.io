<template>
    <div class="nav-bar">
        <!-- <router-link 
        class="nav-item"
        to="/ren">
            <div class="nav-text">Renly</div>
        </router-link> -->
    </div>
</template>

<script>
export default {
  name: 'TitleBar'
}
</script>

<style lang="less">
.nav-bar {
    width: 100%;
    height: 52px;
    display: flex;
    line-height: 52px;
    display: flex;
}

.nav-item {
    width: 30px; 
    text-align: center;
    text-decoration: none;
    color: rgb(36, 36, 36);
}


</style>