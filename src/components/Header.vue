<template>
  <header>
      <h1>{{ msg }}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  width: 100%;
  padding: 10px;
  background-color: #4287f5;
  justify-content: left;
}

h1 {
    color: white;
}

</style>
