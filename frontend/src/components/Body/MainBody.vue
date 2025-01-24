<template>
    <div class="main">
        <FirstSection></FirstSection>
        <FourthSection></FourthSection>
        <ThirdSection></ThirdSection>
        <SecondSection></SecondSection>
    </div>
  </template>
  
  <script>
  import FirstSection from './FirstSection/FirstSection.vue'
  import SecondSection from './SecondSection/SecondSection.vue';
  import ThirdSection from './ThirdSection/ThirdSection.vue';
  import FourthSection from './FourthSection/FourthSection.vue';
  export default {
    name: 'MainBody',
    components: {
        FirstSection,
        FourthSection,
        ThirdSection,
        SecondSection
    }
  }
  </script>
  
  
  <style>
  .main{
    display: flex;
    flex-direction: column;
  }
  </style>
  