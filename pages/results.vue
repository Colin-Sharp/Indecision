<template>
  <h1>This is the results</h1>
</template>

<script>
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