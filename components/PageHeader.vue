<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/">Matt Miller | Programmer</b-navbar-brand>
    <b-navbar-toggle target="nav_collapse" />
    <b-collapse id="nav_collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <a
          class="navbar-icon"
          href="https://github.com/MegaMattMiller/"
          target="_blank"
          alt="Github"
          title="Github"
          ><font-awesome-icon :icon="['fab', 'github-square']"
        /></a>
        <a
          class="navbar-icon"
          href="https://dev.to/megamattmiller"
          target="_blank"
          alt="Dev.to"
          title="Dev.to"
          ><font-awesome-icon :icon="['fab', 'dev']"
        /></a>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style scoped>
.navbar-icon {
  color: white;
  font-size: 30px;
  padding-right: 10px;
}
</style>
