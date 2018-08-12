<template>
    <div class="title-bar">
        <router-link 
        class="title-icon"
        to="/">
            <i class="fab fa-rebel fa-2x"></i>
            <div class="title-text">Dashboard</div>
        </router-link>
        <div class="nav-right">
            <router-link 
            class="nav-item"
            to="/renly">
                <div>Renly</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TitleBar'
}
</script>

<style lang="less">
.title-bar {
    position:fixed;
    top: 0;
    width: 100%;
    height: 52px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    color: #f5f6f7;
    line-height: 52px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.title-icon {
    display: flex;
    text-align: center;
    text-decoration: none;
    color: #f5f6f7;
    i {
        line-height: 52px;
        padding-left: 10px;
        padding-right: 10px;
    }
}

.nav-item {
    text-align: center;
    text-decoration: none;
    div {
        width: 30px;
        padding: 0 30px 0 30px;
        height: 52px;
        border-left: 1px solid rgba(0, 0, 0, 0.2);
        color: #f5f6f7;
    }
    div:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
}
    
.nav-right {
    position:absolute;
    right: 0px;
}
</style>