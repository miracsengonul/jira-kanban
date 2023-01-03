<template>
  <div id="app">
    <SideBar />
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
<script>
import SideBar from '@/components/organisms/SideBar.vue';

export default {
  components: {
    SideBar
  }
};
</script>
