<template>
  <div class="flex flex-col p-4 w-screen h-screen">
    <list-admin @add-list="addList" v-model="selectedListId" :lists="lists" />
    <tasks-list
      :list="list"
      v-model="task"
      @add-task="addTask"
      @update-task-status="updateTaskStatus"
    />
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import ListAdmin from "./components/list-admin/Layout.vue";
import TasksList from "./components/tasks-list/Layout.vue";
const STATUS = {
  DONE: "DONE",
  PROGRESS: "PROGRESS",
  TODO: "TODO",
};
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
        status: STATUS.TODO,
        name: this.task,
      });
      this.task = "";
    },
    updateTaskStatus({ id, status }) {
      this.list.tasks[id].status = status;
    },
  },
};
</script>

<style></style>
