<template>
  <ul class="flex p-4 bg-white">
    <li class="mr-2">
      <nuxt-link class="inline-block border rounded py-1 px-2 bg-white text-green-400" to="/">Indecision</nuxt-link>
    </li>
    <li class="mr-2">
      <nuxt-link class="inline-block border rounded bg-white text-green-400 py-1 px-2" to="/addIdea">Add</nuxt-link>
    </li>
    <li class="mr-2">
      <nuxt-link class="inline-block border rounded bg-white text-green-400 py-1 px-2" to="/addIdea">Ideas</nuxt-link>
    </li>
    <li class="mr-2">
      <nuxt-link class="inline-block border rounded bg-white text-green-400 py-1 px-2" to="/addIdea">Results</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  setup() {
    
  },
}
</script>