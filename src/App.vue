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
.no-select {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; }
</style>
