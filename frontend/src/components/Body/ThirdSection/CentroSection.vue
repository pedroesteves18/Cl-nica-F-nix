<template>
    <div class="centro">
                <img :src="image" class="ImagemExame">
            <div class="iconesEtexto">
                <EmojisSection></EmojisSection>
            </div>
    </div>
  </template>
  
  <script>
    import EmojisSection from './EmojisSection.vue';
  export default {
    name: 'CentroSection',
    components:{
        EmojisSection
    },
    props:{
        image:{
            type: String,
            required: true
        }
    }
  }
  </script>
  
  
  <style>


    .centro{
        color: white;
        font-family: Georgia, serif;
        padding-top: 3%;
        display: flex;
        width: 100%;
        padding-bottom: 3%;

    }
    .ImagemExame{
        width:40%;
        height: auto;
        box-shadow: 10px 10px 15px rgba(0.2, 0.2, 0.5, 0.2);
        margin-left: 3%;
    }

    .iconesEtexto{
        width: 60%;
        height: auto;
        display: flex;
        align-items: center;
        padding-left:5%;
        margin-right: 3%;
    }


    .icones{
        margin-top: 10%;
        font-size: 2vw;
        display: flex;
        flex-direction: row;
    }

    @media (max-width: 768px) {
        .centro{
            color: white;
            font-family: Georgia, serif;
            padding-top: 5vw;
            display: flex;
            flex-direction: column;
            padding-bottom: 2vw;

        }
        .ImagemExame{
            width:86vw;
            height: auto;
            border-radius: 3vw;
            box-shadow: 1vw 1vw 1vw rgba(0.2, 0.2, 0.5, 0.2);
            margin-left: 6vw;
        }

        .iconesEtexto{
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 5vw;
        }
    }
  </style>
  