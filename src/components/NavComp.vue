<template>
   <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid ">
    <router-link to="/" class="navbar-brand  "><button class="btn_logo"><img class="logo" src="../assets/img/logo.png" alt="logo" ></button></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/about" class="nav-link active" aria-current="page"><button class="btn_about">Conóceme</button></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/html"  class="nav-link"><button class="btn_nav"><img class="img_len" src="../assets/img/html.png" alt="button HTML"></button></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/css"  class="nav-link"><button class="btn_nav"><img class="img_len" src="../assets/img/css.png" alt="button CSS"></button></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/js"  class="nav-link"><button class="btn_nav"><img class="img_len" src="../assets/img/js.png" alt="button JS"></button></router-link>
        </li>
      </ul>
    </div>
  </div>
</nav> -->

<nav id="navbar-example2" class="navbar bg-body-tertiary px-5  ">
  <router-link to="/" class="navbar-brand ps-5"><button class="btn_logo border border-5 border border-top-0"><img class="logo  " src="../assets/img/logo.png" alt="logo" ></button></router-link>
  <!-- <router-link to="/about" class="nav-link active" aria-current="page"><button class="btn_about text-primary">Conóceme</button></router-link> -->
  <ul class="nav nav-pills">
    <li class="nav-item">
      <router-link to="/html" class="nav-link "><button class="btn_nav rounded float-end border border-0 rounded-5 "><img class="img_len " src="../assets/img/html.png"  alt="button HTML"></button></router-link>
    </li>
    <li class="nav-item">
      <router-link to="/css" class="nav-link" ><button class="btn_nav border border-0 rounded-5"><img class="img_len " src="../assets/img/css.png" alt="button CSS"></button></router-link>
    </li>
    <li class="nav-item dropdown">
      <router-link to="/js" class="nav-link" ><button class="btn_nav border border-0 rounded-5"><img class="img_len " src="../assets/img/js.png" alt="button JS"></button></router-link>
      
    </li>
  </ul>
</nav>

</template>

<script setup>

</script>

<style scoped>
 .navbar {
  widows: 100%;
  /* height: auto; */
  background-color: #C4DDFF; 
}
 .container-fluid{
 background: #BED7FD
}
.logo{
  width: 40%;
  height: 0%;
 }
.img_len{
  max-width: 10em;
  
}
.btn_logo{
 
  background-color: #BED7FD;
  padding: auto;
  border-radius: 30%;
  border-top: 0;
  
}
.btn_nav{
  background-color: #BED7FD;
  
  
}
/* .btn_about{
    background: #BED7FD;
    border-radius: 30%;
    border-color: #f1f3f6b0;
    padding: .8em;
  
  } */
  .nav-item{
    border: 0;
  } 
</style>