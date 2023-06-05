<template>
    <div class="cards m-5">
        <button class="btn-card"><img :src="imagen" class="card-img-top" :alt="alt" /></button>
        <a :href="enlace" class="btn btn-primary">{{ Start }}</a>
       
    </div>
</template>

<script>
export default{
    props:{
        imagen: String,
        enlace: String,
        Start: String,
        
        alt: String
    },
    setup(props) {
        console.log("Ruta imagen", + props.titulo)
       return{

       };
    },
};

</script>

<style scoped>
  .cards{
  
    border-radius: 10%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    width: 25rem;
    /* height: 100vh; */
    /* border: 1px solid black; */
    margin-top: 1rem;
    margin-bottom: 6rem;

    
   
   background-image: url(../assets/img/fondoplanetas.jpg);
  }

  .card-img-top{ 

    border-radius: 10%;
   height: 15em; 
   width: 25em;
   
  
   
  }
  

  .btn{

    border-radius: 10%;
   height: 2em; 
   width: 6em;
  }
  .btn-card {
    
    border: none;
    background-image: url(../assets/img/fondoplanetas.jpg);
    
  }
  </style>