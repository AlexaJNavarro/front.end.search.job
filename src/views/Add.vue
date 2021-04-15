  <template>
    <v-container>
        <v-row align=center justify="center">
            <v-col cols="12" sm="6" >
                <div v-if="alert==true">
                    <v-alert dense outlined type="error">
                        El correo ingresado es <strong>inválido</strong>
                    </v-alert>
                </div>
                <div class="center content-inputs">
                    <vs-input
                        primary
                        v-model="title"
                        placeholder="Title" /><br>

                    <vs-input
                        success
                        v-model="description"
                        placeholder="Description" /><br>

                    <vs-input
                        danger
                        v-model="company_name"
                        placeholder="Company Name" /><br>

                    <vs-input
                        warn
                        v-model="mail"
                        placeholder="Mail" /><br>

                    <vs-input
                        dark
                        v-model="location"
                        placeholder="Location" /><br>
                    
                    <v-btn rounded color="primary" dark @click="send" >
                        Send
                    </v-btn>

                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name:"Add",
    data(){
        return{
            title:'',
            description:'',
            company_name:'',
            mail:'',
            location:'',
            alert:false
        }
    },
    methods:{
        async send(){
            if(this.mail.includes("@")){
                const data={
                "title":this.title,
                "description":this.description,
                "company_name":this.company_name,
                "mail":this.mail,
                "location":this.location
                }
                this.clean()
                this.alert=false
                const response = await this.axios.post(`http://localhost:8080/api/v1/posts/`,data)
                console.log(response.data)
            }else{
                this.alert=true
            }
            
        },
        clean(){
            this.title='',
            this.description='',
            this.company_name='',
            this.mail='',
            this.location=''
        }
    }
}
</script>