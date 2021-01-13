<template>
  <div
    class="flex rounded-full border border-opacity-30 border-green-400 hover:bg-white hover:border hover:border-opacity-100 my-4 p-3"
    :class="{ 'bg-gray-100': done }"
  >
    <p
      class="text-left mr-2 flex flex-wrap flex-grow items-center cursor-pointer align-middle truncate"
      :class="{ 'line-through': done }"
      @click="done = !done"
    >
      <input
        type="checkbox"
        class="rounded-full outline-none mr-2 cursor-pointer"
        v-model="done"
      />
      <span class="align-middle">{{ task.name }}</span>
    </p>
    <p
      @click="deleteTask"
      class="cursor-pointer bg-red-400 p-1 rounded-full text-white ml-2"
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
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: {
      type: Object,
      default: {},
    },
  },
  computed: {
    done: {
      get() {
        return this.task ? this.task.done : false;
      },
      set(value) {
        this.$emit("update-task-status", { task: this.task, done: value });
      },
    },
  },
  methods: {
    deleteTask() {
      console.log("hey");
      this.$emit("delete-task", this.task.id);
    },
  },
};
</script>

<style></style>
