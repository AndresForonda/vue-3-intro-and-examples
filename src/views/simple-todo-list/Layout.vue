<template>
  <div class="flex flex-col p-4 w-screen h-screen">
    <list-admin @add-list="addList" v-model="selectedListId" :lists="lists" />
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import ListAdmin from "./components/list-admin/Layout.vue";
export default {
  name: "SimpleTodoList",
  components: {
    ListAdmin,
  },
  data: () => ({
    lists: [],
    selectedListId: "",
    taskTitle: "",
  }),
  methods: {
    addList(name) {
      this.lists.push({
        id: uuidv4(),
        name,
        tasks: [],
      });
    },
  },
};
</script>

<style></style>
