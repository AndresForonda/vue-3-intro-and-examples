<template>
  <div class="mt-2 mb-2 pt-2 pb-2">
    <p>{{ title }}</p>
    <div class="flex justify-center">
      <input
        :placeholder="inputPlaceholder"
        :value="name"
        @input="(e) => (name = e.target.value)"
        @keyup.enter="add"
        class="border border-transparent bg-gray-100 border-green-100 rounded-sm focus:outline-none focus:border-green-500 focus:bg-white"
        type="text"
      />
      <button
        class="flex px-2 py-1 text-sm bg-green-400 rounded-sm text-white focus:outline-none disabled:opacity-50 disabled:cursor-default"
        :class="{ 'hover:bg-green-500': !nameIsEmpty }"
        :disabled="nameIsEmpty"
        @click="add"
      >
        {{ buttonLabel }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddList",
  props: {
    buttonLabel: {
      required: true,
      type: String,
    },
    inputPlaceholder: {
      required: true,
      type: String,
    },
    modelValue: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
  },
  computed: {
    name: {
      get() {
        return this.modelValue;
      },
      set(value) {
        console.log("ahy");
        this.$emit("update:modelValue", value);
      },
    },
    nameIsEmpty() {
      return this.name.length === 0;
    },
  },
  methods: {
    add() {
      if (!this.nameIsEmpty) {
        this.$emit("add");
      }
    },
  },
};
</script>

<style></style>
