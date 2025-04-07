<script setup>
import Header from "../UI/Components/Header.vue";
import { onMounted } from "vue";

onMounted(async () => {
  try {
    const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/me`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!data.ok) {
      throw new Error('Failed to fetch session data');
    }
    
    const session = await data.json();
    console.log('Session data:', session);

  } catch (error) {
    console.error('Error fetching session:', error);
  }
});
</script>

<template>
  <Header />
</template>
