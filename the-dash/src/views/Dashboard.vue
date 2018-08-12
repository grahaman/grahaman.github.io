<template>
    <div class="dashboard-container">
        <div v-for="card in 30" :key="card.id" >
            <Card></Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {    
    name: 'Dashboard',
    data: function() {
        return {
            cards: [0,1]
        }
    },
    components: {
        Card
    }
}
</script>

<style lang="less" scoped>
.dashboard-container {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 15px;
    overflow-y: atuo;
}
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
