<template>
  <b-card
  :title="title"
  bg-variant="light"
  footer-tag="footer"
  footer-bg-variant="light"
  >
    <b-card-text>{{body}}</b-card-text>
    <b-button :href="url" variant="dark" slot="footer" class="float-right">Check it out</b-button>
  </b-card>
</template>

<script>
export default {
  name: "GitHubCard",
  props: ["title", "body", "url"]
};
</script>

<style scoped>
</style>
