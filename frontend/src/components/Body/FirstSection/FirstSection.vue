<template>
    <div class="FirstSection">
        <div class="seçãoImagem">
            <img src="../../../assets/clinicaFenix.png" class="imagem">
        </div>
    </div>

  </template>
  
  <script>

  export default {
    name: 'FirstSection'
  }
  </script>
  
  
  <style>

    .FirstSection{
        font-family: Roboto, sans-serif;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    }

    .imagem{
        width: 67vw;
        border-radius: 1vw;
        box-shadow: 1vw 1vw 1vw rgba(0.2, 0.2, 0.5, 0.2);

    }
    .seçãoImagem{
        padding-top: 2vw;
        padding-right: 4vw;
        padding-bottom: 1vw;
        background: radial-gradient(circle at right, #CF1F29 85%, transparent 50%);
    }
    
    @media screen and (max-width: 768px) {
            .FirstSection{
            font-family: Roboto, sans-serif;
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
        }

        .imagem{
            width: 90vw;
            border-radius: 1vw;
            box-shadow: 2vw 2vw 2vw rgba(0.2, 0.2, 0.5, 0.2);

        }
        .seçãoImagem{
            padding-top: 4vw;
            padding-right: 5vw;
            padding-bottom: 1vw;
            background: radial-gradient(circle at right, #CF1F29 85%, transparent 50%);
        }
        }
  </style>
  