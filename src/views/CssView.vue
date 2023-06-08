<template>
    <TitleComp title="CSS" />
    <!-- <div class="contenedorCard">  
  <NewComp imagen="../imgs/cardHtml.jpg" Start="HTML" titulo="Titulo1" alt="imagen 1"/>
  <NewComp imagen="../imgs/cardCss.jpeg" Start="CSS" titulo="Titulo2" alt="imagen 2" />
  <NewComp imagen="../imgs/cardJs.png" Start="JS" titulo="Titulo3" alt="imagen 3" />
  </div> -->
  <CardComp imagenHtml="../imgs/css1.jpeg" imagenCss="../imgs/css2.jpg" imagenJs="../imgs/css3.jpeg" start1="JUNIOR" start2="SEMI-SE" start3="SENIOR" />

</template>

<script setup>
import TitleComp from '@/components/TitleComp.vue';
import CardComp from '@/components/CardComp.vue';
// import NewCompVue from '@/components/NewComp.vue';

// import { ref } from 'vue';
// import NewComp from '@/components/NewComp.vue';

// const imagenesrc = ref("")
// const fotoHtml = (url) => {
//   imagenesrc.value = url
// }
</script>

<style  scoped>

</style>