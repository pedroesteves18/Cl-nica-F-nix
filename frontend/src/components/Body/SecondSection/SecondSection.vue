<template>
    <div class="SecondSection">
            <div class="linha">
                <IconMédico :image="drCleibe" nomeMédico="Dr.Cleibe Nicácio " especializaçãoMédico="Gastroenterologia e Videolaparoscopia"
                    :linkFace="facebookLink1"
                    :linkInsta="instaLink1"/>
                <IconMédico :image="drClenir" nomeMédico="Dra.Clenir Cioffi " especializaçãoMédico="Biomedicina estética"
                :linkFace="facebookLink2"
                :linkInsta="instaLink2"/>
                <IconMédico :image="drLucas" nomeMédico="Dr.Lucas Martins " especializaçãoMédico="Cardiologia"/>
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

    <div class="SecondSectionCelular" style="display: none;">
            <div class="linha">
                <IconMédico :image="drCleibe" nomeMédico="Dr.Cleibe Nicácio " especializaçãoMédico="Gastroenterologia e Videolaparoscopia"
                    :linkFace="facebookLink1"
                    :linkInsta="instaLink1"/>
                <IconMédico :image="drClenir" nomeMédico="Dra.Clenir Cioffi" especializaçãoMédico="Biomedicina estética"
                    :linkFace="facebookLink2"
                    :linkInsta="instaLink2"/>
            </div>
            <div class="linha">
                <IconMédico :image="drLucas" nomeMédico="Dr.Lucas Martins " especializaçãoMédico="Cardiologia"/> 
                <IconMédico :image="drPaulo" nomeMédico="Dr.Paulo Barbieri " especializaçãoMédico="Ortopedia"/>
            </div>
            <div class="linha">
                <IconMédico :image="drCleibe" nomeMédico="Dr.Cleibe Nicácio " especializaçãoMédico="Gastroenterologia e Videolaparoscopia"/>
                <IconMédico :image="drCleibe" nomeMédico="Dr.Cleibe Nicácio " especializaçãoMédico="Gastroenterologia e Videolaparoscopia"/>
            </div>
            <div class="linha">
                <IconMédico :image="drCleibe" nomeMédico="Dr.Cleibe Nicácio " especializaçãoMédico="Gastroenterologia e Videolaparoscopia"/>
                <IconMédico :image="drCleibe" nomeMédico="Dr.Cleibe Nicácio " especializaçãoMédico="Gastroenterologia e Videolaparoscopia"/>
            </div>
            <div class="linha">
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
        margin-top: -6vw;
        margin-bottom: 10vw;
        width: 100vw;
        height: auto;
        display: flex;
        flex-direction: column;
        margin-left: -4vw;
    }

    .linha{
        margin-bottom: -8vw;
        display: flex;
        justify-content: center;
        gap: 6vw;
    }

    @media (max-width: 768px){
        .SecondSection{
            display: none;
        }
        .SecondSectionCelular{
            padding-bottom: 15vw;
            margin-top: -6vw;
            display: flex !important;
            flex-direction: column;
            margin-left: -2vw;
        }
    }
  </style>
  