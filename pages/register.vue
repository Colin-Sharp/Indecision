<template>
  <div>
    <h1>Register</h1>
    <UserAuthForm buttonText="Register" :submitForm="registerUser" error="error" />
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth'

  export default {
    data() {
      return {
        error: ''
      }
    },
    methods: {
      registerUser(registrationinfo) {
        firebase.auth().createUserWithEmailAndPassword(registrationinfo.email, registrationinfo.password).then(user => {
          console.log(user);
          this.$router.push('/home');
        }).catch(error => {
          this.errors = error;
        })
      },
    }
  }
</script>

<style lang="scss">

</style>