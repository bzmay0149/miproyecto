<!-- Este componente es para visualizar una pregunta por su ID -->
<template>
    <h1>Consigue una pregunta</h1>
    <img v-if="isError" src="src/assets/img/error.png" alt="error">
    <form @submit.prevent>
      <div>
          <label for="id_pregunta"> ID: </label>
          <input type="text" id="id_pregunta" v-model="dataID_get">
      </div>
      <button @click="getPregunta">Pregunta</button>
    </form>
    <div v-show="show">
      {{ data }}
      <p>Pregunta: {{  data.pregunta }}</p> 
      <p>Respuesta1: {{ data.respuesta1}}</p> 
      <p>Respuesta2: {{ data.respuesta2}}</p> 
      <p>Respuesta3: {{ data.respuesta3}}</p> 
      <p>Acertada: {{ data.acertada }}</p>
    </div>
    <div v-show="quiz">
      <p>Existe un error en la base de datos </p>
    </div>
  </template>
  
  <script setup>
  import {ref} from "vue"
  import axios from "axios"
  
  let dataID_get= ref("")
  let isError = false
  let data = ref("")
  let show= ref(false)
  let quiz = ref(false)
  
  async function getPregunta(){
  
      try{
        let response = await axios.get(`http://localhost:5000/preguntas/${dataID_get.value}`)
        data.value = await response.data
        console.log("esto es data", data.value)
        show.value = true
       
      }catch(error){
        console.log(error)
        isError = true
        quiz.value = true
      }
  }
  
  </script>
  
  <style>
  
  </style>