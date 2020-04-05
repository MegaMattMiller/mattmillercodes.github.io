<template>
  <b-card
    :title="title"
    :img-src="imagePath"
    :img-alt="title"
    img-top
    bg-variant="light"
    footer-bg-variant="light"
    footer-tag="footer"
  >
    <b-card-text>{{ body }}</b-card-text>
    <b-container slot="footer">
      <b-row align-v="center">
        <b-col>
          <span class="float-left">{{ lastEditedDate }}</span>
        </b-col>
        <b-col>
          <b-button :href="url" variant="dark" class="float-right"
            >Check it out</b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </b-card>
</template>

<script>
export default {
  name: 'GitHubCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    repoName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {
    imagePath() {
      return `${this.repoName}.svg`
    }
  }
}
</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
.card-footer {
  padding-left: 0;
  padding-right: 0;
}
</style>
