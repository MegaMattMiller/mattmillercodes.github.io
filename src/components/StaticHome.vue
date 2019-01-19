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
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">My Favorite Git Aliases</h5>
                <p
                  class="card-text"
                >My collection of aliases for Git. You might find them useful.</p>
                <a
                  href="https://github.com/MegaMattMiller/gitAliases"
                  class="btn btn-primary"
                >Check it out</a>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">PowerShell Helpers</h5>
                <p class="card-text">
                  A collection of helpers to make your day-to-day Powershell use much more
                  pleasant.
                </p>
                <a
                  href="https://github.com/MegaMattMiller/powershellHelpers"
                  class="btn btn-primary"
                >Check it out</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StaticHome"
};
</script>

<style scoped>
</style>