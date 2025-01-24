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
        width: 99.1vw;
        height: auto;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    }

    .caixaTexto{
        padding-top: 3%;
        margin-left: 9%;
        width: 35%;
        word-wrap: break-word;
        overflow-wrap: break-word;
    }


    .imagem{
        width: 100%;
        border-radius: 20px;
        box-shadow: 10px 10px 15px rgba(0.2, 0.2, 0.5, 0.2);

    }
    .seçãoImagem{
        width: 65%;
        padding-top: 3%;
        padding-right: 5%;
        padding-left: 2%; 
        padding-bottom: 1%;
        background: radial-gradient(circle at right, #CF1F29 85%, transparent 50%);
    }

  </style>
  