<template>
    <div class="card-container">
        <div class="card-header">
        </div>
        <div class="card-body">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card'
}
</script>

<style>
.card-container {
    height: 100px;
    width: 300px;
    background-color: rgba(212, 212, 212, .5);
    border: 1px solid rgba(212, 212, 212, .6);
    margin-bottom: 15px;
    margin-right: 15px;
}
.card-header {
    position: relative;
    top: 0;
    background-color: rgba(212, 212, 212, .5);
    height: 30px;
    line-height: 30px;
}
</style>