<template>
  <div class="text-field">
    <input type="text" />
  </div>
</template>

<script>
const value = value || ''
export default {
  name: 'text-field',
  data () {
    return {
      value: value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  background: red;
}
</style>
