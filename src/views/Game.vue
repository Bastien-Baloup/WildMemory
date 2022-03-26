<template>
  <!-- Game -->
  <div class="flex flex-col justify-around items-center h-full mb-1">
    <!-- timer -->
    <p
      class="text-6xl ultra block w-screen text-center text-orange-50 py-8"
    >Time&nbsp;: {{ minutes }}:{{ seconds }}</p>
    <!-- card grid -->
    <div
      ref="grid"
      class="w-[80vh] max-w-[90vw] aspect-square grid gap-2"
      :class="'grid-' + gridSize"
      :style="'font-size: ' + cardFontSize + 'px;'"
    >
      <div v-for="(card, i) in cardList" :key="i" class="h-full w-full">
        <Card
          :inactive="card.inactive"
          :flipped="card.flipped"
          :img="card.img"
          :text="card.text[language]"
          class="h-full w-full"
          @click.prevent="() => handleCardClick(i)"
        />
      </div>
    </div>
  </div>
  <!-- game end modal -->
  <div
    v-if="isEnded"
    class="absolute top-0 left-0 h-full w-full bg-[#0005] flex items-center justify-center"
  >
    <div
      class="h-2/3 w-2/3 z-50 bg-orange-50 outline outline-2 outline-forest rounded-2xl flex flex-col items-center justify-evenly text-forest"
    >
      <h2 class="text-6xl ultra">Congratulations</h2>
      <p class="text-4xl ultra">You did it in&nbsp;: {{ minutes }}:{{ seconds }}</p>
      <div>
        <router-link
          :to="{ name: 'Home' }"
          class="outline outline-2 outline-forest text-forest ultra text-2xl m-2 py-4 px-8 rounded-xl"
        >Back to Homepage</router-link>
        <a href class="bg-forest text-orange-50 ultra text-2xl m-2 py-4 px-8 rounded-xl">Retry</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import Card from '../components/Card.vue'

const props = defineProps({
  language: { type: String, default: 'english' },
  difficulty: { type: String, default: 'easy' }
})

const cardList = ref([])
const time = ref(0)
const grid = ref(null)
const isEnded = ref(false)
let canClick = true
let selectedCards = []
let foundCount = 0

const cardFontSize = computed(() => {
  if (grid.value) {
    return 13 * grid.value.clientWidth / gridSize.value / 100
  } else {
    return 16
  }
})

// add 1 to the timer every seconds
const timeInterval = setInterval(() => time.value++, 1000)

// compute the counted time in minutes and seconds
const minutes = computed(() => {
  const min = Math.floor(time.value / 60)
  return (min < 10 ? '0' : '') + min
})
const seconds = computed(() => {
  const sec = time.value % 60
  return (sec < 10 ? '0' : '') + sec
})

// compute the size of the grid of card for the chosen difficulty
const gridSize = computed(() => {
  switch (props.difficulty) {
    case 'easy':
      return 4
    case 'medium':
      return 6
    case 'hard':
      return 8
    default:
      return 4
  }
})

