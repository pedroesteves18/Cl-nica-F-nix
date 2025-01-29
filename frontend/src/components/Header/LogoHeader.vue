<template>

            <div class="logo">
              <nav>
                <router-link to="/">
                  <img src="../../assets/logo.png" class="img">
                </router-link>
              </nav>
            </div>


  </template>
  
  <script>

  export default {
    name: 'LogoHeader'
  }
  </script>
  
  
  <style scoped>
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10vw;
        border-radius: 50vw;
        background-color: white;
        border: solid 0.15vw #CF1F29;
    }

    .img {
        width: 6vw;
        object-fit: cover;
    }
    @media screen and (max-width: 768px) {
        .logo{
          margin-left: 5vw;
          border-radius: 50vw;
          border: solid 0.50vw #CF1F29;
        }
        .img {
          width: 17vw;
          object-fit: cover;
        }
    }

  </style>
  