<template>
  <div class="mt-2 mb-2 pt-2 pb-2">
    <h2>Choose list</h2>
    <p v-if="!existLists" class="text-gray-400">Add at least one list</p>
    <select
      v-else
      v-model="value"
      class="border border-transparent border-green-100 bg-gray-100 rounded-sm focus:outline-none focus:border-green-500"
    >
      <option v-for="list in lists" :key="list.id" :value="list.id">
        {{ list.name }}
      </option>
    </select>
  </div>
</template>

<script>
/**
 * The purpose of this component is to try to explain how to use v-model and event emitters
 * to allow two way binding for vue props attributes
 *
 * - parent component must use v-model to link a reactive property to the child component
 *
 * - v-model will pass the property as 'modelValue' through props, this is one way
 *   binding (parent to child binding). NOTE: Vue 2 use 'value' instead of 'modelValue'
 *
 * - To allow two way binding, we use a computed property (value) with setter and getter methods.
 *
 * - The getter method returns the value of the property that is being passed with v-model (modelValue)
 *
 * - The setter method emits an event when the value property changes, this is when a different option
 *   is selected, this will update the value of the property passed through v-model in the parent
 *   component
 */
export default {
  name: "SelectList",
  props: {
    lists: {
      required: true,
      type: Array,
    },
    modelValue: {
      // For Vue 2 use value
      default: "",
      type: String,
    },
  },
  computed: {
    value: {
      get() {
        return this.modelValue; // use this.value in Vue 2
      },
      set(value) {
        // this.$emit("input", this.selectedList); Use 'input' event in Vue 2
        this.$emit("update:modelValue", value);
      },
    },
    existLists() {
      return this.lists ? !!this.lists.length : false;
    },
  },
};
</script>
