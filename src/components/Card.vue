<template>
  <div class="card">
    <div class="card__inner" :inactive="props.inactive" :flipped="props.flipped">
      <div class="card__face card__face--front">
        <img src="/forest.svg" alt class="w-1/2 svg-orange-50" draggable="false" />
      </div>
      <div class="card__face card__face--back">
        <img :src="'/animals/' + props.img" alt class="w-2/3 min-h-[50%] mt-2" draggable="false" />
        <h2 class="pacifico block w-[90%] text-center">{{ props.text }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  inactive: { type: Boolean, default: false },
  flipped: { type: Boolean, default: false },
  img: { type: String, default: "deer.svg" },
  text: { type: String, default: 'deer' }
})

</script>

<style lang="postcss">
.card {
  perspective: 60rem;
  pointer-events: all;
}
.card__inner {
  @apply h-full w-full transition-all duration-700 cursor-pointer relative select-none;
  transform-style: preserve-3d;
}
.card__inner[flipped="true"] {
  transform: rotateY(180deg);
}
.card__inner[inactive="true"] .card__face {
  filter: brightness(25%);
}

.card__face {
  @apply absolute w-full h-full overflow-hidden rounded-sm md:rounded-2xl shadow-lg transition-all duration-300;
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