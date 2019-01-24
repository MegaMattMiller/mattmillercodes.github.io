<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand no-select" to="/">Matt Miller | Programmer</router-link>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <!-- <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                </li> -->
            </ul>
        </div>
        <a class="navbar-icon" href="https://github.com/MegaMattMiller/" target="_blank">
            <font-awesome-icon :icon="['fab', 'github-square']" />
        </a>
        <a class="navbar-icon" href="https://dev.to/megamattmiller" target="_blank">
            <font-awesome-icon :icon="['fab', 'dev']" />
        </a>
    </nav>
</template>

<script>
export default {
    name: "Header"
};
</script>

<style scoped>
.navbar-icon {
    color: white;
    font-size: 30px;
    padding-right: 10px
}
</style>