// img and text of each possible cards
const cardsData = {
  0: { img: 'anteater.svg', text: { english: 'Anteater', french: 'Fourmilier', spanish: 'Oso hormiguero' } },
  1: { img: 'badger.svg', text: { english: 'Badger', french: 'Blaireau', spanish: 'Tejón' } },
  2: { img: 'bat.svg', text: { english: 'Bat', french: 'Chauve Souris', spanish: 'Murciélago' } },
  3: { img: 'bear.svg', text: { english: 'Bear', french: 'Ours', spanish: 'Oso' } },
  4: { img: 'beaver.svg', text: { english: 'Beaver', french: 'Castor', spanish: 'Castor' } },
  5: { img: 'bison.svg', text: { english: 'Bison', french: 'Bison', spanish: 'Bisonte' } },
  6: { img: 'capybara.svg', text: { english: 'Capybara', french: 'Capybara', spanish: 'Carpincho' } },
  7: { img: 'chipmunk.svg', text: { english: 'Chipmunk', french: 'Chipmunk', spanish: 'Ardilla listada' } },
  8: { img: 'cingulata.svg', text: { english: 'Cingulata', french: 'Cingulata', spanish: 'Cingulata' } },
  9: { img: 'coyote.svg', text: { english: 'Coyote', french: 'Coyote', spanish: 'Coyote' } },
  10: { img: 'deer.svg', text: { english: 'Deer', french: 'Cerf', spanish: 'Ciervo' } },
  11: { img: 'desman.svg', text: { english: 'Desman', french: 'Desman', spanish: 'Desmán' } },
  12: { img: 'echidna.svg', text: { english: 'Echidna', french: 'Échidné', spanish: 'Equidna' } },
  13: { img: 'ermine.svg', text: { english: 'Ermine', french: 'Hermine', spanish: 'Armiño' } },
  14: { img: 'flying_squirrel.svg', text: { english: 'Flying\xa0Squirrel', french: 'Écureuil volant', spanish: 'Ardilla voladora' } },
  15: { img: 'fox.svg', text: { english: 'Fox', french: 'Renard', spanish: 'Zorro' } },
  16: { img: 'groundhog.svg', text: { english: 'Groundhog', french: 'Marmotte', spanish: 'marmota' } },
  17: { img: 'hare.svg', text: { english: 'Hare', french: 'Lièvre', spanish: 'Liebre' } },
  18: { img: 'hedgehod.svg', text: { english: 'Hedgehog', french: 'Hérisson', spanish: 'Erizo' } },
  19: { img: 'jerboa.svg', text: { english: 'Jerboa', french: 'Gerboise', spanish: 'Gerbo' } },
  20: { img: 'koala.svg', text: { english: 'Koala', french: 'Koala', spanish: 'Coala' } },
  21: { img: 'lynx.svg', text: { english: 'Lynx', french: 'Lynx', spanish: 'Lince' } },
  22: { img: 'marten.svg', text: { english: 'Marten', french: 'Martre', spanish: 'Marta' } },
  23: { img: 'mink.svg', text: { english: 'Mink', french: 'Vison', spanish: 'Visón' } },
  24: { img: 'mongoose.svg', text: { english: 'Mongoose', french: 'Mangouste', spanish: 'Mangosta' } },
  25: { img: 'moose.svg', text: { english: 'Moose', french: 'Élan', spanish: 'Alce' } },
  26: { img: 'mouse.svg', text: { english: 'Mouse', french: 'Souris', spanish: 'Ratón' } },
  27: { img: 'musk_deer.svg', text: { english: 'Musk\xa0Deer', french: 'Chevrotain porte-musc', spanish: 'Ciervo almizclero' } },
  28: { img: 'otter.svg', text: { english: 'Otter', french: 'Loutre', spanish: 'Nutria' } },
  29: { img: 'pallas_cat.svg', text: { english: "Pallas's\xa0Cat", french: 'Manul', spanish: 'Manul' } },
  30: { img: 'panda.svg', text: { english: 'Panda', french: 'Panda', spanish: 'Panda' } },
  31: { img: 'platypus.svg', text: { english: 'Platypus', french: 'Ornithorynque', spanish: 'Ornitorrinco' } },
  32: { img: 'polecat.svg', text: { english: 'Polecat', french: 'Putois', spanish: 'Turón' } },
  33: { img: 'porcupine.svg', text: { english: 'Porcupine', french: 'Porc-épic', spanish: 'Puerco espín' } },
  34: { img: 'racoon.svg', text: { english: 'Racoon', french: 'Raton laveur', spanish: 'Mapache' } },
  35: { img: 'racoon_dog.svg', text: { english: 'Racoon\xa0Dog', french: 'Chien viverrin', spanish: 'Perro mapache' } },
  36: { img: 'red_panda.svg', text: { english: 'Red\xa0Panda', french: 'Panda roux', spanish: 'Panda rojo' } },
  37: { img: 'roe.svg', text: { english: 'Roe', french: 'Chevreuil', spanish: 'Hueva' } },
  38: { img: 'sable.svg', text: { english: 'Sable', french: 'Zibeline', spanish: 'Marta cebellina' } },
  39: { img: 'siberian_tiger.svg', text: { english: 'Siberian\xa0Tiger', french: 'Tigre de Sibérie', spanish: 'Tigre siberiano' } },
  40: { img: 'siberian_weasel.svg', text: { english: 'Siberian\xa0Weasel', french: 'Vison', spanish: 'Comadreja siberiana' } },
  41: { img: 'skunk.svg', text: { english: 'Skunk', french: 'Moufette', spanish: 'Zorrillo' } },
  42: { img: 'sloth.svg', text: { english: 'Sloth', french: 'Paresseux', spanish: 'Folivora' } },
  43: { img: 'snow_leopard.svg', text: { english: 'Snow\xa0Leopard', french: 'Panthère des\xa0neiges', spanish: 'Leopardo de\xa0las\xa0nieves' } },
  44: { img: 'squirrel.svg', text: { english: 'Squirrel', french: 'Écureuil', spanish: 'Ardilla' } },
  45: { img: 'wild_boar.svg', text: { english: 'Wild\xa0Boar', french: 'Sanglier', spanish: 'Sus scrofa' } },
  46: { img: 'wildcat.svg', text: { english: 'Wildcat', french: 'Chat sauvage', spanish: 'Gato montés' } },
  47: { img: 'wolf.svg', text: { english: 'Wolf', french: 'Loup', spanish: 'Lobo' } },
  48: { img: 'wolverine.svg', text: { english: 'Wolverine', french: 'Carcajou', spanish: 'Glotón' } },
  49: { img: 'wombat.svg', text: { english: 'Wombat', french: 'Wombat', spanish: 'Uómbat' } },
}

