<template>
    <div>
        <router-link class="btn btn-primary" to="/start">Ny runde</router-link>
    </div>
</template>

<script>
export default {
  name: 'frontpage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  methods:{
      start: ()=> {

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div{
        text-align: center;
    }
</style>
