<template>
  <div id="app">
    <header-component />
    <router-view/>
    <footer-component />
  </div>
</template>
<script>
  import HeaderComponent from '@/components/Header';
  import FooterComponent from '@/components/Footer';

  export default {
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>
<style>
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  body {
    width:100%;
      font-family: 'Montserrat', sans-serif;
      font-weight: normal;
  }

  a {
    outline:none;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  .container {
    width:80%;
    margin:0 auto;
  }

  /* MEDIA QUERYS */

  @media (max-width: 676px) {
      .container {
          width: 90%;
      }
  }

</style>
