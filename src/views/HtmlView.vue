<template>
   <TitleComp title="HTML" />
   <!-- <div class="contenedorCard">  
  <NewComp imagen="../imgs/cardHtml.jpg" Start1="BASICO" titulo="Titulo1" alt="imagen 1"/>
  <NewComp imagen="../imgs/cardCss.jpeg" Start2="INTERMEDIO" titulo="Titulo2" alt="imagen 2" />
  <NewComp imagen="../imgs/cardJs.png" Start3="AVANZADO" titulo="Titulo3" alt="imagen 3" />
  </div> -->
  <CardComp imagenHtml="../imgs/html1.jpeg" imagenCss="../imgs/html2.jpeg" imagenJs="../imgs/html3.jpeg" start1="JUNIOR" start2="SEMI-SE" start3="SENIOR" />
  </template>

<script setup>
import TitleComp from '@/components/TitleComp.vue';
// // import NewCompVue from '@/components/NewComp.vue';
import CardComp from '@/components/CardComp.vue';

// import { ref } from 'vue';
// import NewComp from '@/components/NewComp.vue';

// const imagenesrc = ref("")
// const fotoHtml = (url) => {
//   imagenesrc.value = url
// }



</script>

<style  scoped>
.contenedorCard{
  display: flex;
  background-image: url(../assets/img/fondoplanetas.jpg);
  background-repeat: no-repeat;
  
  
}
body{
  background-image: url(../assets/img/fondoplanetas.jpg);
  background-repeat: no-repeat;
   
}

</style>