<template>
  <div>
    <h1>HI</h1>
    {{ x }}
  </div>
</template>

<script>
  export default {
    auth: 'guest',

    computed: {
      vary () {
        return store.state.x
      }
    }
  }
</script>
