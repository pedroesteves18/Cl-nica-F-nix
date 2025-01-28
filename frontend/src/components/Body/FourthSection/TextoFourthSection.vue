<template>
    <div class="TextoFourthSection">
        <div class="TituloFourth">Clínica Fênix</div>
        <br>
        <div class="textoFourth">A Clínica Fênix tem como missão principal, tratar sua saúde com humanidade e respeito.</div>
        <div class="textoFourth">Disponibilizamos aos nossos pacientes uma equipe de profissionais altamente qualificados e uma estrutura moderna e de excelência, garantindo atendimento completo para consultas, exames e cuidado com a saúde.</div>
        <div class="textoFourth">Nosso compromisso é proporcionar uma experiência humanizada, unindo tecnologia, conforto e dedicação em cada etapa do atendimento, sempre priorizando o bem-estar e a qualidade de vida de nossos pacientes. </div>
    </div>
  </template>
  
  <script>

  export default {
    name: 'TextoFourthSection'
  }
  </script>
  
  
  <style>
    .TextoFourthSection{
        height: auto;
        display: flex;
        margin-left: 5vw;
        margin-top: 3vw;
        margin-right: 5vw;
        font-size: 2vw;
        flex-direction: column;
        color: #113157;
        font-family: Roboto, sans-serif;
        
    }
    .TituloFourth{
        font-weight: bold;
        font-size: 2.3vw;
    }

    .textoFourth{
      font-size: 1.7vw;
    }
    @media screen and (max-width: 768px) {
        .TextoFourthSection{
          height: auto;
          display: flex;
          margin-left: 5vw;
          margin-top: 3vw;
          margin-right: 4vw;
          flex-direction: column;
          color: #113157;
          font-family: Roboto, sans-serif;
          
      }
      .TituloFourth{
          font-weight: bold;
          font-size: 4vw;
      }

      .textoFourth{
        font-size: 2.1vw;
      }

    }

  </style>
  