<template>
    <footer class="conte text-center text-primary pt-4">
  <!-- Grid container -->
  <div class="container ">
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
  <div class="text-center p-1" style="background-color:   rgba(223, 217, 217, 0.871);">
    
    <p class="text-primary " >© 2023 Copyright: MayQuiz</p>
  </div>
  <!-- Copyright -->
</footer>
</template>

<script setup>

</script>

<style scoped>
.btn_about{
    background: #d2d2dd58;
    border-radius: 30%;
    /* border-color: #9a9ca1ab; */
    padding: .8em;
    border: 3px solid rgba(236, 231, 231, 0.11);
    box-shadow: 5px 5px 6px 4px rgb(112, 109, 109);
    transition: all 0.3s ease;
  } 
  .btn_about:hover{
    background-color: rgb(34, 33, 33);
  }
  .conte{
    background-color: rgba(223, 217, 217, 0.871);
    
    
  }
  /* .container{
    background-color: darkgrey;
  } */
</style>