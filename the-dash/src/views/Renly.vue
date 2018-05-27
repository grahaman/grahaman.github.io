<template>
    <div class="renly-container">
        <div class="renly">
            <img class="pic" src="@/assets/renly.jpeg"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Renly'
}
</script>

<style lang="less" scoped>
.renly-container {
    height: 100%;
    width: 100%;
}

.renly {
    display: grid;
    height: 100%;

    .pic {
        max-width: 100%;
        max-height: 100vh;
        margin: auto;
    }

}
</style>
