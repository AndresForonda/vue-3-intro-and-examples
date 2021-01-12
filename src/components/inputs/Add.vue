<template>
  <div class="mt-2 mb-2 pt-2 pb-2">
    <p>{{ title }}</p>
    <div class="flex justify-center">
      <input
        type="text"
        v-model="name"
        @keyup.enter="add"
        :placeholder="inputPlaceholder"
        class="border border-transparent bg-gray-100 border-green-100 rounded-sm focus:outline-none focus:border-green-500 focus:bg-white"
      />
      <button
        class="flex px-2 py-1 text-sm bg-green-400 rounded-sm text-white focus:outline-none disabled:opacity-50 disabled:cursor-default"
        :class="{ 'hover:bg-green-500': listNameExist }"
        :disabled="!listNameExist"
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
        this.$emit("update:modelValue", value);
      },
    },
    listNameExist() {
      return !!this.name;
    },
  },
  methods: {
    add() {
      if (this.listNameExist) {
        this.$emit("add");
      }
    },
  },
};
</script>

<style></style>
