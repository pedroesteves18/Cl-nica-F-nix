<template>
    <div class="MapSection">
        <img src="../../../assets/Maps.png" class="Mapa" @click="GoToMaps">
        <TextoSection></TextoSection>
    </div>
  </template>
  
  <script>
  import TextoSection from './TextoSection.vue';
  export default {
    name: 'MapSection',
    components:{
        TextoSection
    },
    methods:{
        GoToMaps(){
            window.open('https://www.google.com/maps/place/Clínica+Fênix/@-21.6043266,-48.3726103,18.75z/data=!4m6!3m5!1s0x94b91f007c93bd4f:0x53c17cb3f5a5ee0a!8m2!3d-21.6041147!4d-48.3726408!16s%2Fg%2F11vsnzsym6?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D')
        }
    }
  }
  </script>
  
  
  <style>
    .MapSection{
        width: auto;
        height: auto;
        display: flex;
        background: radial-gradient(circle at 5% 60%, #CF1F29 45%, transparent 0%);
        padding-bottom:3.2vw;
        font-family: Roboto, sans-serif;
    }

    .Mapa{
        box-shadow: 10px 10px 15px rgba(0.2, 0.2, 0.5, 0.2);
        height: auto;
        margin-left: 4vw;
        margin-top: 3vw;
        width: 50vw;
        border: solid 0.3vw #113157;
        border-radius: 2vw;
        cursor: pointer;
    }
    .Mapa:hover{
        filter: brightness(92%)
    }


  </style>
  