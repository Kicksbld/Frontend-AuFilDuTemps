<script setup>
import { RouterView } from "vue-router";
import NavBar from "./UI/Components/Navigation/NavBar.vue";
import Footer from "./UI/Components/Navigation/Footer.vue";
</script>

<template>
  <div>
    <NavBar />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped></style>
