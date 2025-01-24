<template>
    <div>
      <MainHeader></MainHeader>
      <ContatoSection></ContatoSection>
      <FooterSection></FooterSection>
    </div>
  </template>
  
  <script>
  import MainHeader from '@/components/Header/MainHeader.vue'
  import ContatoSection from '@/components/Body/Contact/ContatoSection.vue';
  import FooterSection from '@/components/Body/FooterSection/FooterSection.vue';
  
  export default {
    name: 'HomePage',
    components: {
      MainHeader,
      ContatoSection,
      FooterSection
    },
    mounted(){
      document.title = 'Clínica Fênix';
    }
  }
  </script>