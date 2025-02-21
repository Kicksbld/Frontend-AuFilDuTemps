<script setup>
import { RouterView } from 'vue-router'
import NavBar from './UI/Components/Navigation/NavBar.vue'
import Footer from './UI/Components/Navigation/Footer.vue'
</script>

<template>
  <NavBar />
  <div class="p-4">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>

</style>
