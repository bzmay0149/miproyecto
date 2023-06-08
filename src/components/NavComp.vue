<template>
   

<nav id="navbar-example2" class="navbar bg-body-tertiary px-5  ">
  <router-link to="/" class="navbar-brand ps-5"><button class="btn_logo border-0 "><img class="logo  " src="../assets/img/logo.png" alt="logo" ></button></router-link>
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
  background-color: rgba(223, 217, 217, 0.871); 
  
}
 
.logo{
  width: 50%;
  height: 0%;
  transition: all 0.3s ease;
 }
 .logo:hover{
  transform: scale(1.2);
 }
.img_len{
  max-width: 10em;
  transition: all 0.3s ease;
  
}
.img_len:hover{
  transform: scale(1.5);
}
.btn_logo{
 
  background-color: rgba(223, 217, 217, 0.871);
  padding: auto;
  border-radius: 10%;
  border-top: 0;
  
}
.btn_nav{
  background-color: rgba(223, 217, 217, 0.871);
  
  
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