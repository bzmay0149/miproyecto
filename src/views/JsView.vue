<template>
    <TitleComp title="JavaScript" />
    <!-- <div class="contenedorCard">  
  <NewComp imagen="../imgs/cardHtml.jpg" Start="HTML" titulo="Titulo1" alt="imagen 1"/>
  <NewComp imagen="../imgs/cardCss.jpeg" Start="CSS" titulo="Titulo2" alt="imagen 2" />
  <NewComp imagen="../imgs/cardJs.png" Start="JS" titulo="Titulo3" alt="imagen 3" />
  </div> -->
  <CardComp imagenHtml="../imgs/js1.jpg" imagenCss="../imgs/js2.png" imagenJs="../imgs/js3.jpeg" start1="INICIO" start2="MEDIO" start3="EXPERTO" />
</template>

<script setup>
import TitleComp from '@/components/TitleComp.vue';
import CardComp from '@/components/CardComp.vue';
// import NewCompVue from '@/components/NewComp.vue';
</script>

<style  scoped>

</style>