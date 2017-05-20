<template>
  <div class="TextField">
    <input type="text" />
  </div>
</template>

<script>
const value = value || ''
export default {
  name: 'TextField',
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
