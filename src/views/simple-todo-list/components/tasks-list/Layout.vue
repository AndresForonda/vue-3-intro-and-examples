<template>
  <div class="p-4 border">
    <h2 v-if="!list.name" class="text-gray-400">Select a list to add tasks</h2>
    <div v-else>
      <h2 class="text-2xl">Tasks in list {{ list.name }}</h2>
      <add-task
        @add="add"
        buttonLabel="Add task"
        inputPlaceholder="Task"
        title="Add new list"
        v-model="task"
      />
      <div class="divide-y">
        <p v-for="task in list.tasks" :key="task.id">
          {{ task.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AddTask from "@/components/inputs/Add.vue";
export default {
  name: "TasksList",
  components: {
    AddTask,
  },
  props: {
    list: {
      default: {},
      type: Object,
    },
    modelValue: {
      required: true,
      type: String,
    },
  },
  computed: {
    task: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
    taskIsEmpty() {
      return this.task.length === 0;
    },
  },
  methods: {
    add() {
      if (!this.taskIsEmpty) {
        this.$emit("add-task");
      }
    },
  },
};
</script>

<style></style>
