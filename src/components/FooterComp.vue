<template>
    <footer class="conte text-center text-primary pt-5  pt-0">
  <!-- Grid container -->
  <div class="container p-4 pb-0 mb-0">
    <router-link to="/about" class="nav-link active" aria-current="page"><button class="btn_about text-primary mb-4">Conóceme</button></router-link> 
    <!-- Section: Social media -->
    <section class="mb-4">

      <!-- Facebook -->
      <a
        class="btn text-white btn-floating m-1"
        style="background-color: #3b5998;"
        href="#!"
        role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <!-- Twitter -->
      <a
        class="btn text-white btn-floating m-1"
        style="background-color: #55acee;"
        href="#!"
        role="button"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a
        class="btn text-white btn-floating m-1"
        style="background-color: #dd4b39;"
        href="#!"
        role="button"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Instagram -->
      <a
        class="btn text-white btn-floating m-1"
        style="background-color: #ac2bac;"
        href="#!"
        role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      <!-- Linkedin -->
      <a
        class="btn text-white btn-floating m-1"
        style="background-color: #0082ca;"
        href="#!"
        role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>
      <!-- Github -->
      <a
        class="btn text-white btn-floating m-1"
        style="background-color: #b63434;"
        href="#!"
        role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>
    <!-- Section: Social media -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color:   #040910;">
    
    <p class="text-primary" >© 2023 Copyright: MayQuiz</p>
  </div>
  <!-- Copyright -->
</footer>
</template>

<script setup>

</script>

<style scoped>
.btn_about{
    background: #23233d58;
    border-radius: 30%;
    border-color: #8dacdab0;
    padding: .2em;
  
  } 
  .container{
    background-color: #090910;
    
  }
  .conte{
    background-image: url(../assets/img/fondoplanetas.jpg)
    
    
  }
</style>