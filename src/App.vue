<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <router-link :to="{name:'Posts'}">
        <v-btn target="_blank" text>
          <span class="mr-2">SEARCH JOB</span>
        </v-btn>
      </router-link>
      
      <v-spacer></v-spacer>
      
      <router-link :to="{name:'Add'}">
        <v-btn target="_blank" text>
          
          <span class="mr-2">Add Job</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
};
</script>
