<template>

<div class="card text-center border border-0 pt-5 ">
<form>
  <div class="row mb-3">
    <label for="inputQuiz" class="col-sm-2 col-form-label"></label>
    <div class="col-sm-10">
      <input type="text" class="form-control  p-2" placeholder="pregunta" id="inputQuiz">
    </div>
  </div>
  <div class="row mb-3">
  </div>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0"></legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
        <label class="form-check-label" for="gridRadios1">
          Respuesta 1
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
        <label class="form-check-label" for="gridRadios2">
          Respuesta 2
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3">
        <label class="form-check-label" for="gridRadios3">
          Respuesta 3
        </label>
      </div>
    </div>
  </fieldset>
  <div class="row mb-3">
    <div class="col-sm-10 offset-sm-2">
      
    </div>
  </div>
  <button type="submit" class="btn btn-primary mb-4">Contestar</button>
</form>
</div>

   
</template>

<script setup>

</script>

<style scoped>
.card{
    background-color: #E2EAF4;
    width: 40%;
    height: auto;
    background-image: url(../assets/img/fondo.jpg); 
    border: 3px solid rgba(236, 231, 231, 0.11);
    box-shadow: 5px 5px 6px 4px rgb(112, 109, 109);
    margin-bottom: 2rem;
    padding-top: 2rem;
    margin-top: 2rem;
    margin-left: 30%;
    text-shadow: 1px 1px 2px #000, -1px -1px 2px #000;   
}
</style>


  
  