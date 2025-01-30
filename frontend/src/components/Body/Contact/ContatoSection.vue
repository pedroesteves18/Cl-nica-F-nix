<template>
    <div class="ContatoSection">
        <img class="Agenda" src="../../../assets/Contato.png">
        <div class="AgendamentoSection">
            <div class="TextoContato"><strong>Acesse nosso Whatsapp</strong><br>clicando no<strong> ícone </strong>e agende <br>sua consulta de forma<br> <strong>fácil e rápida</strong></div>
            <a href="https://api.whatsapp.com/send?phone=5516993400898&text=Olá%2C%20eu%20gostaria%20de%20falar%20com%20uma%20Secretária."><i class="bi-whatsapp"></i></a> (16) 99340-0898<br>
            <i class="bi-telephone"></i> (16) 3382-2692<br>
            <div style="margin-left: 2.6vw"> (16) 3382-7872</div>
        </div>
    </div>

    <div class="ContatoSectionCelular" style="display: none;">
        <div class="AgendaBackground">
            <img class="Agenda" src="../../../assets/Contato.png">
        </div>
        <div class="AgendamentoSection">
            <div class="TextoContato"><strong>Acesse nosso Whatsapp</strong><br>e agende sua consulta de forma<br> <strong>fácil e rápida</strong> clicando no <strong>ícone</strong></div>
            <i class="bi-whatsapp"></i> (16) 99340-0898<br>
            <i class="bi-telephone"></i> (16) 3382-2692<br>
            <div style="margin-left: 5.6vw"> (16) 3382-7872</div>
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

    @media screen and (max-width: 768px){
        .ContatoSection{
        width: auto;
        display: none;
        flex-direction: column;
        background: radial-gradient(circle at 5% 60%, #475D74 45%, transparent 0%);
        padding-bottom:3.7vw;
        font-family: Roboto, sans-serif;
        font-weight: 500;
        }

        .ContatoSectionCelular{
            display: flex !important;
            flex-direction: column;
            padding-bottom:3.7vw;
            font-family: Roboto, sans-serif;
            font-weight: 500;
        }

        .Agenda{
            height: auto;
            margin-left: 10vw;
            margin-top: 3.1vw;
            width: 50vw;
            filter: brightness(98%);
            border-radius: 2vw;
            box-shadow: 10px 10px 15px rgba(0.2, 0.2, 0.5, 0.2);
        }
        .AgendaBackground{
            background: radial-gradient(circle at 5% 60%, #475D74 45%, transparent 0%);
            width: 170vw;
            padding-bottom: 8vw;
        }
        .AgendamentoSection{
            margin-left: 10vw;
            margin-top: 12vw;
            font-size: 5.3vw;
            color: #113157;
        }
        .TextoContato{
            padding-bottom:2vw;
        }
    }
  </style>
  