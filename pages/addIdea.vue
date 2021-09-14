<template>
  <form id="idea_form" action="post" class="w-full max-w-lg p-4">
    <label class="block uppercase tracking-wide sm:text-white text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Subject
    </label>
    <input name="subject" class="appearance-none leading-4 block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4  mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Subject">
    <label class="block uppercase sm:text-white tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Whats your idea?)
    </label>
    <textarea name="content" id="" cols="30" rows="10" class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></textarea>
    <button type="submit" class="w-full bg-green-300 hover:bg-green-400 rounded p-1 font-bold text-white">Share your Idea</button>
  </form>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth'

export default {
  data() {
    return {
      user: null
    }
  },
  methods: {
    submitForm(e) {
      const subject = document.querySelector('input[name=subject]');
      const content = document.querySelector('textarea[name=content]');
      const ideaobject = 
      { "records": 
        [ 
          {
            "fields": {
              "Subject": subject.value,
              "Content": content.value,
              "Rating": 100,
              "id": this.user.uid,
              "email": this.user.email,
              "voted": this.user.uid
            }
          }
        ]
      };
      this.$store.dispatch('createIdea', ideaobject);
      e.preventDefault();
      subject.value = '';
      content.value = '';
      // Update our ideas
      this.$store.dispatch('loadAllIdeas');
    }
  },
  mounted() {
    const ideaform = document.getElementById('idea_form');
    ideaform.addEventListener('submit', this.submitForm)

    firebase.auth().onAuthStateChanged( user => {
      this.user = user;
      if (!this.user) {
          this.$router.push('/')
      }
    })
  }
}
</script>

