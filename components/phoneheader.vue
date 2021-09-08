<template>
<div class="sm:flex justify-center hidden">
  <div class="flex justify-center container container-phone">
    <div class="mt-3 text-white font-bold" id="time"></div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      time: null
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
  },
}
</script>

<style lang="scss">
</style>
