<template>
  <div class="p-4 divide-y">
    <h2 class="text-2xl">List admin</h2>
    <add-list v-model="listName" @add-list="addList" />
    <select-list v-model="selectedListId" :lists="lists" />
  </div>
</template>

<script>
import AddList from "./AddList.vue";
import SelectList from "./SelectList.vue";
export default {
  name: "ListAdmin",
  components: {
    AddList,
    SelectList,
  },
  props: {
    lists: {
      required: true,
      type: Array,
    },
    modelValue: {
      required: true,
      type: String,
    },
  },
  computed: {
    selectedListId: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  data: () => ({
    listName: "",
  }),
  methods: {
    addList() {
      this.$emit("add-list", this.listName);
      this.listName = "";
    },
  },
};
</script>

<style></style>
