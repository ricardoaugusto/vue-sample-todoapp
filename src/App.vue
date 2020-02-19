<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: { NavBar }
};
</script>

<style scoped>
@import "~uikit/dist/css/uikit.min.css";
</style>
