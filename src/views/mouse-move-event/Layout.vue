<template>
  <div
    @mousemove="xCoordinate"
    class="flex flex-wrap w-screen h-screen justify-center content-center"
  >
    <!-- :style="{ backgroundColor: `hsl(${x},80%, 50%)` }" -->
    <div class="font-bold">
      <!-- :style="{ color: `hsl(${x},80%,40%)` }" -->
      <h1 class="text-2xl">Mouse background color changer</h1>
      <p>Pixels across: {{ x }}</p>
      <router-link to="/">Go to Home</router-link>
    </div>
    <div
      class="bg-red-200 w-10 h-10 fixed"
      :style="{ left: `${x}px`, top: `${y}px` }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "MouseMove",
  data: () => ({
    x: 0,
    y: 0,
  }),
  methods: {
    xCoordinate(e) {
      this.x = e.clientX;
      this.y = e.clientY;
    },
  },
};
</script>
