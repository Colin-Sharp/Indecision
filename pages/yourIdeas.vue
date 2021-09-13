<template>
<div>
  <div class="relative cards">
    <div ref="ideas" v-for="(idea, index) in ideas" v-bind:key="index" class="px-1 relative">
      <div v-if="user.uid === idea.fields.id" class="max-w-sm rounded h-full overflow-hidden shadow-lg mx-7">
        <button type="button" @click="deleteIdea(idea.id)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 strock-current text-black sm:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        </button>
        <img class="w-full" src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9ua2V5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
        <div class="px-2 my-2">
          <div class="font-bold text-l sm:text-white mb-2">{{idea.fields.Subject}}</div>
          <p class="text-gray-700 sm:text-white text-base mb-1">
            {{idea.fields.Content}}
          </p>
        </div>
      </div>
    </div>
    <div v-if="!checkIfWeHaveAnyIdeas" class="flex justify-center">
      <p class="font-bold sm:text-white">Hey, looks like you are not shearing any ideas right now.</p>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
import firebase from 'firebase/app';
import 'firebase/auth'

export default {
  data() {
    return {
      currentactiveidea: 0,
      screenwidth: null,
      screenhight: null,
      user: "",
      yourideas: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.$store.dispatch('loadAllIdeas');
    }, 0)
    window.addEventListener('resize', () => {
      this.screenhight = window.outerHeight;
			this.screenwidth = window.outerWidth;
		});
    	this.screenwidth = window.outerWidth;
      this.screenhight = window.outerHeight;

      firebase.auth().onAuthStateChanged( user => {
      this.user = user;
      if (!this.user) {
          this.$router.push('/')
      }
    });

  },
  computed: {
    ...mapState({
      ideas: state => state.ideas 
    }),
    checkIfWeHaveAnyIdeas() {
      return this.ideas.filter(idea => this.user.uid === idea.fields.id).length
    }
  },
  methods: {
    deleteIdea(ideaid) {
        this.$store.dispatch('deleteIdea', ideaid);
    }
  },
}
</script>

<style lang="scss" scoped>
.cards {
  transition: transform 0.5s ease-out;
}
</style>
