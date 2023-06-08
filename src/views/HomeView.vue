<template>
 <div class="fondo">
  <TextComp/>
  <CardComp imagenHtml="../imgs/cardHtml.jpg" imagenCss="../imgs/cardCss.jpeg" imagenJs="../imgs/cardJs.png" start1="HTML" start2="CSS" start3="JS" /> 
  <!-- <div class="contenedorCard">   
  <NewComp imagen="../imgs/cardHtml.jpg" Start="HTML" titulo="Titulo1" alt="imagen 1"/>
  <NewComp imagen="../imgs/cardCss.jpeg" Start="CSS" titulo="Titulo2" alt="imagen 2" />
  <NewComp imagen="../imgs/cardJs.png" Start="JS" titulo="Titulo3" alt="imagen 3" />
  </div> -->
</div>
</template>

<script setup>
import TextComp from '@/components/TextComp.vue';
import CardComp from '@/components/CardComp.vue';
import NewComp from '@/components/NewComp.vue';



</script>
<style scoped>
.body{
  background-color: #E2EAF4;
}
.contenedorCard{
  display: flex;
  /* background-image: url(../assets/img/fondoplanetas.jpg); */
  filter: blur(6px);
}
.fondo{
  background-image: url(../assets/img/fondo.jpg);
  
}
</style>
