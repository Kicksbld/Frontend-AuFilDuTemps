<script setup>
import { useDataBaseStore } from "../stores/dataBaseData";
import { onMounted, computed } from "vue";

const { fetchDBData, state } = useDataBaseStore();

onMounted(() => {
    fetchDBData("users");
});

const users = computed(() => Array.isArray(state.data) ? state.data : []);

</script>

<template>
  <main>
   <h1>Au Fil Du temps</h1>

   <div v-for="user in users" :key="user.id">
    <h2>{{ user.name }}</h2>
   </div>
  
  </main>
</template>
