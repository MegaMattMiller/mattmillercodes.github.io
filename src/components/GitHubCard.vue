<template>
    <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <p class="card-text">
            {{body}}
        </p>
        <a
            :href="url"
            class="btn btn-primary"
            target="_blank"
        >
        Check it out
        </a>
    </div>
</template>

<script>
export default {
    name: "GitHubCard",
    props: ["title", "body", "url"]
}
</script>

<style scoped>

</style>
