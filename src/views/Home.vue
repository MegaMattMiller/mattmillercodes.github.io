<template>
  <div class="statichome">
    <b-jumbotron header="Hi! I'm Matt!" fluid="true">
      <p>I'm a programmer!</p>
    </b-jumbotron>
    <b-container>
      <div class="row align-items-center">
        <div class="col">
          <b-card-group deck>
            <GitHubCard
              v-bind:key="card.id"
              v-for="card in cards"
              v-bind:title="card.title"
              v-bind:body="card.body"
              v-bind:url="card.url"
            />
          </b-card-group>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'; //https://www.npmjs.com/package/vue-markdown
import GitHubCard from "../components/GitHubCard";

export default {
  name: "Home",
  components: {
    GitHubCard,
    VueMarkdown
  },
  data: function() {
    return {
      cards: [
        {
          id: 0,
          title: "My Favorite Git Aliases",
          body: "My collection of aliases for Git. You might find them useful.",
          url: "https://github.com/MegaMattMiller/gitAliases",
          last: ""
        },
        {
          id: 1,
          title: "PowerShell Helpers",
          body: "A collection of helpers to make your day-to-day Powershell use much more pleasant.",
          url: "https://github.com/MegaMattMiller/powershellHelpers",
          last: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>