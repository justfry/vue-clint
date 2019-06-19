<template>
  <div id="app">
      <Users v-bind:users="users" />
  </div>
</template>

<script>
import Users from './components/usersBasicInfo'
import SearchUser from './components/SearchUser.vue'
import axios from 'axios'
import { METHODS } from 'http';
export default {
  name: 'app',
  components: {
    Users,
    SearchUser
  },
  data(){
   
  },
  mounted(){
    
  },
  methonds:{
  
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
