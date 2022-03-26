<template>
  <router-view />
</template>

<script setup></script>

<style lang="postcss">
/* google fonts */
@import url("https://fonts.googleapis.com/css2?family=Pacifico&family=Ultra&display=swap");
.pacifico {
  font-family: "Pacifico", cursive;
}
.ultra {
  font-family: "Ultra", serif;
}

/* tailwind imports */
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  @apply scroll-smooth antialiased h-screen;
}

/* background darkening animation */
@keyframes darken {
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.7);
  }
}

body {
  @apply h-screen;
  background: rgba(0, 0, 0, 0) url(assets/forest-day.svg);
  background-blend-mode: darken;
  background-size: cover;
  animation: 1s ease-in 0s forwards darken;
}
</style>
