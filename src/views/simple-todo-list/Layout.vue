<template>
  <div class="w-screen h-screen flex justify-center">
    <div class="flex flex-col p-4 w-96">
      <list-admin @add-list="addList" v-model="selectedListId" :lists="lists" />
      <tasks-list
        :list="list"
        v-model="task"
        @add-task="addTask"
        @update-task-status="updateTaskStatus"
        @delete-task="deleteTask"
      />
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import ListAdmin from "./components/list-admin/Layout.vue";
import TasksList from "./components/tasks-list/Layout.vue";
export default {
  name: "SimpleTodoList",
  components: {
    ListAdmin,
    TasksList,
  },
  computed: {
    list() {
      return this.lists.find((list) => list.id === this.selectedListId);
    },
  },
  data: () => ({
    lists: [],
    selectedListId: "",
    task: "",
  }),
  methods: {
    addList(name) {
      const id = uuidv4();
      this.lists.push({
        id,
        name,
        tasks: [],
      });
      this.selectedListId = id;
    },
    addTask() {
      const id = uuidv4();
      const list = this.list;
      list.tasks.push({
        id,
        done: false,
        name: this.task,
      });
      this.task = "";
    },
    deleteTask(id) {
      const list = this.lists.find((list) => list.id === this.selectedListId);
      list.tasks = list.tasks.filter((task) => task.id !== id);
    },
    updateTaskStatus({ task, done }) {
      task.done = done;
    },
  },
};
</script>

<style></style>
