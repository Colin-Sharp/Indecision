<template>
<div class="sm:flex justify-between hidden header-wrapper">
  <svg class="mt-2" width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 19.6875C19.0111 19.6875 18.0445 19.9624 17.2221 20.4774C16.3999 20.9925 15.759 21.7247 15.3806 22.5812C15.0021 23.4377 14.9031 24.3803 15.0961 25.2894C15.289 26.1988 15.7652 27.0339 16.4645 27.6896C17.1638 28.3451 18.0547 28.7916 19.0246 28.9725C19.9945 29.1532 20.9998 29.0604 21.9135 28.7057C22.827 28.3509 23.608 27.75 24.1575 26.9792C24.7068 26.2084 25 25.3022 25 24.375C24.9992 23.1321 24.472 21.9403 23.5346 21.0613C22.597 20.1825 21.3258 19.6882 20 19.6875Z" fill="white"/>
    <path d="M9.4192 14.4646C8.9517 14.9053 8.69008 15.502 8.6919 16.1236C8.69373 16.7451 8.95885 17.3405 9.42895 17.7788C9.89903 18.2171 10.5356 18.4624 11.1985 18.4606C11.8615 18.4589 12.4966 18.2104 12.9642 17.7697C14.8483 16.0525 17.3725 15.0918 20.0002 15.0918C22.6281 15.0918 25.1522 16.0525 27.0364 17.7697C27.2681 17.9896 27.5441 18.164 27.8484 18.2827C28.1526 18.4014 28.4792 18.4621 28.8088 18.4611C29.3026 18.461 29.7852 18.3238 30.1961 18.0668C30.6068 17.8099 30.9271 17.4447 31.1166 17.0172C31.3062 16.5898 31.3566 16.1193 31.2612 15.6651C31.1661 15.2109 30.9294 14.7933 30.5812 14.465C24.9074 9.10874 15.0931 9.10874 9.4192 14.4646Z" fill="white"/>
    <path d="M37.6126 7.88177C35.3178 5.68335 32.5778 3.93668 29.5536 2.74421C26.5292 1.55175 23.2812 0.9375 20.0002 0.9375C16.7193 0.9375 13.4714 1.55175 10.447 2.74421C7.4226 3.93668 4.6827 5.68335 2.38795 7.88177C1.92175 8.32369 1.6619 8.92112 1.66557 9.54264C1.66922 10.1642 1.9361 10.7589 2.40748 11.196C2.87885 11.633 3.51612 11.8766 4.1791 11.8732C4.84205 11.8698 5.47642 11.6196 5.94262 11.1777C13.4915 4.01826 26.5089 4.01826 34.0578 11.1777C34.5239 11.6196 35.1584 11.8698 35.8214 11.8732C36.4844 11.8766 37.1216 11.633 37.5929 11.196C38.0644 10.7589 38.3312 10.1642 38.3349 9.54264C38.3386 8.92112 38.0788 8.32369 37.6126 7.88177Z" fill="white"/>
  </svg>

  <div class="flex justify-center container container-phone">
    <div class="mt-3 text-white font-bold" id="time"></div>
  </div>
  <svg class="mt-3" width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.25 4.49409C26.25 2.12623 24.5719 0.208374 22.5 0.208374H3.75C1.67812 0.208374 0 2.12623 0 4.49409V15.9227C0 18.2905 1.67812 20.2084 3.75 20.2084H22.5C24.5719 20.2084 26.25 18.2905 26.25 15.9227C28.3219 15.9227 30 14.0048 30 11.6369V8.7798C30 6.41195 28.3219 4.49409 26.25 4.49409ZM23.75 15.9227C23.75 16.7119 23.1906 17.3512 22.5 17.3512H3.75C3.05937 17.3512 2.5 16.7119 2.5 15.9227V4.49409C2.5 3.7048 3.05937 3.06552 3.75 3.06552H22.5C23.1906 3.06552 23.75 3.7048 23.75 4.49409V15.9227ZM27.5 11.6369C27.5 12.4262 26.9406 13.0655 26.25 13.0655V7.35123C26.9406 7.35123 27.5 7.99052 27.5 8.7798V11.6369Z" fill="white"/>
  </svg>
  <div ref="batterylife" :style="getBatteryLife" class="battery-life bg-white"></div>
</div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      time: null,
      batterylife: 14
    }
  },
  computed: {
    getBatteryLife() {
      return {width: this.batterylife + 'px'}
    }
  },
  mounted() {
    (function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }
    function startTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
        setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
    })();

    navigator.getBattery().then((battery)=> {
      battery.addEventListener('levelchange', function() {    
        this.batterylife = Math.round(0.14 * (battery.level * 100));
    })
    this.batterylife = Math.round(0.14 * (battery.level * 100));
  });
  },
}
</script>

<style lang="scss">
.header-wrapper {
  position: relative;
  .battery-life {
    width: 1px;
    height: 8px;
    position: absolute;
    left: 299px;
    top: 18px;
    border-radius: 2px;
  }
}
</style>
