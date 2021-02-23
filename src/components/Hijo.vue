<template>
    <div>
        <h1>{{message}}</h1>
    </div>
</template>

<script>
export default {
    name: 'Hijo',
    data:function(){
        return {
            message: "Hola, soy el hijo"
        }
    },
  
}
</script>

<style scoped>
    h1{
        color:green
    }
</style>