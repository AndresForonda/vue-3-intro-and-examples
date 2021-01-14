<template>
  <div class="m-4">
    <div
      class="flex flex-col rounded-lg w-auto p-6 text-white h-auto bg-gradient-to-b from-secondary to-primary"
    >
      <div class="mb-3 max-w-xs p-6">
        <h2 class="text-2xl">{{ beer.name }}</h2>
        <p class="italic mb-5">{{ beer.tagline }}</p>
        <p class="text-left">{{ beer.description }}</p>
      </div>
      <div class="flex justify-center max-w-xs">
        <img :src="beer.image_url" :alt="beer.name" class="h-96 mb-3" />
      </div>
      <div class="grid justify-items-start p-6">
        <p class="w-100">Ibu: {{ beer.ibu }}</p>
        <p>Ph: {{ beer.ph }}</p>
        <p>Abv: {{ beer.abv }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Beer",
  props: {
    beer: {
      required: true,
      type: Object,
    },
  },
};
</script>
