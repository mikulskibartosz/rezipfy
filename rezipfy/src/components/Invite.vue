<template>
    <div class="text">
        <p>Don't know what to cook? Use the ingredients you already have!</p>
        <p><strong>Quick cooking</strong> - less than 30 minutes<br/>
        <strong>Stop wasting food</strong></p>
    </div>
</template>

<script>
export default {
    name: "Invite"
}
</script>

<style scoped>
.text {
    padding-top: 5%;
    padding-left: 15%;
    color: #495057
}

@media all and (max-width: 900px) {
    .text {
    padding-top: 5%;
    padding-left: 2%;
    width: 100%;
    color: #495057
}
}
</style>
