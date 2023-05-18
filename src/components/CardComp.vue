<template>
  <div class="container ">
   <div class="row row-cols-1 row-cols-md-3 g-4 ">
  <div class="col ">
    <div class="card h-100">
      <button class="btn-img"><img src="../assets/img/cardHtml.jpg" class="card-img-top rounded-pill" alt="..."></button>
      
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <button class="btn-img"><img src="../imgs/cardCss.jpeg" class="card-img-top rounded-pill" alt="..."></button>
     
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <button class="btn-img"><img src= "../assets/img/cardJs.png" class="card-img-top rounded-pill" alt="..."></button>
     
    </div>
   </div>
  </div>
</div> 
</template>

<script setup>
 import {defineEmits} from 'vue';

const emit = defineEmits(["imagenesrc"])

const KeepImg = (url) => { 
  url = "../assets/img/cardHtml.jpg"
  emit("imagenesrc", url )
  console.log(url)
}

// export default {
//   name: 'CardComp',
//   props: {
//     cardhtml: Object,
      
    
//   },
// };

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