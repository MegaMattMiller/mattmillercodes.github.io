<template>
  <div class="statichome">
    <div class="jumbotron jumbotron-fluid no-select">
      <div class="container">
        <h1 class="display-4">Hi! I'm Matt!</h1>
        <p class="lead">I'm a programmer!</p>
      </div>
    </div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col">
          <div class="card-deck">
            <div class="card" v-bind:key="card.id" v-for="card in cards">
              <GitHubCard v-bind:title="card.title" v-bind:body="card.body" v-bind:url="card.url" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GitHubCard from "../components/GitHubCard";

export default {
  name: "Home",
  components: {
    GitHubCard
  },
  data: function () {
    return {
      cards: [
      { id: 0, title: "My Favorite Git Aliases", body: 'My collection of aliases for Git. You might find them useful.', url: 'https://github.com/MegaMattMiller/gitAliases' },
      { id:1, title: 'PowerShell Helpers', body: 'A collection of helpers to make your day-to-day Powershell use much more pleasant.', url: 'https://github.com/MegaMattMiller/powershellHelpers' }
    ]
    }
  },
};
</script>

<style scoped>
</style>