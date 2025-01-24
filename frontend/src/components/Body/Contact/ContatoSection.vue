<template>
    <div class="ContatoSection">
        <img class="Agenda" src="../../../assets/Contato.png">
        <div class="AgendamentoSection">
            <div class="TextoContato"><strong>Acesse nosso Whatsapp</strong><br>e agende sua consulta de forma<br> <strong>fácil e rápida</strong></div>
            <i class="bi-whatsapp"></i> (16) 99340-0898<br>
            <i class="bi-telephone"></i> (16) 3382-2692<br>
            <div style="margin-left: 2.6vw"> (16) 3382-7872</div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContatoSection'
  }
  </script>
  
  
  <style>
    .ContatoSection{
        width: auto;
        display: flex;
        background: radial-gradient(circle at 5% 60%, #475D74 45%, transparent 0%);
        padding-bottom:3.7vw;
        font-family: Roboto, sans-serif;
        font-weight: 500;
    }

    .Agenda{
        height: auto;
        margin-left: 10vw;
        margin-top: 3.1vw;
        width: 26vw;
        filter: brightness(98%);
        border-radius: 2vw;
        box-shadow: 10px 10px 15px rgba(0.2, 0.2, 0.5, 0.2);
    }
    .AgendamentoSection{
        margin-left: 15vw;
        margin-top: 8vw;
        font-size: 2vw;
        color: #113157;
    }
  </style>
  