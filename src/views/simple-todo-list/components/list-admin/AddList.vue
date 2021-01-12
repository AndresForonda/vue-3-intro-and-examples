<template>
  <div class="mt-2 mb-2 pt-2 pb-2">
    <p>Add new list</p>
    <div class="flex justify-center">
      <input
        type="text"
        v-model="listName"
        @keyup.enter="addList"
        placeholder="List name"
        class="border border-transparent bg-gray-100 border-green-100 rounded-sm focus:outline-none focus:border-green-500 focus:bg-white"
      />
      <button
        class="flex px-2 py-1 text-sm bg-green-400 rounded-sm text-white focus:outline-none disabled:opacity-50 disabled:cursor-default"
        :class="{ 'hover:bg-green-500': listNameExist }"
        :disabled="!listNameExist"
        @click="addList"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="20"
          height="20"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <span class="align-middle">Add list</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddList",
  props: {
    modelValue: {
      required: true,
      type: String,
    },
  },
  computed: {
    listName: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
    listNameExist() {
      return !!this.listName;
    },
  },
  methods: {
    addList() {
      if (this.listNameExist) {
        this.$emit("add-list");
      }
    },
  },
};
</script>

<style></style>
