<script setup>
import { useDataBaseStore } from "../stores/dataBaseData";
import { onMounted, computed } from "vue";
import { RouterLink } from "vue-router";
import PanZoomMap from "../UI/Components/PanZoomMap.vue";

const { fetchDBData, state } = useDataBaseStore();

onMounted(() => {
  fetchDBData("users");
});

const users = computed(() => Array.isArray(state.data) ? state.data : []);

</script>

<template>
  <main class="grid place-content-center min-h-[50vh] w-full">
    <h1 class="text-4xl text-red-500">Home Page under development</h1>
    <div class="flex flex-col gap-4 mt-4">
      <RouterLink class="text-blue-500" to="/collections">Collections</RouterLink>
      <RouterLink class="text-blue-500" to="/competition-game">Competition Game</RouterLink>
    </div>
    <PanZoomMap />
  </main>

</template>
