<template>
  <div class="p-4 divide-y border rounded-md mb-2">
    <h2 class="text-2xl pt-2 pb-2">List admin</h2>
    <add-list
      @add="addList"
      buttonLabel="Add list"
      inputPlaceholder="List name"
      title="Add new list"
      v-model="listName"
    />
    <select-list v-model="selectedListId" :lists="lists" />
  </div>
</template>

<script>
import AddList from "@/components/inputs/Add.vue";
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
