<template>
  <NavComp/>
  

  <router-view/>
  <FooterComp/>
</template>

<script setup>
import NavComp from '@/components/NavComp.vue';
import FooterComp from '@/components/FooterComp.vue';

</script>

<style>
 body {
  background-image: url(../src/assets/img/fondoplanetas.jpg)
  
} 
</style>
