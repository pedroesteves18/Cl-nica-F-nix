<template>
    <div class="LogoSection">
        <img src="../../../assets/logo.png" class="logoFenix">
    </div>
  </template>
  
  <script>

  export default {
    name: 'LogoSection'
  }
  </script>
  
  
  <style>
    .LogoSection{
        height: auto;
        display: flex;
        margin-top: 3vw;
        margin-left: 8vw;
    }

    .logoFenix{
        height: auto;
        width: 20vw;
    }

    @media screen and (max-width: 768px) {

      .logoFenix{
          height: auto;
          width: 25vw;
          margin-top: 6vw;
      }
    }
  </style>
  