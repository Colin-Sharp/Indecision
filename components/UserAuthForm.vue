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
            :class="{'error': $v.email.$error}"
             class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
             id="email" 
             type="text" 
             placeholder="email"
             @input="setEmail($event.target.value)">
      <div class="text-red-500" v-if="!$v.email.required">You need to enter your email</div>
      <div class="text-red-500" v-if="!$v.email.email">Please enter a valid email</div>
    </div>
    <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input v-model="userInfo.password"
            :class="{'error': $v.password.$error}" 
             class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" 
             id="password" 
             type="password" 
             placeholder="******************"
             @input="setPassword($event.target.value)">
      <div class="text-red-500" v-if="!$v.password.required">You have to enter a your password</div>
      <div class="text-red-500" v-if="!$v.password.minLength">Password must have at least {{$v.password.$params.minLength.min}} letters.</div>
      <p v-if="hasName" class="text-green-800 text-xs italic">Please choose a password.</p>
      <nuxt-link v-else to="/register" >
        <button class="text-green-800 text-xs italic">Have you register?</button>
      </nuxt-link>
    </div>
    <p class="text-red-500">{{error}}</p>
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
    },
    setPassword(value) {
      this.password = value;
      this.$v.password.$touch()
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.error {
  animation: shake 0.2s ease-in-out 0s 2;
  border: 2px solid red;
}

@keyframes shake {
  0% { margin-left: 0rem; }
  25% { margin-left: 0.5rem; }
  75% { margin-left: -0.5rem; }
  100% { margin-left: 0rem; }
}
</style>