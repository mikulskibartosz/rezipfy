<template>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="What ingredients do you have?" aria-label="What ingredients do you have?" aria-describedby="button-addon2">
        <div class="input-group-append">
            <router-link to="/about" class="event" id="about-link-from-search">
            <button class="btn btn-outline-secondary" type="button" id="seach-button">Search</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SearchBox',
  props: {
  }
}
</script>

<style scoped>
.input-group {
    width: 60%;
}

@media all and (max-width: 900px) {
 .input-group {
    width: 100%;
}
}

.form-control {
    background-color: rgba(255, 255, 255, 0.0);
    border: 1px solid #495057;
    border-radius: 0.5em
}

.btn {
    background-color: #d5d8da
}
</style>
