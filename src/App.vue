<template>
  <NavComp/>
  

  <router-view/>
  <FooterComp/>
</template>

<script setup>
import NavComp from '@/components/NavComp.vue';
import FooterComp from './components/FooterComp.vue';

</script>

<style>

</style>
