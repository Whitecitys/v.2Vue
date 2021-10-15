export default{
    data(){
        return{
            message: 'Hello from mixins'
        }
    },
    created(){
        console.log('Create Mixin')
    },
    mounted(){
        console.log('Mount Mixin')
    },
    methods:{
        logmessage(){
            console.log(this.message)
        },
    }

}