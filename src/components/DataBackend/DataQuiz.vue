<!-- Este componente es para visualizar todos los datos de las preguntas, eliminar y modificar-->
<template>
<h1>Quiz</h1>
<img v-if="isError" src="src/assets/img/error.png" alt="error">
<img v-if="isLoading" src="src/assets/img/spin.gif" alt="loading">
{{  data }}
<div v-for="dta in data" :key="dta.id">
     <p>Pregunta:  {{ dta.pregunta}}</p>
     <p>Respuesta1:  {{ dta.respuesta1}}</p>
     <p>Respuesta2:  {{ dta.respuesta2}}</p>
     <p>Respuesta3:  {{ dta.respuesta3}}</p>
     <p>Acertadas:  {{ dta.acertada}}</p>
    <button @click="deletePregunta(dta.id)">Eliminar</button>
    <button @click="editPregun(dta.id)">Editar</button>
</div>
<div v-show="showEdit">
    <form @submit.prevent>
        <div>
            <label for="pregunta">PREGUNTA: </label>
            <input type="text" id="pregunta" v-model="editPregunta">
        </div>
        <div>
            <label for="respuesta2">RESPUESTA1: </label>
            <input type="text" id="respuesta1" v-model="editRespuesta1">
        </div>
        <div>
            <label for="respuesta2">RESPUESTA2: </label>
            <input type="text" id="respuesta2" v-model="editRespuesta2">
        </div>
        <div>
            <label for="respuesta3">RESPUESTA3: </label>
            <input type="text" id="respuesta3" v-model="editRespuesta3">
        </div>
        <div>
            <label for="acertada">ACERTADA:</label>
            <input type="text" id="acertada" v-model="editAcertada">
        </div>        
    </form>
    <button @click="enviarPregunta">Enviar</button>
</div>

</template>

<script setup>
import {ref, onMounted} from "vue"
import axios from "axios"

// let pregunta = ref("")
// let image = ref("")
// let respuesta1 = ref("")
// let respuesta2 = ref("")
// let respuesta3 = ref("")
// let acertada = ref("")
let isError = ref(false)
let isLoading = ref(false)
let data = ref("")
let showEdit = ref(false)

let editPregunta = ref("")
let editRespuesta1 = ref("")
let editRespuesta2 = ref("")
let editRespuesta3 = ref("")
let editAcertada = ref("")


// onMounted es la función que renderiza la paǵina cuando se llama.

onMounted(() => {
    getPreguntas()
})

// Conseguir los datos de todas las preguntas

async function getPreguntas(){
    const url = 'http://localhost:5000/preguntas';
    isLoading.value = true 
    try{
        let response = await axios.get(url)
        data.value = await response.data
        console.log("***** data", data.value)
        console.log("***** response", response)
        
    }catch(error){
        isError.value = true
        console.log(error)
    }
    isLoading.value = false
}

// Modificar
let getId = ref("")

function editPregun(id){
    getId.value = id 
    console.log("getID", getId.value)
    showEdit.value = true
}

async function enviarPregunta(){
    try{
        await axios.put(`http://localhost:5000/preguntas/${getId.value}`, {
            pregunta: editPregunta.value,
            respuesta1: editRespuesta1.value,
            respuesta2: editRespuesta2.value,
            respuesta3: editRespuesta3.value,
            acertada: editAcertada.value
        })
        location.reload() 
        
    }catch(error){
        console.log(error)
        isError = true
    }
}

// Eliminar

async function deletePregunta(id){
try{
    await axios.delete(`http://localhost:5000/preguntas/${id}`)
    location.reload()
}catch(error){
    isError = true
    console.log(error)
}
}


</script>


<style scoped>

</style>