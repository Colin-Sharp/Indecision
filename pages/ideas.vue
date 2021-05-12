<template>
  <div class="relative cards" :style="cardPosition" @touchstart="start($event)" @touchmove="move($event)" @touchend="end($event)" @touchleave="end($event)">
    <div :class="{'dragging': started}" @mousedown="start($event)" @mousemove="move($event)" @mouseup="end($event)" @mouseleave="end($event)" ref="ideas" v-for="(idea, index) in dummydataideas" v-bind:key="index" class="px-1 relative">
      <div v-if="index === currentactiveidea" class="max-w-sm rounded h-full overflow-hidden shadow-lg mx-7">
        <img class="w-full" src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9ua2V5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
        <div class="px-2 my-2">
          <div class="font-bold text-l mb-2">{{idea.subject}}</div>
          <p class="text-gray-700 text-base mb-1">
            {{idea.description}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      dummydataideas: [{ subject: 'Subject1', references: ['ref 1', 'ref 2', 'ref 3'], description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
      { subject: 'Subject2', references: ['ref 1', 'ref 2', 'ref 3'], description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
      { subject: 'Subject3', references: ['ref 1', 'ref 2', 'ref 3'], description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}],
      currentactiveidea: 0,
      started: false,
      moved: false,
      dragobject: {
        startX: null,
        endX: null,
        startY: null,
        endY: null
      },
      cardLeft: null,
      cardTop: null,
      cardrotate: 0,
      screenwidth: null,
      screenhight: null
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.screenhight = window.outerHeight;
			this.screenwidth = window.outerWidth;
		});
    	this.screenwidth = window.outerWidth;
      this.screenhight = window.outerHeight;
  },
  computed: {
    cardPosition() {
      if (this.started) {
        return {left: this.cardLeft + 'px', top: this.cardTop + 'px', transform: 'rotate(' + this.cardrotate + 'deg)'}
      }
    }
  },
  methods: {
    start(e) {
      if (e.touches) {
        this.started = true;
        this.moved = false;
        this.dragobject.startX = e.touches[0].clientX;
        this.dragobject.startY = e.touches[0].clientY;
        this.cardLeft = 0;
        this.cardTop = 0;
        this.cardrotate = 0;
        this.dragobject.endX = 0;
        this.dragobject.endY = 0;
      }
    },
    move(e) {
      if (this.started) {
        this.moved = true;
        this.dragobject.endX = e.touches[0].clientX;
        this.dragobject.endY = e.touches[0].clientY;
        this.cardLeft = e.touches[0].clientX - this.dragobject.startX;
        this.cardTop = e.touches[0].clientY - this.dragobject.startY;

        if ((this.cardLeft >= this.screenwidth / 10) && (this.cardTop > -10 && this.cardTop < 10)) {
          this.cardrotate = 2;
        }
        if ((this.cardLeft <= this.screenwidth / 10) && (this.cardTop > -10 && this.cardTop < 10)) {
          this.cardrotate = -2;
        }
        if ((this.cardLeft >= this.screenwidth / 3 ||
				this.cardLeft <= -(this.screenwidth / 3)) || 
        (this.cardTop >= this.screenhight / 3 || 
        this.cardTop <= -(this.screenhight / 4))) {
				this.started = false;
			}
      }
    },
    end(e) {
      this.started = false;
      const verticaldiff = this.dragobject.startY - this.dragobject.endY;
      const horizontaldiff = this.dragobject.startX - this.dragobject.endX;
      console.log('horiz', horizontaldiff);
      console.log('vertical', verticaldiff);
      console.log('verti start/end', this.dragobject.startY, this.dragobject.endY);
      console.log('horiz start/end', this.dragobject.startX, this.dragobject.endX);
      console.log('hight', this.screenhight);
      console.log('jlkaj',  -((this.screenhight / 3) - 100));
      if (this.moved) {
        if (horizontaldiff >= this.screenwidth / 3) {
          console.log('Not for me');
          return;
        }
        if (horizontaldiff <= -(this.screenwidth / 3)) {
          console.log('I like it');
          return;
        }
        if (verticaldiff >= (this.screenhight / 4 - 15)) {
          console.log('Wow I Just love it so much!!');
          return;
        }
        if (verticaldiff <= -(this.screenhight / 3 - 15)) {
          console.log('I hate it!!');
          return;
        }
      }
    }
  },
  created() {
    axios.get('https://api.airtable.com/v0/appAZxQ29dzBN2Y7Z/Ideas', 
    { headers: {
      'Authorization': 'Bearer key6tp3efXcR6WKgb'
    }}).then(response => console.log(response))
  }
}
</script>

<style lang="scss" scoped>
.cards {
  transition: transform 0.5s ease-out;
}
</style>

