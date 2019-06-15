<template>
    <div class="footer">
        <router-link to="/about" class="event link" id="about-link">About</router-link> - <router-link to="/privacy" class="event link" id="privacy-link">Privacy Policy</router-link> - <a href="https://mikulskibartosz.name" class="event link" id="author-link" target="_blank">© Bartosz Mikulski</a>
        </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.footer {
    width: 100%;
    text-align: center;
    color: #495057;
    padding-bottom: 20px;
}
</style>

