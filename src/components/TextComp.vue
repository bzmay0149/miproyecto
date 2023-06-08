<template>
   <div class="card text-center border border-0 pt-5 ">
  <h1 class="card-header border border-0 text-primary bg-transparent">
    ¡Bienvenido al juego Quiz de HTML, CSS y JavaScript!
  </h1>
 <div class="margin">
  <div class="card-body pt-5">
    <h4 class="card-title ">Este juego <span>te desafiará</span> a poner a prueba tus conocimientos en  <span> programación web.</span>¿Estás listo para poner a prueba tus habilidades y aprender más sobre <span> HTML, CSS y JavaScript?</span>  </h4>
    <h4 class="card-text pt-4">Cada pregunta tiene  <span> tres opciones y solo una respuesta correcta.</span> ¡Intenta responder todas las preguntas correctamente para convertirte en el <span>campeón de MayQuiz</span>  </h4>
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
    width: 80%;
    height: auto;
    background-image: url(../assets/img/fondo.jpg); 
   border: 3px solid rgba(236, 231, 231, 0.11);
    box-shadow: 5px 5px 6px 4px rgb(112, 109, 109);
    margin-bottom: 2rem;
    padding-top: 2rem;
    margin-top: 2rem;
    margin-left: 10%;
    text-shadow: 1px 1px 2px #000, -1px -1px 2px #000;

    
  
}

.margin{
  margin: 0em 6em;
}
.card-body{
  color: rgba(0, 0, 255, 0.992);
  
}
span{
  color: rgb(119, 117, 117);
}




</style>