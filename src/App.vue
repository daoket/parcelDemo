<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-size: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
