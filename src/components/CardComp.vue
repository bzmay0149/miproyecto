<template>
   <div class="container">
   <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col "> 
    <div class="card h-100 ">
      <button class="btn-img"><img :src="imagenHtml"  class="card-img-top"  alt="..."></button>
      <a :href="enlace" class="btn btn-primary">{{ start1 }}</a>
      
    </div>
   </div>
  <div class="col">
    <div class="card h-100">
      <button class="btn-img"><img :src="imagenCss" class="card-img-top" alt="..."></button>
      <a :href="enlace" class="btn btn-primary">{{ start2 }}</a>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <button class="btn-img"><img :src= "imagenJs" class="card-img-top" alt="..."></button>
      <a :href="enlace" class="btn btn-primary">{{ start3 }}</a>
    </div>
   </div> 
   </div>
</div>  
</template>

<script>
 
 export default {
   name: 'CardComp',
  props: {
     imagenHtml: String,
     imagenCss: String,
     imagenJs: String,
     start1: String,
     start2: String,
     start3: String 
    
  },
 };

</script>

<style scoped>

.container{
  background-image: url(../assets/img/fondo.jpg);
  margin-bottom: 5rem;
  
}
.btn-img{
    
     background-image: url(../assets/img/fondo.jpg);
     
    border: 0;
    
  
}
.card{
   background-image: url(../assets/img/fondo.jpg); 
   border: 3px solid rgba(236, 231, 231, 0.11);
    box-shadow: 5px 5px 6px 4px rgb(112, 109, 109);
    margin-bottom: 2rem;
    padding-top: 2rem;
    
    
    
    
    
}
  .card-img-top{
   height: 12em; 
   width: 20em;
   border-radius: 10%;
   transition: all 0.3s ease;
  
  
} 
.card-img-top:hover{
  transform: scale(1.2); 
}
.btn{
transition: all 0.3s ease;
border-radius: 10%;
height: 2em; 
width: 6em;
margin: auto;
margin-top: 2em;

}
.btn:hover{
  transform: scale(1.2); 
  background-color: orangered;
} 
</style>