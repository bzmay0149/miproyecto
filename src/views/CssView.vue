<template>
    <TitleComp title="CSS" />
    <!-- <div class="contenedorCard">  
  <NewComp imagen="../imgs/cardHtml.jpg" Start="HTML" titulo="Titulo1" alt="imagen 1"/>
  <NewComp imagen="../imgs/cardCss.jpeg" Start="CSS" titulo="Titulo2" alt="imagen 2" />
  <NewComp imagen="../imgs/cardJs.png" Start="JS" titulo="Titulo3" alt="imagen 3" />
  </div> -->
  <CardComp imagenHtml="../imgs/cardHtml.jpg" imagenCss="../imgs/cardCss.jpeg" imagenJs="../imgs/cardJs.png" start1="HTML" start2="CSS" start3="JS" />

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