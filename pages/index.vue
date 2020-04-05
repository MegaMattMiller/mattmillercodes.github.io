<template>
  <div class="statichome">
    <b-jumbotron header="Hi! I'm Matt!" fluid>
      <p>I'm a programmer!</p>
    </b-jumbotron>
    <b-container>
      <div class="row align-items-center">
        <div class="col">
          <b-card-group deck>
            <GitHubCard
              v-for="card in cards"
              :key="card.id"
              :title="card.title"
              :body="card.body"
              :url="card.url"
              :repo-name="card.repoName"
            />
          </b-card-group>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import GitHubCard from '../components/GitHubCard'
export default {
  components: {
    GitHubCard
  },
  data() {
    return {
      cards: [
        {
          id: 0,
          title: 'My Favorite Git Aliases',
          body: 'My collection of aliases for Git. You might find them useful.',
          url: 'https://github.com/MegaMattMiller/gitAliases',
          last: '',
          repoName: 'gitAliases'
        },
        {
          id: 1,
          title: 'PowerShell Helpers',
          body:
            'A collection of helpers to make your day-to-day Powershell use much more pleasant.',
          url: 'https://github.com/MegaMattMiller/powershellHelpers',
          last: '',
          repoName: 'powershellHelpers'
        }
      ]
    }
  }
}
</script>

<style></style>
