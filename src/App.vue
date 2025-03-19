<script setup>
import { RouterView, useRouter } from "vue-router";
import NavBar from "./UI/Components/Navigation/NavBar.vue";
import Footer from "./UI/Components/Navigation/Footer.vue";
import Button from "./UI/design-system/Button.vue";

const router = useRouter();
</script>

<template>
  <div class="app_container">
    <NavBar />
    <RouterView />
    <Button
      @click="router.push('/design-sytem')"
      variant="outline"
      size="medium"
    >
      Design System
    </Button>
    <Footer />
  </div>
</template>

<style scoped></style>
