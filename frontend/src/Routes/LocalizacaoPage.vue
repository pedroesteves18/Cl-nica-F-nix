<template>
    <div class="LocalizacaoPage">
        <MainHeader></MainHeader>
        <MapSection></MapSection>
        <FooterSection></FooterSection>

    </div>
  </template>
  
  <script>
    import MainHeader from '@/components/Header/MainHeader.vue';
    import FooterSection from '@/components/Body/FooterSection/FooterSection.vue';
    import MapSection from '@/components/Body/Localization/MapSection.vue';
  export default {
    name: 'LocalizacaoPage',
    components: {
        MainHeader,
        FooterSection,
        MapSection
    }
  }
  </script>