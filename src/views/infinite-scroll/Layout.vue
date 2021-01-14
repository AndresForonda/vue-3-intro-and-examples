<template>
  <div class="p-10 bg-ocre">
    <div class="mt-10 mb-10">
      <h2 class="text-8xl">🍻 Punk beers for all 🍺</h2>
      <router-link to="/" class="italic">Go To Home</router-link>
    </div>
    <div v-if="beers.length" class="flex flex-wrap justify-center">
      <!-- class="grid grid-col-2 grid-col-2 mx-auto p-8 gap-6 auto-cols-max" -->
      <transition-group name="list">
        <beer v-for="beer in beers" :key="beer.id" :beer="beer" />
      </transition-group>
    </div>
  </div>
</template>

<script>
import Beer from "./components/Beer.vue";
const url = "https://api.punkapi.com/v2/beers/random";
export default {
  name: "InfiniteScroll",
  components: {
    Beer,
  },
  data: () => ({
    beers: [],
    bottom: false,
    howMany: 10,
  }),
  created() {
    window.addEventListener("scroll", () => {
      this.bottom = this.bottomVisible();
    });
    this.getALotOfBeers();
  },
  methods: {
    bottomVisible() {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    async getBeer() {
      const response = await fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const data = await response.json();
      const beer = data[0];
      if (!beer.image_url) {
        this.getBeer();
      } else {
        this.beers.push(beer); // parses JSON response into native JavaScript objects
      }
    },
    getALotOfBeers() {
      const numberOfRequests = this.howMany;

      for (let i = 0; i < numberOfRequests; i += 1) {
        this.getBeer();
      }
    },
  },
  watch: {
    bottom(newVal) {
      if (newVal) {
        this.getALotOfBeers();
      }
    },
  },
};
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
