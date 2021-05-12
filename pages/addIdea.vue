<template>
  <form id="idea_form" action="post" class="w-full max-w-lg p-4">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Subject
    </label>
    <input name="subject" class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Subject">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Whats your idea?)
    </label>
    <textarea name="content" id="" cols="30" rows="10" class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></textarea>
    <button type="submit" class="w-full bg-green-400 border rounded p-1 text-white">Face jugment</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      ideaformobject: {
        Subject: '',
        Content: '',
        Reating: 100
      }
    }
  },
  methods: {
    submitForm(e) {
      const subject = document.querySelector('input[name=subject]');
      const content = document.querySelector('textarea[name=content]');
      this.ideaformobject.Subject = subject.value;
      this.ideaformobject.Content = content.value;
      console.log(this.ideaformobject);
      e.preventDefault();
    }
  },
  mounted() {
    const ideaform = document.getElementById('idea_form');

    ideaform.addEventListener('submit', this.submitForm)
  }
}
</script>

