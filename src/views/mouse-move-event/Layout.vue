<template>
  <div
    @mousemove="xCoordinate"
    class="flex flex-wrap w-screen h-screen justify-center content-center"
    :style="{ backgroundColor: `hsl(${x},80%, 50%)` }"
  >
    <div class="font-bold" :style="{ color: `hsl(${x},80%,40%)` }">
      <h1 class="text-2xl">Mouse background color changer</h1>
      <p>Pixels across: {{ x }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MouseMove",
  data: () => ({
    x: 0,
  }),
  methods: {
    xCoordinate(e) {
      this.x = e.clientX;
    },
  },
};
</script>
