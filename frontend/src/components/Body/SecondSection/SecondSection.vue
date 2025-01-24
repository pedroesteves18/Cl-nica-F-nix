<template>
    <div class="SecondSection">
            <div class="linha">
                <IconMédico :image="drCleibe" nomeMédico="Dr.Cleibe Nicácio " especializaçãoMédico="Gastroenterologia e Videolaparoscopia"
                    :linkFace="facebookLink1"
                    :linkInsta="instaLink1"/>
                <IconMédico :image="drClenir" nomeMédico="Dra. Clenir Cioffi" especializaçãoMédico="Biomedicina estética"
                :linkFace="facebookLink2"
                :linkInsta="instaLink2"/>
                <IconMédico :image="drLucas" nomeMédico="Dr. Lucas Martins Massari " especializaçãoMédico="Cardiologia"/>
            </div>
            <div class="linha">
                <IconMédico :image="drPaulo" nomeMédico="Dr.Paulo Barbieri " especializaçãoMédico="Ortopedia"/>
                <IconMédico :image="drCleibe" nomeMédico="Dr.Cleibe Nicácio " especializaçãoMédico="Gastroenterologia e Videolaparoscopia"/>
                <IconMédico :image="drCleibe" nomeMédico="Dr.Cleibe Nicácio " especializaçãoMédico="Gastroenterologia e Videolaparoscopia"/>
            </div>
            <div class="linha">
                <IconMédico :image="drCleibe" nomeMédico="Dr.Cleibe Nicácio " especializaçãoMédico="Gastroenterologia e Videolaparoscopia"/>
                <IconMédico :image="drCleibe" nomeMédico="Dr.Cleibe Nicácio " especializaçãoMédico="Gastroenterologia e Videolaparoscopia"/>
                <IconMédico :image="drCleibe" nomeMédico="Dr.Cleibe Nicácio " especializaçãoMédico="Gastroenterologia e Videolaparoscopia"/>
            </div>
    </div>
  </template>
  
  <script>
  import IconMédico from './IconMédico.vue';
  import drCleibe from '../../../assets/drCleibe.png'
  import drClenir from '../../../assets/drClenir.png'
  import drLucas from '../../../assets/drLucas.png'
  import drPaulo from '../../../assets/drPaulo.png'
  export default {
    name: 'SecondSection',
    components:{
        IconMédico
    },
    data(){
        return {
            drCleibe,
            drClenir,
            drLucas,
            drPaulo,
            instaLink1: "https://www.instagram.com/drcleibenicacio.cirurgiao/",
            facebookLink1: "https://www.facebook.com/cleibe.nicacio.5?locale=pt_BR",
            instaLink2: "https://www.instagram.com/clenirbiomedestetica/",
            facebookLink2: "https://www.facebook.com/clenir.cioffi?locale=pt_BR",

        }
    }
  }
  </script>
  
  
  <style>
    .SecondSection{
        margin-top: -6%;
        margin-bottom: 10vw;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        margin-left: -4%;
    }

    .linha{
        margin-bottom: -10%;
        display: flex;
        justify-content: center;
        gap: 6%;
        width: 100%;
        height: auto;
    }

  </style>
  