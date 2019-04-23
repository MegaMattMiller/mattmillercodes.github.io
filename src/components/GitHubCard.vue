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
    <b-card-text>{{body}}</b-card-text>
    <b-container slot="footer">
      <b-row align-v="center">
        <b-col>
          <span class="float-left">
            {{lastEditedDate}}
          </span>
        </b-col>
        <b-col>
          <b-button :href="url" variant="dark" class="float-right">
            Check it out
          </b-button>
        </b-col>
      </b-row>
    </b-container>
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
    this.repoName = this.url.replace("https://github.com/MegaMattMiller/", "");
    this.imagePath = `/images/${this.repoName}.svg`;
    octokit.repos
      .listCommits({ owner: "MegaMattMiller", repo: this.repoName })
      .then(result => {
        this.lastEditedDate =
          `Updated ${timeAgo(result.data[0].commit.author.date)}`;
      });
  },
  data: function() {
    return {
      lastEditedDate: "",
      repoName: "",
      imagePath: ""
    };
  }
};
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
