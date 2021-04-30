<template>
  <div class="p-4">
    <div ref="cards" class="flex flex-wrap justify-between cards">
      <div :style="getCardPosition" v-on:click="handleCards(0, $event)" class="p-1 w-6/12 card">
        <div class="max-w-sm rounded h-full overflow-hidden shadow-lg">
          <img class="w-full" src="https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Sunset in the mountains">
          <div class="px-2 my-2">
            <div class="font-bold text-l mb-2">Add Your Idea</div>
            <p class="text-gray-700 text-base mb-1">
              Let everyone know your idea!
            </p>
          </div>
          <nuxt-link v-show="displayfull" to="/addIdea">
            <button class="bg-white text-green-400 py-1 px-4 border border-green-400 rounded shadow take-me-there">
              Take me there
            </button>
          </nuxt-link>
        </div>
      </div>
      <div :style="getCardPosition" v-on:click="handleCards(1, $event)" class="p-1 card w-6/12 card">
        <div class="max-w-sm rounded h-full overflow-hidden shadow-lg">
          <img class="w-full" src="https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Sunset in the mountains">
          <div class="px-2 my-2">
            <div class="font-bold text-l mb-2">View Ideas</div>
            <p class="text-gray-700 text-base mb-1">
              Checkout all the idea that other people have.
            </p>
          </div>
         <nuxt-link v-show="displayfull" to="/addIdea">
            <button class="bg-white text-green-400 py-1 px-4 border border-green-400 rounded shadow take-me-there">
              Take me there
            </button>
          </nuxt-link>
        </div>
      </div>
      <div :style="getCardPosition" v-on:click="handleCards(2, $event)" class="p-1 card w-6/12 card">
        <div class="max-w-sm rounded h-full overflow-hidden shadow-lg">
          <img class="w-full" src="https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Sunset in the mountains">
          <div class="px-2 my-2">
            <div class="font-bold text-l mb-2">View results</div>
            <p class="text-gray-700 text-base mb-1">
              See what idea were love and others not so much.
            </p>
          </div>
          <nuxt-link v-show="displayfull" to="/addIdea">
            <button class="bg-white text-green-400 py-1 px-4 border border-green-400 rounded shadow take-me-there">
            Take me there
            </button>
          </nuxt-link>
        </div>
      </div>
      <div :style="getCardPosition" v-on:click="handleCards(3, $event)" class="p-1 card w-6/12 card">
        <div class="max-w-sm rounded h-full overflow-hidden shadow-lg">
          <img class="w-full" src="https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Sunset in the mountains">
          <div class="px-2 my-2">
            <div class="font-bold text-l mb-2">Why this is cool?</div>
            <p class="text-gray-700 text-base mb-1">
              Lorem ipsum dolor sit.
            </p>
          </div>
          <nuxt-link v-show="displayfull" to="/addIdea">
            <button class="bg-white text-green-400 py-1 px-4 border border-green-400 rounded shadow take-me-there">
            Take me there
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardisselected: false,
      cardclickdisabled: false,
      displayfull: false,
      currentselectedcardindex: 0
    }
  },
  computed: {
    getCardPosition() {
      if (this.displayfull) {
        return (this.currentselectedcardindex % 2 !== 0) ? {right: 0 + 'px'} : {left: 0 + 'px'};
      }
    }
  },
  methods: {
    handleCards(index, e) {
      const card = e.currentTarget;
      this.currentselectedcardindex = index;
      if (!this.cardclickdisabled) {
        this.cardclickdisabled = true;
        if (this.cardisselected) {
              this.resetCards(card);
            } else {
              this.expandCard(card);
            }
        this.cardisselected = !this.cardisselected
        setTimeout(()=>{
          this.cardclickdisabled = false;
        }, 1000)
      }
    },
    expandCard(card) {
      this.toggleVanishCard("show");
      setTimeout(()=> {
        card.classList.add("position");
        card.classList.add("expand");
        this.displayfull = true;
      }, 1000);
    },
    resetCards(card) {
      this.displayfull = false;
      card.classList.remove("expand");
      setTimeout(()=> {
        card.classList.remove("position");
        this.toggleVanishCard('hide');
      }, 1000);
    },
    toggleVanishCard(state) {
      const cards = this.$refs.cards ? this.$refs.cards.children : null;
      if (cards == null) { return };
      for (let i = 0; i <= 3; i++) {
        if (i === this.currentselectedcardindex) {
          continue;
        };
        if (state === "show") {
          cards[i].classList.add("faded-out")
        } else {
          cards[i].classList.remove("faded-out")
        }
      };
    }
  }
}
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.card {
  transition: all 1000ms;
  will-change: opacity;
}
.card.faded-out {
  opacity: 0;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.card.expand {
  width: 100%;
}

.take-me-there {
  width: 60%;
  margin: 2px 20% 10px;
}
.card.position {
  position: absolute;
  z-index: 100;
}
</style>
