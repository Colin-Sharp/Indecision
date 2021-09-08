<template>
  <div>
    <div class="flxed flex justify-center">
      <div class="sm:mt-32 container">
        <Phoneheader />
        <Header />
        <Nuxt />
      </div>
    </div>
    <div class="flex justify-center w-full hidden phone-wrapper sm:flex absolute top-0">
      <img class="phone" src="../static/phone.png" alt="">
    </div>  
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.phone-wrapper {
  z-index: -10;
}

.phone {
  min-width: 680px;
}

body {
  background: rgb(231, 226, 226);
}

.container {
  max-width: 320px;
}

button:active,
button:focus {
  outline: none;
}

.container-phone {
  max-width: 380px;
}
</style>

<script>
export default {
  mounted() {
    this.$store.dispatch('loadAllIdeas');
  },
}
</script>
