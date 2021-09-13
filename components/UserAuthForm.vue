<template>
<div>
  <form @submit.prevent="submitForm(userInfo, $v.$invalid)" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mx-2 mb-4 flex flex-col">
    <!-- <div v-if="hasName" class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="name">
        Your Name
      </label>
      <input v-model="userInfo.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="name" type="text" placeholder="name">
    </div> -->
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
        Your email
      </label>
      <input v-model="userInfo.email" 
             class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
             id="email" 
             type="text" 
             placeholder="email"
             @input="setEmail($event.target.value)">
    </div>
    <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input v-model="userInfo.password" 
             class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" 
             id="password" 
             type="password" 
             placeholder="******************"
             @input="setPassword($event.target.value)">
      <p v-if="hasName" class="text-green-800 text-xs italic">Please choose a password.</p>
      <nuxt-link v-else to="/register" >
        <button class="text-green-800 text-xs italic">Have you register?</button>
      </nuxt-link>
    </div>
    <button type="submit" class="bg-green-300 hover:bg-green-400 font-bold py-2 px-4 rounded text-white">
      {{ buttonText }}
    </button>
  </form>
</div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      showPassword: false,
      userInfo: {
        email: '',
        password: '',
        name: '',
        invalid: true
      },
      email: '',
      password: ''
    }
  },
  props: ["submitForm", "buttonText", "hasName", "error"],
  validations: {
    email: {
      email,
      required
    },
    password: {
      required,
      minLength: minLength(5)
    }
  },
  methods: {
    setEmail(value) {
      this.email = value;
      this.$v.email.$touch()
      console.log(this.$v);
      this.invalid = this.$v.invalid;
    },
    setPassword(value) {
      this.password = value;
      this.$v.password.$touch()
      this.invalid = this.$v.invalid;
    }
  },
  mounted() {
    this.invalid = this.$v.invalid;
  }
}
</script>