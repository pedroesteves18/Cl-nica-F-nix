<template>
    <div class="FooterSection">
        <div class="logoFooterSection">
            <img src="../../../assets/logo.png" class="logoFooter">
        </div>
            <div class="Contato">
            <div><i class="FooterIcons bi-whatsapp"></i>  (16) 99340-0898</div>
            <div><i class="FooterIcons bi-telephone"></i> (16) 3382-2692</div>
            <div style="margin-left: 2.1vw; font-size: 1.2vw"> (16)3382-7872</div>
        </div>
        <div>
            <div class="EnderecoFooter">
                <div><i class="FooterIcons bi-geo-alt-fill"></i> Av. Santo Antônio, 175 - Centro,<br>   Matão - SP, 15990-110</div>
            </div>
        </div>
        <div>
            <div class="LinksSection">
                <div><i class="FooterIcons bi-instagram"></i> @drcleibenicacio.cirurgiao</div>
                <div><i class="FooterIcons bi-facebook"></i> Clinica Fenix </div>
                <div><i class="FooterIcons bi-envelope-at"></i> clinicafenixcontato@gmail.com</div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FooterSection'
  }
  </script>
  
  
  <style>
    .FooterSection{
        background-color: #113157;
        border-top: solid 0.35vw #CF1F29;
        width: auto;    
        height: auto;
        display: flex;
    }
    .LinksSection{
        margin-top: 3.4vw;
        margin-left: 10vw;
        color: white;
        font-size: 1vw;
    }

    .Contato{
        margin-top: 3.4vw;
        margin-left: 10vw;
        width: 14vw;
        color: white;
        font-size: 1.2vw;
    }

    .EnderecoFooter{
        margin-top: 3.4vw;
        margin-left: 10vw;
        color: white;
        font-size: 1.0vw;
    }

    .FooterIcons{
        font-size: 1.7vw;
        color: white;
        margin-right: 0.2vw;
    }

    .logoFooterSection{
        margin-left: 3vw;
        margin-top: 2vw;
        margin-bottom: 1vw;
        width: auto;
        height: auto;
        display: flex;
    }
    .logoFooter{
        width: 13vw;
        height: auto;
        filter: invert(100%) brightness(500%);
    }

  </style>
  