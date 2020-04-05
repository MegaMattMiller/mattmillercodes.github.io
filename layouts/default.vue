<template>
  <div>
    <PageHeader />
    <nuxt />
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader'
export default {
  components: {
    PageHeader
  }
}
</script>

<style lang="scss">
@mixin no-select() {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

img {
  @include no-select();
}
</style>
