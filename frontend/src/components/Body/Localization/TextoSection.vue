<template>
    <div class="TextoSection">
        <div class="TextoLocalization2"><i class="iconGeo bi-geo-alt"></i><div>Avenida Santo Antônio, 175 - Centro, <br>
          Matão - SP, CEP 15990-110.</div>
        </div>
        <div class="TextoLocalization">
          <strong>Encontre-nos com facilidade:</strong> 
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TextoSection',
  }
  </script>
  
  
  <style>
    .TextoSection{
        height: auto;
        width: auto;
        margin-left: 2vw;
        margin-top: 4vw;
        color: #113157;
        display: flex;
        flex-direction: column-reverse;
    }
    .TextoLocalization{
        font-size: 1.5vw;
    }
    .TextoLocalization2{
      display: flex;
      font-size: 1.2vw;
      margin-left: 2vw;
    }
    .iconGeo{
      font-size: 2.4vw;
      margin-right: 0.4vw;
    }

    @media screen and (max-width: 768px){
      .TextoSection{
        height: auto;
        width: auto;
        margin-left: 9vw;
        margin-top: 4vw;
        margin-bottom: 4vw;
        color: #113157;
        display: flex;
        flex-direction: column-reverse;
      }
      .TextoLocalization{
          font-size: 4.2vw;
      }
      .TextoLocalization2{
        display: flex;
        font-size: 3vw;
        margin-left: 6vw;
      }
      .iconGeo{
        font-size: 6vw;
        margin-right: 0.4vw;
      }
    }

  </style>
  