<template>
  <div class="flex flex-col justify-around h-full">
    <h1 class="text-8xl ultra block w-screen text-center text-orange-50 py-10">Wild Memory</h1>
    <div class="flex justify-evenly h-1/2">
      <div
        class="h-full aspect-[5/8] bg-orange-50 outline-4 outline-forest outline rounded-2xl shadow-lg flex flex-col items-center justify-evenly pacifico"
      >
        <h2 class="text-5xl ultra block w-full text-center text-forest p-5">Difficulty</h2>
        <div>
          <input
            id="easy"
            v-model="difficulty"
            type="radio"
            name="difficulty"
            value="easy"
            class="hidden"
          />
          <label for="easy" class="text-forest text-3xl">
            😎&nbsp;
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
            class="hidden"
          />
          <label for="medium" class="text-forest text-3xl">
            😄&nbsp;
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
            class="hidden"
          />
          <label for="hard" class="text-forest text-3xl">
            😈&nbsp;
            <span>Hard</span>
          </label>
        </div>
      </div>
      <button
        class="h-full aspect-[5/8] bg-orange-50 text-forest hover:underline active:bg-forest active:text-orange-50 outline-4 outline-forest outline rounded-2xl shadow-lg flex flex-col items-center justify-evenly pacifico"
        @click="start"
      >
        <h2 class="text-5xl ultra block w-full text-center p-5">Play</h2>
      </button>
      <div
        class="h-full aspect-[5/8] bg-orange-50 outline-4 outline-forest outline rounded-2xl shadow-lg flex flex-col items-center justify-evenly pacifico"
      >
        <h2 class="text-5xl ultra block w-full text-center text-forest p-5">Language</h2>
        <div>
          <input
            id="english"
            v-model="language"
            type="radio"
            name="language"
            value="english"
            class="hidden"
            checked
          />
          <label for="english" class="text-forest text-3xl">
            🇺🇸&nbsp;
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
            class="hidden"
          />
          <label for="french" class="text-forest text-3xl">
            🇫🇷&nbsp;
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
            class="hidden"
          />
          <label for="spanish" class="text-forest text-3xl">
            🇪🇸&nbsp;
            <span>Spanish</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const difficulty = ref('easy')
const language = ref('english')

const router = useRouter()

const start = () => router.push({ name: 'Game', params: { language: language.value, difficulty: difficulty.value } })
</script>

<style lang="postcss">
input[type="radio"]:checked + label {
  @apply text-4xl font-bold;
}

input[type="radio"]:checked + label span {
  @apply underline;
}
</style>