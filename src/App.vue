<template>
  <Home />
</template>

<script setup>
import Home from './vues/Home.vue'
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  @apply scroll-smooth antialiased;
}
</style>
