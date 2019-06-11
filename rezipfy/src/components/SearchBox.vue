<template>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="What ingredients do you have?" aria-label="What ingredients do you have?" aria-describedby="button-addon2">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
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

.form-control {
    background-color: rgba(255, 255, 255, 0.0);
    border: 1px solid #495057;
    border-radius: 0.5em
}
</style>
