<template>
   <div class="card text-center border border-0 pt-5 ">
  <h1 class="card-header border border-0 text-primary ">
    ¡Bienvenido al juego Quiz de HTML, CSS y JavaScript!
  </h1>
 <div class="margin">
  <div class="card-body pt-5">
    <h3 class="card-title ">Este juego <span>te desafiará</span> a poner a prueba tus conocimientos en  <span> programación web.</span>¿Estás listo para poner a prueba tus habilidades y aprender más sobre <span> HTML, CSS y JavaScript?</span>  </h3>
    <h3 class="card-text pt-4">Cada pregunta tiene  <span> tres opciones y solo una respuesta correcta.</span> ¡Intenta responder todas las preguntas correctamente para convertirte en el <span>campeón de MayQuiz</span>  </h3>
    <h2 class="card-text border border-0 text-primary pt-5 pb-5">¡Que empiece la diversión!</h2>
  </div>
</div>
</div>
</template>

<script setup>

</script>

<style scoped>
.card{
    background-color: #E2EAF4;
    background-image: url(../assets/img/fondoplanetas.jpg);
  
}

.margin{
  margin: 0em 6em;
}
.card-body{
  color: rgba(0, 0, 255, 0.992);
}
span{
  color: white;
}
</style>