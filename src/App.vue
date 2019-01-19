<template>
  <div id="app">
    <Header />
    <StaticHome />
  </div>
</template>

<script>
import StaticHome from './components/StaticHome.vue';
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    StaticHome,
    Header
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
