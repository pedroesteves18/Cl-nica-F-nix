<template>
    <div class="linksHeader">
        <nav>
          <router-link to="/">
            <p class="cel">Início</p>
          </router-link>
        </nav>

        <nav>
          <router-link to="/Localização">
            <p>Localização</p>
          </router-link>
        </nav>
        <nav>
          <router-link to="/Contato">
            <p>Contato</p>
          </router-link>
        </nav>

        <div class="barra"></div>
        <div class="icons">
          <a href="https://www.instagram.com/drcleibenicacio.cirurgiao/"><i class="instagram bi-instagram"></i></a>
          <a href="https://www.facebook.com/clinicafenixmatao?locale=pt_BR"><i class="facebook bi-facebook"></i></a>
          <a href="https://api.whatsapp.com/send?phone=5516993400898&text=Olá%2C%20eu%20gostaria%20de%20falar%20com%20uma%20Secretária."><i class="facebook bi-whatsapp"></i></a>
        </div>
        
    </div>
  </template>
  
  <script>

  export default {
    name: 'LinksHeader'
  }
  </script>
    
  
  <style>
    a{
      text-decoration: none;
      color: inherit;
    }
    .linksHeader{     
        padding-right: 3vw;
        padding-left: 8vw;
        align-items: flex-end;
        display: flex;
        font-size: 1.6vw;
        font-weight: bolder;
        color: white;
        gap: 1vw;
        font-family: Roboto, sans-serif;
    }

    .barra{
      height: 9vh;
      padding: 0.01vw;
      background-color: white;
    }

    .icons{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1vw;
      margin-bottom: 1.2vw;
      font-size: 2.3vw;
    }

    @media screen and (max-width: 768px) {
        .linksHeader{
          margin-right: 3vw;
          padding-left: 3vw;
          font-size: 3.3vw;
          gap: 2vw;
          margin-bottom: 2vw;
        }
        .barra {
          height: 12vw;
          padding: 0.2vw;
        }
        .icons{
          gap: 4vw;
          margin-bottom: 1.2vw;
          font-size: 7.3vw;
        }
        .cel{
          display: none;
        }
    }

  </style>
  