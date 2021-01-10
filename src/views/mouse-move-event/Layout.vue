<template>
  <div
    @mousemove="xCoordinate"
    class="box"
    :style="{ backgroundColor: `hsl(${x},80%, 50%)` }"
  >
    <div>
      <h4>Mouse background color changer</h4>
      <button @click="decrement">-</button>
      {{ counter }}
      <button @click="increment">+</button>
      <p>Pixels across: {{ x }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MouseMove",
  data: () => ({
    x: 0,
    counter: 0,
  }),
  methods: {
    decrement() {
      this.counter -= 1;
    },
    increment() {
      this.counter += 1;
    },
    xCoordinate(e) {
      this.x = e.clientX;
    },
  },
};
</script>

<style scoped>
.box {
  width: 100vw;
  height: 100vh;
}
</style>
