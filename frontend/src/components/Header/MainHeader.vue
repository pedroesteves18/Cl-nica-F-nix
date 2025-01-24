<template>
    <div class="header">
        <LogoHeader></LogoHeader>
        <LinksHeader></LinksHeader>
    </div>
  </template>
  
  <script>
  import LogoHeader from './LogoHeader.vue'
  import LinksHeader from './LinksHeader.vue'
  export default {
    name: 'MainHeader',
    components: {
        LogoHeader,
        LinksHeader
    }
  }
  </script>
  
  
  <style>
    .header {
        box-sizing: border-box;
        background-color: #113157;
        display: flex;
        justify-content: space-between;
        padding-bottom: 0.5vh;
        padding-top: 0.5vh;
    }

    @media screen and (max-width: 768px) {
        .header{
          justify-content: space-between;
          padding-bottom: 0.5vh;
          padding-top: 0.5vh;
        }
    }

  </style>
  