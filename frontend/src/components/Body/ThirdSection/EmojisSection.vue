<template>
    <div class="TotalEmotes">
        <div class="linhaEmotes">
            <div class="conjunto">
                <div class="textoEmote">Clínica de alta qualidade</div>
                <i class="bi-hospital-fill item1"></i>
            </div>
            <div class="conjunto">
                <div class="textoEmote">Diversos <br>convênios</div>
                <i class="bi-file-medical item1"></i>
            </div>
            <div class="conjunto">
                <div class="textoEmote">Exames</div>
                <i class="bi-clipboard2-pulse item1"></i>
            </div>
            <div class="conjunto">
                <div class="textoEmote">Multiplas Especialidades</div>
                <i class="bi-person-lines-fill item1"></i>
            </div>
            <div class="conjunto">
                <div class="textoEmote">Acessibilidade</div>
                <i class="bi-person-wheelchair item1"></i>
            </div>
        </div>

        <div class="linhaEmotes">
            <div class="conjunto">
                <div class="textoEmote">Agendamento <br>Online</div>
                <i class="bi-phone item1"></i>
            </div>
            <div class="conjunto">
                <div class="textoEmote">Fácil <br>Localização</div>
                <i class="bi-geo-alt item1"></i>
            </div>
            <div class="conjunto">
                <div class="textoEmote">Atendimentos em diversos dias</div>
                <i class="bi-calendar-check item1"></i>
            </div>
            <div class="conjunto">
                <div class="textoEmote">Garantia de qualidade</div>
                <i class="bi-check-square item1"></i>
            </div>
            <div class="conjunto">
                <div class="textoEmote">Atendimento humanizado</div>
                <i class="bi-person-arms-up item1"></i>
            </div>
        </div>
    </div>
  </template>
  
  <script>

  export default {
    name: 'EmojisSection'
  }

  </script>
  
  
  <style>
    .TotalEmotes{
        margin-top: 1vw;
        display: flex;
        flex-direction: column;
        gap: 0.8vw;
    }

    .linhaEmotes{
        display: flex;
        flex-direction:row;
        font-size: 1vw;
        color: white;
        gap: 0.5vw;
    }
    .conjunto{
        display: flex;
        width: 8.5vw;
        height: 8.5vw;
        flex-direction: column-reverse;
        border: solid 0.4vw white;
        border-radius: 20%;
        align-items: center;
        justify-content: center;
    }
    .textoEmote{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .item1{
        font-size: 4vw;
    }

    @media (max-width: 768px){
        .TotalEmotes{
        margin-top: 3vw;
        display: flex;
        flex-direction: column;
        gap: 1.5vw;
    }

    .linhaEmotes{
        display: flex;
        flex-direction:row;
        font-size: 2vw;
        font-weight: 400;
        color: white;
        gap: 1.5vw;
    }
    .conjunto{
        display: flex;
        width: 15vw;
        height: 15vw;
        flex-direction: column-reverse;
        border: solid 0.4vw white;
        padding: 0.2vw;
        border-radius: 2vw;
        align-items: center;
        justify-content: center;
    }
    .textoEmote{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .item1{
        font-size: 7vw;
        }
    }

  </style>
  