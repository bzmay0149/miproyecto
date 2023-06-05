<!-- Este componente es para crear uan nueva pregunta-->

<template>
    <h1>Formulario para crear preguntas</h1>
    <img v-if="isError" src="src/assets/img/error.png" alt="error">
      <form @submit.prevent>
          <div>
              <label for="id_pregunta"> ID: </label>
              <input type="text" id="id_pregunta" v-model="dataID">
          </div>
          <div>
              <label for="pregunta">PREGUNTA: </label>
              <input type="text" id="pregunta" v-model="dataPregunta">
          </div>
          <div>
              <label for="respuesta1">RESPUESTA1: </label>
              <input type="text" id="respuesta1_pregunta" v-model="dataRespuesta1">
          </div>
          <div>
              <label for="respuesta2">RESPUESTA2: </label>
              <input type="text" id="respuesta2_pregunta" v-model="dataRespuesta2">
          </div>
          <div>
              <label for="respuesta3">RESPUESTA3: </label>
              <input type="text" id="respuesta3_pregunta" v-model="dataRespuesta3">
          </div>
          <div>
              <label for="acertada">ACERTADA:</label>
              <input type="text" id="acertada_pregunta" v-model="dataAcertada">
          </div>        
      </form>
      <button @click="createPregunta">Crear</button>
  </template>
  
  <script setup>
  import {ref} from "vue"
  import axios from "axios"
  
  let isError = ref(false)
  
  let dataID= ref("")
  let dataPregunta = ref("")
  let dataRespuesta1 = ref("")
  let dataRespuesta2 = ref("")
  let dataRespuesta3 = ref("")
  let dataAcertada = ref("")
  
  const url = 'http://localhost:5000/preguntas';
  
  async function createPregunta(){
      try{
        await axios.post(url, {
              id: dataID.value,
              pregunta: dataPregunta.value,
              respuesta1: dataRespuesta1.value,
              respuesta2: dataRespuesta2.value,
              respuesta3: dataRespuesta3.value,
              acertada: dataAcertada.value
          })
           location.reload() // recarga la página cuando se ejecuta la creación de una nueva pregunta
      }catch(error){
          console.log(error)
          isError = true
      }
  }
  
  
  
  
  </script>
  
  
  
  <style>
  
  </style>