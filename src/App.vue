<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <router-link class="navbar-brand" to="/">Golf</router-link>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>

    <nav class="navbar navbar-light bg-light fixed-bottom d-block d-sm-none">
      <div class="row">

        <div class="col"><router-link to="/"><i class="fas fa-home"></i></router-link></div>
        <div class="col"><router-link to="/scores"><i class="fas fa-list-alt"></i></router-link></div>
        <div class="col"><router-link to="/social"><i class="fas fa-comments"></i></router-link></div>
        <div class="col"><router-link to="/profile"><i class="fas fa-user"></i></router-link></div>

      </div>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
  div{
    text-align: center;
  }
  a{
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
