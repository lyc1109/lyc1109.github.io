<style scoped>
  [v-cloak]{
    display: none;
  }
</style>
<template>
  <div id="app" v-cloak>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
