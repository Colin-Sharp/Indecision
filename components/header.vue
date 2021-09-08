<template>
  <div class="flex justify-between container mx-1 sm:mx-0">
    <div class="flex justify-start items-center">
      <nuxt-link class="inline-block rounded text-green-500 logo flex" to="/home">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 class="pl-1 font-bold">Indecision</h2>
      </nuxt-link>
    </div>
      <div class="flex justify-center font-bold py-4">
        <nuxt-link  v-if="!user && $nuxt.$route.path !== '/'" class="m-2 text-green-400 font-bold" to="/">Login</nuxt-link>
        <nuxt-link  v-if="!user && $nuxt.$route.path !== '/register'" class="m-2 text-green-400 font-bold" to="/register">Register</nuxt-link>
        <a v-if="user" @click="signout" class="nav-link ml-1 cursor-pointer text-green-400 my-5">Signout</a>
      </div>
    <ul v-if="user" class="flex w-4/12 justify-between items-center py-4">
      <li>
        <nuxt-link class="inline-block rounded w-4/12 text-green-400 py-1" to="/addIdea">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="inline-block rounded w-4/12 text-green-400 py-1" to="/ideas">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="inline-block rounded w-4/12 text-green-400 py-1" to="/results"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="inline-block rounded w-4/12 text-green-400 py-1" to="/yourideas">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth'
export default {
  data() {
    return {
      user: ''
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged( user => {
      this.user = user;
    })
  },
  methods: {
    signout() {
      firebase.auth().signOut().then(result => {
        this.user = '';
        this.$router.push('/')
      });
    }
  }
}
</script>

<style lang="scss">
</style>
