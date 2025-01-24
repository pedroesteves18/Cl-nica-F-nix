<template>
    <div class="cardMédico">

        <div class="containerFoto">
            <img :src="image" class="fotoMédico">
        </div>
        <div class="IconMédico">
            <div class="nomeMédico">{{ nomeMédico }}</div> 
            <div class="especialização">{{ especializaçãoMédico }}</div>
            <div class="linksMedico">
                <a :href="linkFace"><i class="linkFace bi-facebook"></i></a>
                <a :href="linkInsta"><i class="linkInsta bi-instagram"></i></a>
            </div>
        </div>
    </div>
  </template>
  
  <script>

  export default {
    name: 'IconMédico',
    props:{
        image:{
            type: String,
            required: true
        },
        nomeMédico:{
            type: String,
            required: true
        },
        especializaçãoMédico:{
            type: String,
            required: true
        },
        linkFace: {
            type: String,
            required: true
        },
        linkInsta: {
            type: String,
            required: true
        }
    }
  }
  </script>
  
  
  <style>
    .linksMedico {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        margin-right: 1vw;
    }
    .linkInsta {
        color: #113157;
        font-size: 2vw;
        margin-left: 10%;
    }
    .linkFace{
        color: #113157;
        font-size: 2vw;
    }

    .especialização{
        padding-top: 5%;
        margin-left: 45%;
        height: 5vw;
    }


    .nomeMédico{
        padding-top: 5%;
        margin-left: 45%;
    }

    .cardMédico{
        position: relative;
        width: 21vw;
        font-family: "Brush Script MT", cursive;
        color: #113157;
        font-size: 1vw;
    }

    .IconMédico{
        margin-left: 25%;
        width: 100%;
        height: 11vw;
        border-radius: 10%;
        box-shadow: 1px 7px 15px 2px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
    }

    .containerFoto{
        position: relative;
        top: 37%;
        left: 7%;
        width: 60%;
        height: 40%;
        border-radius: 10%;
        overflow: hidden;
        border: solid 0.2vw #113157;
        
    }
    .fotoMédico{
        width: 100%;
        height: auto;
    }

  </style>
  