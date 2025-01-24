<template>
    <div class="FourthSection">
        <LogoSection></LogoSection>
        <TextoFourthSection></TextoFourthSection>
    </div>
  </template>
  
  <script>
    import LogoSection from './LogoSection.vue';
    import TextoFourthSection from './TextoFourthSection.vue';
  export default {
    name: 'FourthSection',
    components:{
        LogoSection,
        TextoFourthSection
    }
  }
  </script>
  
  
  <style>
    .FourthSection{
        height: auto;
        width: auto;
        display: flex;
    }


  </style>
  