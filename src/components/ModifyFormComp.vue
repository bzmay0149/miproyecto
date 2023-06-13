<template>
  <!-- <img v-if="isError" src="../assets/image/error.png" alt="error">
  <img v-if="isLoading" src="../assets/image/error.png" alt="loading"> -->
  <!-- {{ data }}  -->
  <div v-for="dat in data" :key="dat.id_pregunta">
     <!-- Mostrar datos -->
      <ul>
        <li>Texto: {{ dat.texto }}</li> 
        <li>Tema: {{ dat.tema }}</li>
        <li>Nivel: {{ dat.nivel }}</li>
        <li>Correcta: {{ dat.correcta }}</li>
          
          <button @click="editar(dat.id_pregunta)">Editar</button>
          <button @click="eliminar(dat.id_pregunta)">Eliminar</button>
        
      </ul>
  
      <!-- Formulario de edición -->
      <form v-show="mostrarFormulario" v-if="dat.id_pregunta == idEditar">
        <input type="text" v-model="textoPregunta">
        <button @click="guardar">Guardar</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, onMounted } from 'vue';
  import axios from 'axios';
  
 
  const mostrarFormulario = ref(false);
  const textoPregunta = ref('');
  const idEditar = ref(null);
  const data = ref("")

onMounted(() => {
        obtenerPreguntas();
      });
  
async function obtenerPreguntas(){
    try {
      let response = await axios.get('http://localhost:5000/preguntas')
      data.value = await response.data
      }catch(error){
            console.error(error);
          };
      };

function editar(idPreguntar){
  idEditar.value = idPreguntar
  console.log("estido", idPreguntar)
  mostrarFormulario.value = true 
}

async function guardar(){
    try {
      await axios.put(`http://localhost:5000/preguntas/${idEditar.value}`, {
          texto: textoPregunta.value,
        })
      location.reload()      
      }catch(error){
            console.error(error);
          };
      };

async function eliminar(id_pregunta) {
  try {
    await axios.delete(`http://localhost:5000/preguntas/${id_pregunta}`)
    location.reload()  
  } catch (error) {
    console.error(error);
  }
  
}
  
  </script>
  