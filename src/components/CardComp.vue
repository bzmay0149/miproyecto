<template>
  <!-- <div class="container ">
   <div class="row row-cols-1 row-cols-md-3 g-4 ">
  <div class="col "> -->
    <div class="card h-100">
      <button class="btn-img"><img :src="hola"  alt="..."></button>
      
      
    </div>
  <!-- </div>
  <div class="col">
    <div class="card h-100">
      <button class="btn-img"><img src="../imgs/cardCss.jpeg" class="card-img-top rounded-pill" alt="..."></button>
     
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <button class="btn-img"><img src= "../assets/img/cardJs.png" class="card-img-top rounded-pill" alt="..."></button>
     
    </div>
   </div> -->
  <!-- </div>
</div>  -->
</template>

<script>
 
 export default {
   name: 'CardComp',
  props: {
     hola: String,
      
    
  },
 };

</script>

<style scoped>
.container{
    background-color: #E2EAF4;
}
.btn-img{
    border: #E2EAF4;
    background-color: #E2EAF4;
    border: 0;
}
.card{
    background-color: #E2EAF4;
    border: 0;
}
  .card-img-top{
   height: 10em; 
   width: 90%;
}  
</style>