// return a shuffled copy of _array
const shuffleArray = (_array) => {
  const array = [..._array] // duplicate array
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

// initialise the list of cards on the board
const setupCardList = () => {
  const cardListLength = gridSize.value ** 2
  // half the number of cards in the grid as each cards are in pairs
  const cardsDataNbr = cardListLength / 2
  // array of unique initegers from 0-49
  const selectedCardsData = shuffleArray([...Array(50).keys()]).slice(0, cardsDataNbr)

  // build an array containing pairs of the selected cards
  let _cardList = []
  for (let i = 0; i < cardListLength; i++) {
    _cardList.push({
      ...cardsData[selectedCardsData[Math.floor(i / 2)]],
      flipped: false,
      inactive: false
    })
  }
  // set the cardlist value with a shuffled array of the pairs of cards
  cardList.value = shuffleArray(_cardList)
}

// Promise based sleep function
const sleep = ms => new Promise(r => setTimeout(r, ms))

// handle the click on a card
const handleCardClick = async (cardIndex) => {
  // if the click isn't locked by a precedent one and if the card is active
  if (canClick && !cardList.value[cardIndex].inactive) {
    // lock the click
    canClick = false
    // add the card to the selected cards
    selectedCards.push(cardIndex)
    // flip the card
    cardList.value[cardIndex].flipped = true
    if (selectedCards.length === 2) {
      // to let time to the flipped animation to end
      await sleep(700)
      const card1 = cardList.value[selectedCards[0]]
      const card2 = cardList.value[selectedCards[1]]
      // if the cards are a pair
      if (card1.img === card2.img) {
        foundCount += 2
        // disable both cards
        cardList.value[selectedCards[0]].inactive = true
        cardList.value[selectedCards[1]].inactive = true
        // reset selected cards array
        selectedCards = []
        // if all cards are found
        if (foundCount === cardList.value.length) {
          // Game end

          // let time to the inactive animation to end
          await sleep(300)
          // stop the timer
          clearInterval(timeInterval)
          // show the end modal
          isEnded.value = true
          return null
        }
      } else {
        // flip back both cards
        cardList.value[selectedCards[0]].flipped = false
        cardList.value[selectedCards[1]].flipped = false
        // reset selected cards array
        selectedCards = []
      }
    }
    // unlock the click
    canClick = true
  }

}

onMounted(() => setupCardList())
</script>

<style lang="postcss">
.grid-4 {
  @apply grid-cols-4 grid-rows-4;
}
.grid-6 {
  @apply grid-cols-6 grid-rows-6;
}
.grid-8 {
  @apply grid-cols-8 grid-rows-8;
}
</style>