<template>
  <div class="home">
    <HelloWorld msg="Utility Belt"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>

<style>
  .home {
    text-align: center;
  }
</style>
