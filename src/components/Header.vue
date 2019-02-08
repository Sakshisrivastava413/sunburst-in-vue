<template>
<div class="main-container">
    <nav class="navbar navbar-expand-md navbar-dark" style="background-color: #4D4D4D;">
  <a class="navbar-brand text-white" href="/">IPL VISUALIZE</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link" to="/team">Teams</router-link>
      <a class="nav-item nav-link" href="#">Matches</a>
      <a class="nav-item nav-link" href="#">Runs</a>
      <a class="nav-item nav-link" href="#">Venues</a>
    </div>
  </div>
</nav>
</div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style>
    .main-container {
        padding: 0px
    }
    .navbar-brand {
        padding-top: 11px
    }
</style>

