<template>
  <div>
    <div class="flex justify-center text-lg text-green-400 font-bold my-4">
      <h1>Login</h1>
    </div>
    <UserAuthForm :error="error"  buttonText="Login" :submitForm="loginUser"/>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth'

  export default {
    data() {
      return {
        error: '',
        user: ''
      }
    },
    methods: {
      loginUser(registrationinfo, invalid) {
        if (!invalid) {
          firebase.auth().signInWithEmailAndPassword(registrationinfo.email, registrationinfo.password).then(user => {
            this.$router.push('/home');
          }).catch(error => {
            this.error = error;
          })
        }
      },
    },
    mounted() {
        firebase.auth().onAuthStateChanged( user => {
        this.user = user;
        if (this.user) {
            this.$router.push('/home')
        }
      })
    },
    async fetch({store}) {
    await store.dispatch('loadAllIdeas')
  },
  }
</script>

<style lang="scss">

</style>
