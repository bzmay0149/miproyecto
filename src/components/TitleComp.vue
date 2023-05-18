<template>
   <div class="card text-center border border-0 pt-5 ">
    <h1 class="card-header border border-0 text-primary ">
      ¡Escoja el nivel deseado de {{ title  }}!
    </h1>
</div> 
</template>

<script>
export default {
  name: 'TitleComp',
  props: {
    title: String,
      
    
  },
};

</script>

<style scoped>

</style>