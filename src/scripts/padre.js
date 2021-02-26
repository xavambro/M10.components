import Hijo from '../components/Hijo'

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