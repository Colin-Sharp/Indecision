<template>
<div>
  <h1>This is the results</h1>
</div>
</template>

<script>
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
  }
}
</script>