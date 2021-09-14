<template>
<div class="mb-2">
  <div class="relative cards">
    <div ref="ideas" v-for="(idea, index) in ideas" v-bind:key="index" class="px-1 relative">
      <div v-if="index === currentactiveidea && !idea.fields.voted.includes(user.uid)" class="max-w-sm rounded h-full overflow-hidden shadow-lg sm:boader mx-7">
        <img class="w-full" src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9ua2V5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
        <div class="px-2 my-2">
          <div class="font-bold sm:text-white text-l mb-2">{{idea.fields.Subject}}</div>
          <p class="text-gray-700 sm:text-white text-base mb-1">
            {{idea.fields.Content}}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div v-if="checkIfWeHaveAnyIdeas" class="sm:text-white">
    <div class="needle-wrapper w-full flex flex-col items-center mt-20 justify-center mb-4">
      <span class="p-4 rating-percent">{{Math.round((slidervalue / 180) * 100)}}%</span> 
      <div ref="indectors" class="indectors w-12/12">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div :style="getGaugeRotation" class="needle"></div>
       <button type="button" @click="submitRating()" class="bg-green-400 z-100 hover:bg-green-500 transition-colors rounded mt-6 py-1 px-4 font-bold text-white">Submit your rating</button>
    </div>
    <div class="slider-wrapper">
      <input name="slider" min="0" max="180" id="slider_range" ref="slider" value="50" v-model="slidervalue" class="w-full slider" type="range">
    </div>
  </div>
  <div v-if="!checkIfWeHaveAnyIdeas" class="flex justify-center">
      <p class="font-bold sm:text-white">Hey, looks like you have voted on all the ideas out there right now. Why don't you mossy on to the add idea page and <nuxt-link to="/addIdea" class="underline hover:text-green-400">add an idea.</nuxt-link> </p>
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
      currentactiveidea: 0,
      user: "",
      slidervalue: 90
    }
  },
  watch: {},
  mounted() {
      firebase.auth().onAuthStateChanged( user => {
      this.user = user;
      if (!this.user) {
          this.$router.push('/')
      }
    });
    this.setIndecators();
  },
  computed: {
    ...mapState({
      ideas: state => state.ideas 
    }),
    getGaugeRotation() {
      return {transform: 'rotate(' + this.slidervalue +'deg)'}
    },
    checkIfWeHaveAnyIdeas() {
      return this.ideas.filter(idea => !idea.fields.voted.includes(this.user.uid)).length
    }
  },
  watch: {
    slidervalue() {
      this.setIndecators();
    }
  },
  methods: {
    submitRating() {
      const ratingobj = 
      {
        "records": [
          {
            "id": this.ideas[this.currentactiveidea].id,
            "fields": {
              "Rating": parseInt(this.ideas[this.currentactiveidea].fields.Rating) + parseInt(this.slidervalue),
              "voted": this.ideas[this.currentactiveidea].fields.voted + '-' + this.user.uid
            }
          }
        ]
      }
      this.$store.dispatch('updateIdea', ratingobj);
      if(this.currentactiveidea === this.ideas.length - 1) {
        this.currentactiveidea = 0;
      } else {
        this.currentactiveidea++;
      }
    },
    setIndecators() {
      if (this.checkIfWeHaveAnyIdeas) {
        const indectors = [...this.$refs.indectors.children];
        indectors.forEach((indector, index) => {
          if (index <= (this.slidervalue / 10) || this.slidervalue == 179) {
            indector.classList.add("green");
          } else {
             indector.classList.remove("green");
          }
        })
      }
    }
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
.cards {
  transition: transform 0.5s ease-out;
}

.slider {
  appearance: none;
  background: rgb(172, 209, 138);
  outline: none;
  cursor: pointer;
}

.slider::-webkit-slider-thumb {
  appearance: none;
  background: rgb(25, 156, 25);
  border-radius: 15%;
  width: 15px;
  height: 30px
}

.slider::-moz-range-thumb {
  background: rgb(25, 156, 25);
  border-radius: 15%;
  width: 15px;
  height: 30px;
}

input#slider_range.slider {
  border-radius: 10px;
  height: 10px;
  z-index: 100;
}

.needle {
  &::before {
    content: '';
    position: absolute;
    height: 5px;
    width: 100px;
    border-radius: 5px;
    background: rgb(25, 156, 25);
  }
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: 88px;
    height: 25px;
    width: 25px;
    border-radius: 40px;
    background: rgb(25, 156, 25);
  }
  width: 200px;
  height: 5px;
  z-index: -1;
}
.rating-percent {
  z-index: -2;
}
.indectors {
  position: relative;
  right: 110px;
  transition: all 1s ease-out;
  z-index: -2;
  div {
    width: 220px;
    height: 2px;
    position: absolute;
    &::before {
      content: '';
      position: absolute;
      width: 25px;
      height: 2px;
      background: rgb(255, 47, 47);
      border-radius: 2px;
    }
    &.green {
      &::before {
      content: '';
      position: absolute;
      width: 25px;
      height: 2px;
      background: rgb(71, 255, 47);
      border-radius: 2px;
    }
    }
    &:nth-child(1) {
      transform: rotate(0deg);
    }
    &:nth-child(2) {
      transform: rotate(10deg);
    }
    &:nth-child(3) {
      transform: rotate(20deg);
    }
    &:nth-child(4) {
      transform: rotate(30deg);
    }
    &:nth-child(5) {
      transform: rotate(40deg);
    }
    &:nth-child(6) {
      transform: rotate(50deg);
    }
    &:nth-child(7) {
      transform: rotate(60deg);
    }
    &:nth-child(8) {
      transform: rotate(70deg);
    }
    &:nth-child(9) {
      transform: rotate(80deg);
    }
    &:nth-child(10) {
      transform: rotate(90deg);
    }
    &:nth-child(11) {
      transform: rotate(100deg);
    }
    &:nth-child(12) {
      transform: rotate(110deg);
    }
    &:nth-child(13) {
      transform: rotate(120deg);
    }
    &:nth-child(14) {
      transform: rotate(130deg);
    }
    &:nth-child(15) {
      transform: rotate(140deg);
    }
    &:nth-child(16) {
      transform: rotate(150deg);
    }
    &:nth-child(17) {
      transform: rotate(160deg);
    }
    &:nth-child(18) {
      transform: rotate(170deg);
    }
     &:nth-child(19) {
      transform: rotate(180deg);
    }
  }
}
</style>
