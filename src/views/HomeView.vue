<template>
 
  <TextComp/>
  <CardComp hola="../imgs/cardHtml.jpg" />
  <div class="contenedorCard">  
  <NewComp imagen="../imgs/cardCss.jpeg" Start="Card1" titulo="Titulo1" alt="imagen 1"/>
  <NewComp imagen="../imgs/cardJs.png" Start="Card2" titulo="Titulo2" alt="imagen 2" />
  <NewComp imagen="../imgs/cardCss.jpeg" Start="Card3" titulo="Titulo3" alt="imagen 3" />
  </div>

</template>

<script setup>
import TextComp from '@/components/TextComp.vue';
import CardComp from '@/components/CardComp.vue';
import NewComp from '@/components/NewComp.vue';



</script>
<style scoped>
.body{
  background-color: aquamarine;
}
.contenedorCard{
  display: flex;
}
</style>
