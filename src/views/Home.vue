<template>
  <!-- Home -->
  <div class="flex flex-col justify-around h-full">
    <!-- title -->
    <h1 class="text-8xl ultra block w-screen text-center text-orange-50 py-10">Wild Memory</h1>
    <div class="flex justify-evenly h-1/2">
      <!-- difficulty card -->
      <div
        class="h-full aspect-[5/8] bg-orange-50 outline-4 outline-forest outline rounded-2xl shadow-lg flex flex-col items-center justify-evenly pacifico"
      >
        <h2 class="text-2xl 2xl:text-5xl ultra block w-full text-center text-forest p-5">Difficulty</h2>
        <div>
          <input
            id="easy"
            v-model="difficulty"
            type="radio"
            name="difficulty"
            value="easy"
            tabindex="1"
          />
          <label for="easy" class="text-forest text-xl 2xl:text-3xl rounded-xl p-1">
            😎
            <span>Easy</span>
          </label>
        </div>
        <div>
          <input
            id="medium"
            v-model="difficulty"
            type="radio"
            name="difficulty"
            value="medium"
            tabindex="1"
          />
          <label for="medium" class="text-forest text-xl 2xl:text-3xl rounded-xl p-1">
            😄
            <span>Medium</span>
          </label>
        </div>
        <div>
          <input
            id="hard"
            v-model="difficulty"
            type="radio"
            name="difficulty"
            value="hard"
            tabindex="1"
          />
          <label for="hard" class="text-forest text-xl 2xl:text-3xl rounded-xl p-1">
            😈
            <span>Hard</span>
          </label>
        </div>
      </div>
      <!-- play card -->
      <router-link
        :to="{ name: 'Game', params: { language: language, difficulty: difficulty } }"
        class="h-full aspect-[5/8] bg-orange-50 text-forest hover:underline active:bg-forest active:text-orange-50 focus:underline focus:bg-forest focus:text-orange-50 outline-4 outline-forest outline rounded-2xl shadow-lg flex flex-col items-center justify-evenly pacifico"
        tabindex="2"
      >
        <h2 class="text-5xl ultra block w-full text-center p-5">Play</h2>
      </router-link>
      <!-- language card -->
      <div
        class="h-full aspect-[5/8] bg-orange-50 outline-4 outline-forest outline rounded-2xl shadow-lg flex flex-col items-center justify-evenly pacifico"
      >
        <h2 class="text-2xl 2xl:text-5xl ultra block w-full text-center text-forest p-5">Language</h2>
        <div>
          <input
            id="english"
            v-model="language"
            type="radio"
            name="language"
            value="english"
            tabindex="1"
          />
          <label for="english" class="text-forest text-xl 2xl:text-3xl rounded-xl p-1">
            🇺🇸
            <span>English</span>
          </label>
        </div>
        <div>
          <input
            id="french"
            v-model="language"
            type="radio"
            name="language"
            value="french"
            tabindex="1"
          />
          <label for="french" class="text-forest text-xl 2xl:text-3xl rounded-xl p-1">
            🇫🇷
            <span>French</span>
          </label>
        </div>
        <div>
          <input
            id="spanish"
            v-model="language"
            type="radio"
            name="language"
            value="spanish"
            tabindex="1"
          />
          <label for="spanish" class="text-forest text-xl 2xl:text-3xl rounded-xl p-1">
            🇪🇸
            <span>Spanish</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// reactive state
const difficulty = ref('easy')
const language = ref('english')
</script>

<style lang="postcss">
input[type="radio"] {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

input[type="radio"]:checked + label {
  @apply text-2xl 2xl:text-4xl font-bold;
}
input[type="radio"]:focus + label {
  @apply outline outline-forest;
}

input[type="radio"]:checked + label span {
  @apply underline;
}
</style>