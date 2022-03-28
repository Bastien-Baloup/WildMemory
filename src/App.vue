<template>
  <router-view />
</template>

<script setup></script>

<style lang="postcss">
/* google fonts */
@import url("https://fonts.googleapis.com/css2?family=Pacifico&family=Ultra&display=swap");
.pacifico {
  font-family: "emoji", "Pacifico", cursive;
}
.ultra {
  font-family: "emoji", "Ultra", serif;
}

/* emoji font */

@font-face {
  font-family: "emoji";
  src: url("/fonts/NotoColorEmoji.ttf") format("truetype");
  unicode-range: U+0080-02AF, U+0300-03FF, U+0600-06FF, U+0C00-0C7F, U+1DC0-1DFF,
    U+1E00-1EFF, U+2000-209F, U+20D0-214F, U+2190-23FF, U+2460-25FF, U+2600-27EF,
    U+2900-29FF, U+2B00-2BFF, U+2C60-2C7F, U+2E00-2E7F, U+3000-303F, U+A490-A4CF,
    U+E000-F8FF, U+FE00-FE0F, U+FE30-FE4F, U+1F000-1F02F, U+1F0A0-1F0FF,
    U+1F100-1F64F, U+1F680-1F6FF, U+1F910-1F96B, U+1F980-1F9E0;
}

/* tailwind imports */
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  font-family: "emoji", Avenir, Helvetica, Arial, sans-serif;
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
