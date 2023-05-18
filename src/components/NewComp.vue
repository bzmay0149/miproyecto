<template>
    <div class="cards" style="18rem">
        <img :src="imagen" class="card-img-top" :alt="alt" />
        <a :href="enlace" class="btn btn-primary">{{ Start }}</a>
        <p>{{ titulo }}</p>
    </div>
</template>

<script>
export default{
    props:{
        imagen: String,
        enlace: String,
        Start: String,
        titulo: String,
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
  .cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    width: 20rem;
    /* height: 100vh; */
    /* border: 1px solid black; */
    margin-top: 1rem;
    margin-bottom: 6rem;
    padding: 5rem;
    background: #ffefba; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #ffffff,
      #ffefba
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #ffffff,
      #ffefba
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .card-img-top{
    width: 20rem;
    height: 20rem;
    border: 1px solid gray;
  }
  </style>