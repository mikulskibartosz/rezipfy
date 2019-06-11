<template>
    <div class="row">
        <div class="col-10">
            <h1 class="app-name">rezipfy.com</h1>
        </div>
        <div class="col-2">
            <font-awesome-icon :icon="['fab', 'facebook']" size="2x" class="social-icon"/>
            <font-awesome-icon :icon="['fab', 'instagram']" size="2x" class="social-icon"/>
            <font-awesome-icon :icon="['fab', 'twitter']" size="2x" class="social-icon"/>
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
}

.social-icon {
    float: right;
    margin-top: 10px;
    margin-right: 10px;
}
</style>
