<template>
    <div>
      <MainHeader></MainHeader>
      <MainBody></MainBody>
      <FooterSection></FooterSection>
    </div>
  </template>
  
  <script>
  import MainHeader from '@/components/Header/MainHeader.vue'
  import MainBody from '@/components/Body/MainBody.vue'
  import FooterSection from '@/components/Body/FooterSection/FooterSection.vue';
  
  export default {
    name: 'HomePage',
    components: {
      MainHeader,
      MainBody,
      FooterSection
    },
    mounted(){
      document.title = 'Clínica Fênix';
    }
  }
  </script>