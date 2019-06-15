<template>
    <div class="row">
        <div class="col-10">
            <h1 class="app-name">rezipfy.com</h1>
        </div>
        <div class="col-2">
            <a href="https://www.facebook.com/Rezipfy-327405228156709/" target="_blank" class="event" id="facebook_external_link"><font-awesome-icon :icon="['fab', 'facebook']" size="2x" class="social-icon"/></a>
            <a href="https://instagram.com/rezipfycom/"  target="_blank" class="event" id="instagram_external_link"><font-awesome-icon :icon="['fab', 'instagram']" size="2x" class="social-icon"/></a>
            <a href="https://twitter.com/rezipfy"  target="_blank" class="event" id="twitter_external_link"><font-awesome-icon :icon="['fab', 'twitter']" size="2x" class="social-icon"/></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
.app-name {
    margin-top: 10px;
    margin-left: 30px;
    color: #495057;
    font-family: 'Schoolbell', cursive;
}

.social-icon {
    float: right;
    margin-top: 10px;
    margin-right: 10px;
}
</style>
