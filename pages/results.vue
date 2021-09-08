<template>
<div>
  <div class="flex flex-col" v-for="(idea, index) in ideas" v-bind:key="index">
    <p>{{idea.fields.Subject}} {{idea.fields.Rating}}</p>
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
      user: ""
    }
  },
   mounted() {
      firebase.auth().onAuthStateChanged( user => {
      this.user = user;
      if (!this.user) {
          this.$router.push('/')
      }
    })
  },
  computed: {
     ...mapState({
      ideas: state => state.ideas 
    }),
  }
}
</script>