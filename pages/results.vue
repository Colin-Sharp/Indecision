<template>
<div>
  <div class="flex flex-col" v-for="(idea, index) in ideas" v-bind:key="index">
    <div class="result-wrapper flex justify-between w-full">
      <p @click="getRatings()" class="font-bold name sm:text-gray-300">{{idea.fields.Subject}} {{!!percentratings.length ? Math.round(percentratings[index] / 15) : '--'}}%</p>
      <div :style="{width: percentratings.length ? percentratings[index] + 'px' : 'inherit'}" class="bar-chart my-1 bg-green-400 sm:bg-green-500"></div>
      <nuxt-link :to="{name: 'idea', params: {id: idea.id}}">
        <button class="sm:border-white text-green-600 font-bold sm:text-gray-400 p-2">View</button>
      </nuxt-link>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
import firebase from 'firebase/app';
import 'firebase/auth'

export default {
  data() {
    return {
      user: "",
      percentratings: [],
    }
  },
   mounted() {
      firebase.auth().onAuthStateChanged( user => {
      this.user = user;
      if (!this.user) {
          this.$router.push('/')
      }
    });
    setTimeout(()=> {
      this.getRatings();
    }, 500)
  },
  computed: {
     ...mapState({
      ideas: state => state.ideas 
    }),
  },
  watch: {
    percentratings() {
      if (!this.percentratings.length) {
        this.getRatings();
      }
    }
  },
  methods: {
    getRatings() {
      const results = [...this.ideas];
      // set initial percent value
      results.forEach(()=> this.percentratings.push(100))
      
      const ratings = []
      const ratingpercent = [];
      results.forEach(result => ratings.push(parseInt(result.fields.Rating)))
      const totalratings = ratings.reduce((accumlator, currentValuse) =>  accumlator + currentValuse, 0)
      ratings.forEach(rating => {ratingpercent.push((100 / (totalratings / rating)) * 15)});
      this.percentratings = ratingpercent;
    }
  }
}
</script>

<style lang="scss">
.result-wrapper {
  position: relative;
  .bar-chart {
    transition: width 1s ease-out;
    height: 30px;
    width: 100px;
    border-radius: 5px;
  }
  .name {
    position: absolute;
    top: 5px;
    left: 2px;
  }
}
</style>