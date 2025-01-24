<template>
    <div class="resto">
        <div class="ThirdSection">
            <CentroSection :image="exame1"></CentroSection>
        </div>
    </div>
  </template>
  
  <script>
    import CentroSection from './CentroSection.vue';
    import exame1 from '@/assets/exame1.png'
  export default {
    name: 'ThirdSection',
    components: {
        CentroSection
    },
    data() {
        return {
            exame1
        }
    }
  }
  </script>
  
  
  <style>

    .ThirdSection{
        background: radial-gradient(circle at -200% 350%, #CF1F29 85%, transparent 50%);
    }

    .resto{
        margin-top: 3vw;
        background-color: #113157;
    }

  </style>
  