<template>
    <div class="cardMédico">

        <div class="containerFoto">
            <img :src="image" class="fotoMédico">
        </div>
        <div class="IconMédico">
            <div class="nomeMédico">{{ nomeMédico }}</div> 
            <div class="especialização">{{ especializaçãoMédico }}</div>
            <div class="linksMedico">
                <a v-if="linkFace" :href="linkFace"><i class="linkFace bi-facebook"></i></a>

                <a v-if="linkInsta" :href="linkInsta"><i class="linkInsta bi-instagram"></i></a>
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
        margin-left: 0.5vw;
    }
    .linkFace{
        color: #113157;
        font-size: 2vw;
    }

    .especialização{
        height: 5vw;
        width: 10vw;
        margin-right: 2vw;
    }


    .nomeMédico{
        padding-top: 1vw;
        margin-right: 4vw;
        min-width: 8vw;
    }

    .cardMédico{
        justify-content: space-between;
        position: relative;
        width: 21vw;
        font-family: "Brush Script MT", cursive;
        color: #113157;
        font-size: 1vw;
    }

    .IconMédico{
        margin-left: 5vw;
        min-width: 22vw;
        height: 11vw;
        border-radius: 2vw;
        box-shadow: 1px 7px 15px 2px rgba(0, 0, 0, 0.5);
        display: flex;
        gap: 1vw;
        align-items: flex-end;
        justify-content: center;
        flex-direction: column;
    }

    .containerFoto{
        position: relative;
        top: 9vw;
        left: 1.7vw;
        width: 12.5vw;
        height: 10vw;
        border-radius: 1vw;
        overflow: hidden;
        border: solid 0.2vw #113157;
        
    }
    .fotoMédico{
        width: 13vw;
        height: auto;
    }



    @media (max-width: 768px){
        .linksMedico {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }
    .linkInsta {
        color: #113157;
        font-size: 5vw;
    }
    .linkFace{
        color: #113157;
        font-size: 5vw;
    }

    .especialização{
        display: flex;
        font-size: 2.6vw;
        margin-right: 4vw;
        min-height: 6vw;
        width: 19vw;
        margin-bottom: 3vw;
    }


    .nomeMédico{
        font-size: 3vw;
        padding-top: 1vw;
    }

    .cardMédico{
        position: relative;
        width: auto;
        color: #113157;
    }

    .IconMédico{
        margin-left: 10vw;
        width: 38vw;
        height: auto;
        border-radius: 3vw;
        box-shadow: 1px 7px 15px 2px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .containerFoto{
        position: relative;
        top: 12vw;
        width: 22vw;
        height: 17vw;
        border-radius: 3vw;
        overflow: hidden;
        border: solid 0.2vw #113157;
        
    }
    .fotoMédico{
        width: 22vw;
        height: auto;
    }
    }

  </style>
  