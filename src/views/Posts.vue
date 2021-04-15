<template>
        <v-container>
            <v-row align=center justify="center">
                <br><br><br><br>
                <vs-input v-model="name_job" placeholder="Title Job" />
                <v-btn text color="teal accent-4" @click="search">
                    <box-icon  name='search-alt'></box-icon>
                </v-btn>
            </v-row>
            <br><br>
            <v-row>
                <v-col cols="12" sm="6" v-for="post of posts" :key="post._id">
                    <v-card class="mx-auto" max-width="344">
                        <v-card-text>
                        <div>{{post.created_at}}</div>
                        <p class="display-1 text--primary">
                            {{post.title}}
                        </p>
                        <p>{{post.company_name}}</p>
                        <div class="text--primary">
                            {{post.description}}
                        </div>
                        <div class="text--primary">
                            {{post.mail}}
                        </div>
                        <div class="text--primary">
                            {{post.location}}
                        </div>
                        </v-card-text>
                        <v-card-actions>
                        <router-link :to="{name:'Post', params:{id:post._id}}">
                            <v-btn text color="pink lighten-2" >
                                Enviar CV
                            </v-btn>
                        </router-link>
                        </v-card-actions>
                    </v-card>
                </v-col>      
            </v-row>
        </v-container>

</template>
<script>
export default {
    name:'Posts',
    data(){
        return{
            posts:[],
            name_job:''
        }
    },
    methods:{
        async search(){
            const response= await this.axios.get(`http://localhost:8080/api/v1/posts/${this.name_job}`)
            this.posts= response.data.data
            this.name_job=''
        }
    },
    async created(){
        const response= await this.axios.get('http://localhost:8080/api/v1/posts')
        this.posts= response.data.data
    }
}

</script>