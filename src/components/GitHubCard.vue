<template>
  <b-card :title="title">
    <b-card-text>{{body}}</b-card-text>
    <b-button :href="url" variant="dark">Check it out</b-button>
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
