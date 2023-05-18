<template>
   <TitleComp title="HTML" />
   <CardComp @imagenesrc="fotoHtml"/>
</template>

<script setup>
import TitleComp from '@/components/TitleComp.vue';
import CardComp from '@/components/CardComp.vue';

import { ref } from 'vue';

const imagenesrc = ref("")
const fotoHtml = (url) => {
  imagenesrc.value = url
}



</script>

<style  scoped>

</style>