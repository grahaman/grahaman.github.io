<template>
    <div class="title-bar">
        <div class="title-icon">
            <i class="icon fab fa-rebel fa-2x"></i></div>
        <div class="title-text">Dashboard</div>
    </div>
</template>

<script>
export default {
  name: 'TitleBar'
}
</script>

<style lang="less">
.title-bar {
    width: 100%;
    height: 52px;
    background-color: rgba(0, 0, 0, 0.5);
    color: rgb(255, 255, 255);
    display: flex;
    line-height: 52px;
}

.title-icon {
    width: 52px;
    text-align: center;
    vertical-align: middle;
}

.icon {
    line-height: 52px;
}
</style>