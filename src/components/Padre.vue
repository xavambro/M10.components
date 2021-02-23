<template>
    <div>
        <h1>{{message}}</h1>
        <Hijo></Hijo>
    </div>
</template>

<script>
import Hijo from './Hijo.vue'

export default {
    name: 'Padre',
    data:function(){
        return {
            message: "Hola, soy el padre"
        }
    },
    components:{
        Hijo
    }
  
}
</script>

<style scoped>
    
</style>
