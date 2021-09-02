<template>
<div>
  <form @submit.prevent="submitForm(userInfo)" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mx-2 mb-4 flex flex-col">
    <div v-if="hasName" class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="name">
        Your Name
      </label>
      <input v-model="userInfo.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="name" type="text" placeholder="name">
    </div>
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
        Your email
      </label>
      <input v-model="userInfo.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="text" placeholder="email">
    </div>
    <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input v-model="userInfo.password" class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************">
      <p class="text-red text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button type="submit" class="bg-blue hover:bg-blue-dark font-bold py-2 px-4 rounded">
        {{ buttonText }}
      </button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      userInfo: {
        email: '',
        password: '',
        name: ''
      }
    }
  },
  props: ["submitForm", "buttonText", "hasName", "error"]
}
</script>