<template>
  <div class="card">
    <div class="card__inner" :flipped="props.flipped">
      <div class="card__face card__face--front">
        <img src="/forest.svg" alt class="w-1/2 svg-orange-50" />
      </div>
      <div class="card__face card__face--back">
        <img :src="'/animals/' + props.img" alt class="w-2/3" />
        <h2 class="text-3xl pacifico">{{ props.text }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  flipped: { type: Boolean, default: false },
  img: { type: String, default: "deer.svg" },
  text: { type: String, default: 'deer' }
})
</script>

<style lang="postcss">
.card {
  @apply h-full aspect-[5/8];
  perspective: 60rem;
}
.card__inner {
  @apply h-full w-full transition-all duration-700 cursor-pointer relative;
  transform-style: preserve-3d;
}
.card__inner[flipped="true"] {
  transform: rotateY(180deg);
}

.card__face {
  @apply absolute w-full h-full overflow-hidden rounded-2xl shadow-lg;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.card__face--front {
  @apply flex items-center justify-center bg-forest;
}

.card__face--back {
  @apply flex flex-col items-center justify-evenly bg-orange-50 outline-2 outline-forest outline;
  transform: rotateY(180deg);
}

.svg-orange-50 {
  filter: invert(90%) sepia(11%) saturate(512%) hue-rotate(323deg)
    brightness(108%) contrast(102%);
}
</style>