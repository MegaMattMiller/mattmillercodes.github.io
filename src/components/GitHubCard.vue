<template>
  <b-card
    :title="title"
    bg-variant="light"
    :footer="lastEditedDate"
    footer-tag="footer"
    footer-bg-variant="light"
  >
    <b-card-text>{{body}}</b-card-text>
    <b-button :href="url" variant="dark" class="float-left">Check it out</b-button>
  </b-card>
</template>

<script>
const Octokit = require("@octokit/rest");
var timeAgo = require("node-time-ago");

export default {
  name: "GitHubCard",
  props: ["title", "body", "url"],
  created: function() {
    const octokit = new Octokit({
      auth: undefined,
      userAgent: "octokit/rest.js v1.2.3",
      previews: [],
      baseUrl: "https://api.github.com",
      log: {
        warn: console.warn,
        error: console.error
      },

      request: {
        // Node.js only: advanced request options can be passed as http(s) agent,
        // such as custom SSL certificate or proxy settings.
        // See https://nodejs.org/api/http.html#http_class_http_agent
        agent: undefined,

        // request timeout in ms. 0 means no timeout
        timeout: 0
      }
    });
    let repoName = this.url.replace("https://github.com/MegaMattMiller/", "");
    octokit.repos
      .listCommits({ owner: "MegaMattMiller", repo: repoName })
      .then(result => {
        this.lastEditedDate =
          "Updated " + timeAgo(result.data[0].commit.author.date);
      });
  },
  data: function() {
    return {
      lastEditedDate: ""
    };
  }
};
</script>

<style scoped>
</style>
