<template>
  <div id="app">
    <StaticHome />
  </div>
</template>

<script>
import StaticHome from './components/StaticHome.vue';

export default {
  name: 'app',
  components: {
    StaticHome
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.no-select {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; }
</style>
