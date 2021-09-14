<template>
  <div>
    <div class="flex justify-center text-lg text-green-400 font-bold my-4">
      <h1>Register</h1>
    </div>
    <UserAuthForm buttonText="Register" :submitForm="registerUser" :error="error" :hasName="true"/>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth'

  export default {
    data() {
      return {
        error: '',
        user: '',
        name: ''
      }
    },
    methods: {
      registerUser(registrationinfo, invalid) {
        if (!invalid) {
          firebase.auth().createUserWithEmailAndPassword( registrationinfo.email, registrationinfo.password).then(user => {
            this.$router.push('/home');
          }).catch(error => {
            this.errors = error;
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
    }
  }
</script>

<style lang="scss">

</style>