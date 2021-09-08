<template>
  <div>
    <div class="p-2 relative">
      <div ref="cards" class="flex flex-wrap justify-between cards">
        <div :style="getCardPosition" v-on:click="handleCards(0, $event)" class="p-1 w-6/12 card">
          <div class="max-w-sm rounded h-full overflow-hidden shadow-lg">
            <img class="w-full" src="https://images.unsplash.com/photo-1445583934509-4ad5ffe6ef08?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHRoaW5raW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Sunset in the mountains">
            <div class="px-2 my-2">
              <div class="font-bold text-l mb-2">Add Your Idea</div>
              <p class="text-gray-700 sm:text-white text-base mb-1">
                Let everyone know your idea!
              </p>
            </div>
            <nuxt-link v-if="displayfull && currentselectedcardindex === 0" to="/addIdea">
              <button class="bg-white text-green-400 py-1 px-4 border border-green-400 rounded shadow take-me-there">
                Take me there
              </button>
            </nuxt-link>
          </div>
        </div>
        <div :style="getCardPosition" v-on:click="handleCards(1, $event)" class="p-1 card w-6/12 card">
          <div class="max-w-sm rounded h-full overflow-hidden shadow-lg">
            <img class="w-full" src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWRlYXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
            <div class="px-2 my-2">
              <div class="font-bold text-l mb-2">View Ideas</div>
              <p class="text-gray-700 sm:text-white text-base mb-1">
                Checkout all the idea.
              </p>
            </div>
          <nuxt-link v-if="displayfull && currentselectedcardindex === 1" to="/ideas">
              <button class="bg-white text-green-400 py-1 px-4 border border-green-400 rounded shadow take-me-there">
                Take me there
              </button>
            </nuxt-link>
          </div>
        </div>
        <div :style="getCardPosition" v-on:click="handleCards(2, $event)" class="p-1 card w-6/12 card">
          <div class="max-w-sm rounded h-full overflow-hidden shadow-lg">
            <img class="w-full" src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhcGh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Sunset in the mountains">
            <div class="px-2 my-2">
              <div class="font-bold text-l mb-2">View results</div>
              <p class="text-gray-700 sm:text-white text-base mb-1">
                See what idea were loved
              </p>
            </div>
            <nuxt-link v-if="displayfull && currentselectedcardindex === 2" to="/results">
              <button class="bg-white text-green-400 py-1 px-4 border border-green-400 rounded shadow take-me-there">
              Take me there
              </button>
            </nuxt-link>
          </div>
        </div>
        <div :style="getCardPosition" v-on:click="handleCards(3, $event)" class="p-1 card w-6/12 card">
          <div class="max-w-sm rounded h-full overflow-hidden shadow-lg">
            <img class="w-full" src="https://images.unsplash.com/photo-1515325595179-59cd5262ca53?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGlzdG9yeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
            <div class="px-2 my-2">
              <div class="font-bold text-l mb-2">About</div>
              <p class="text-gray-700 sm:text-white text-base mb-1">
                See your ideas and edit them if you want
              </p>
            </div>
            <nuxt-link v-if="displayfull && currentselectedcardindex === 3" to="/yourIdeas">
              <button class="bg-white text-green-400 py-1 px-4 border border-green-400 rounded shadow take-me-there">
                Take me there
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-full justify-end mt-4">
      <nuxt-link to="/addIdea"><div v-if="!cardisselected" class="circle-button bg-green-500 mb-1 mr-4"></div></nuxt-link>
    </div>
  </div>  
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth'

export default {
  data() {
    return {
      cardisselected: false,
      cardclickdisabled: false,
      displayfull: false,
      currentselectedcardindex: 0,
      user: ''
    }
  },
  computed: {
    getCardPosition() {
      if (this.displayfull) {
        return (this.currentselectedcardindex % 2 !== 0) ? {right: 5 + '%'} : {left: 5 + '%'};
      }
    }
  },
  methods: {
    handleCards(index, e) {
      const card = e.currentTarget;
      if (!this.cardclickdisabled) {
        this.cardclickdisabled = true;
        if (this.cardisselected) {
              if (this.currentselectedcardindex !== index) { return };
              this.resetCards(card);
            } else {
              this.currentselectedcardindex = index;
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
  },
  mounted() {
      firebase.auth().onAuthStateChanged( user => {
      this.user = user;
      if (!this.user) {
          this.$router.push('/')
      }
    })
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
  width: 90%;
  margin: 0 auto;
  padding: 0;
}
.take-me-there {
  width: 60%;
  margin: 2px 20% 10px;
}
.card.position {
  position: absolute;
  
  z-index: 100;
}
.circle-button {
  $size: 40px;
  height: $size;
  width: $size;
  border-radius: 50%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 7l5 5m0 0l-5 5m5-5H6' /%3E%3C/svg%3E");
}
</style>
