<template>
    <div class="SecondSection">
            <div class="linha">
                <IconMédico :image="drCleibe" nomeMédico="Dr.Cleibe Nicácio " especializaçãoMédico="Gastroenterologista e Videolaparoscópico "
                    :linkFace="facebookLink1"
                    :linkInsta="instaLink1"/>
                <IconMédico :image="drClenir" nomeMédico="Dra.Clenir Cioffi " especializaçãoMédico="Biomédica esteta"
                :linkFace="facebookLink2"
                :linkInsta="instaLink2"/>
                <IconMédico :image="drLucas" nomeMédico="Dr.Lucas Martins " especializaçãoMédico="Cardiologista"/>
            </div>
            <div class="linha">
                <IconMédico :image="drPaulo" nomeMédico="Dr.Paulo Barbieri " especializaçãoMédico="Ortopedista"/>
                <IconMédico :image="drAndre" nomeMédico="Dr.André Alves " especializaçãoMédico="Infectologista"
                :linkInsta="instaLink4"/>
                <IconMédico :image="draJuliana" nomeMédico="Dra.Juliana Piacente " especializaçãoMédico="Dermatologista, Tricologista e Implante Capilar"
                :linkInsta="instaLink3"/>
            </div>
            <div class="linha">
                <IconMédico :image="drVitor" nomeMédico="Dr.Vitor Pinho " especializaçãoMédico="Neurocirurgião e Médico de Coluna"
                :linkFace="facebookLink3"
                :linkInsta="instaLink5"/>
                <IconMédico :image="drGuilherme" nomeMédico="Dr.Guilherme Amorim " especializaçãoMédico="Gastroenterologista e Clínico Geral"/>
                <IconMédico :image="draFlavia" nomeMédico="Dra.Flávia Calijuri " especializaçãoMédico="Nutricionista"
                :linkInsta="instaLink6"/>
            </div>
    </div>

    <div class="SecondSectionCelular" style="display: none;">
            <div class="linha">
                <IconMédico :image="drCleibe" nomeMédico="Dr.Cleibe Nicácio " especializaçãoMédico="Gastroenterologista e Videolaparoscópico "
                    :linkFace="facebookLink1"
                    :linkInsta="instaLink1"/>
                <IconMédico :image="drClenir" nomeMédico="Dra.Clenir Cioffi " especializaçãoMédico="Biomédica esteta"
                :linkFace="facebookLink2"
                :linkInsta="instaLink2"/>
            </div>
            <div class="linha">
                <IconMédico :image="drLucas" nomeMédico="Dr.Lucas Martins " especializaçãoMédico="Cardiologista"/>
                <IconMédico :image="drPaulo" nomeMédico="Dr.Paulo Barbieri " especializaçãoMédico="Ortopedista"/>

            </div>
            <div class="linha">
                <IconMédico :image="draJuliana" nomeMédico="Dra.Juliana Piacente " especializaçãoMédico="Dermatologista,Tricologista e Implante Capilar"
                :linkInsta="instaLink3"/>
                <IconMédico :image="drVitor" nomeMédico="Dr.Vitor Pinho " especializaçãoMédico="Neurocirurgião e Médico de Coluna"
                :linkFace="facebookLink3"
                :linkInsta="instaLink5"/>
            </div>
            <div class="linha">
                <IconMédico :image="drGuilherme" nomeMédico="Dr.Guilherme Amorim " especializaçãoMédico="Gastroenterologista &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; e Clínico Geral"/>
                <IconMédico :image="draFlavia" nomeMédico="Dra.Flávia Calijuri " especializaçãoMédico="Nutricionista"
                :linkInsta="instaLink6"/>
            </div>
            <div class="linha">
                <IconMédico :image="drAndre" nomeMédico="Dr.André Alves " especializaçãoMédico="Infectologista"
                :linkInsta="instaLink4"/>
            </div>
    </div>
  </template>
  
  <script>
  import IconMédico from './IconMédico.vue';
  import drCleibe from '../../../assets/drCleibe.png'
  import drClenir from '../../../assets/drClenir.png'
  import drLucas from '../../../assets/drLucas.png'
  import drPaulo from '../../../assets/drPaulo.png'
  import drAndre from '../../../assets/drAndre.png'
  import draJuliana from '../../../assets/draJuliana.png'
  import drVitor from '../../../assets/drVitor.png'
  import drGuilherme from '../../../assets/drGuilherme.png'
  import draFlavia from '../../../assets/draFlavia.png'
  export default {
    name: 'SecondSection',
    components:{
        IconMédico
    },
    data(){
        return {
            drCleibe,
            draJuliana,
            drGuilherme,
            draFlavia,
            drClenir,
            drVitor,
            drLucas,
            drPaulo,
            drAndre,
            instaLink1: "https://www.instagram.com/drcleibenicacio.cirurgiao/",
            facebookLink1: "https://www.facebook.com/cleibe.nicacio.5?locale=pt_BR",
            instaLink2: "https://www.instagram.com/clenirbiomedestetica/",
            facebookLink2: "https://www.facebook.com/clenir.cioffi?locale=pt_BR",
            instaLink3: "https://www.instagram.com/drajulianapiacente/",
            instaLink4: "https://www.instagram.com/infecto.andrealves/",
            instaLink5: "https://www.instagram.com/dr.vitorpinho/",
            facebookLink3: "https://www.facebook.com/drvitorpinho",
            instaLink6: "https://www.instagram.com/flaviacalijurinutricionista/"

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
            height: auto;
            width: 100vw;
            display: flex !important;
            flex-direction: column;
            margin-left: -15vw;
        }
        .linha{
            gap: 30vw;
        }
    }
  </style>
  