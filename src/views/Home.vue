<template>
    <div class="img-back-all">
        <cabecera />
        <learning />
        <posts />
    </div>
</template>

<script>

import Cabecera from '../components/Cabecera';
import Posts from '../components/Posts';
import Learning from '../components/Learning';

export default {
  name: 'home',
  components: {
    Cabecera,
    Learning,
    Posts
  }
}
</script>

<style>
  .img-back-all {
      width: 100%;
      background-image: url(../assets/img/nubes2.png);
      background-repeat: no-repeat;
      background-position: top;
  }
</style>