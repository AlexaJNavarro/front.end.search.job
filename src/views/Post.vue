<template>
    <v-container>
        <v-row>
            <v-col>
                <div>
                    <div v-if="alert==true">
                        <v-alert dense outlined type="error">
                            El usuario ingresado es <strong>inválido</strong>
                    </v-alert>
                    </div>
                    <form @submit.prevent="send">
                        <v-text-field v-model="user" label="User Mail" ></v-text-field>
                        <v-text-field v-model="pass" label="Password Mail" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                  :type="show1 ? 'text' : 'password'" counter @click:append="show1 = !show1"></v-text-field>
                        <v-text-field v-model="subject" label="Subject" ></v-text-field>
                        <v-text-field v-model="text" label="Text" ></v-text-field>
                        <v-file-input v-model="file" truncate-length="15"></v-file-input>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name:"Post",
    data(){
        return{
            user:'',
            pass:'',
            to:'',
            subject:'',
            text:'',
            file:null,
            posts:[],
            alert:false,

            show1:false
        }
    },
    methods:{
        async send(e){
            try {
                if(this.user.includes("@")){
                    const form = new FormData(e.target)
                    form.set("user",this.user)
                    form.set("pass",this.pass)
                    form.set("from",this.user)
                    form.set("to",this.to)
                    form.set("subject",this.subject)
                    form.set("text",this.text)
                    form.set("filename",this.file.name)
                    form.set("path",this.file,this.file.name)
                    this.clean()
                    this.alert=false
                    const response = await this.axios.post(`http://localhost:8080/api/v1/mails/`,form)
                    console.log(response.data)
                }else{
                    this.alert=true
                }
                
                
            } catch (error) {
                console.log(error)
            }

        },
        clean(){
            this.user='',
            this.pass='',
            this.from='',
            this.to='',
            this.subject='',
            this.text='',
            this.file=null
        }
    },
    async created(){
        const response= await this.axios.get('http://localhost:8080/api/v1/posts')
        this.posts= response.data.data

        this.posts.forEach(p => {
            if(p._id==this.$route.params.id){
                this.to=p.mail
            }
            
        });
    
    }
}
</script>