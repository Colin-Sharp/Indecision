<template>
<div class="flxed flex">
  <div class="flex justify-start pl-4 items-center w-9/12">
    <nuxt-link class="inline-block rounded mr-20 text-green-500 logo flex" to="/">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h2 class="pl-1 font-bold">Indecision</h2>
    </nuxt-link>
  </div>
  <ul class="flex w-4/12 justify-between items-center px-4 mr-2 py-4">
    <li>
      <nuxt-link class="inline-block rounded w-4/12 text-green-400 py-1" to="/addIdea">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </nuxt-link>
    </li>
    <li class="mx-2">
      <nuxt-link class="inline-block rounded w-4/12 text-green-400 py-1" to="/ideas">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </nuxt-link>
    </li>
    <li>
      <nuxt-link class="inline-block rounded w-4/12 text-green-400 py-1" to="/results"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      </nuxt-link>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  setup() {},
}
</script>
