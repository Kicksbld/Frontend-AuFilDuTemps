<script setup>
import { RouterView, useRoute } from "vue-router";
import NavBar from "./UI/Components/Navigation/NavBar.vue";
import Footer from "./UI/Components/Navigation/Footer.vue";
import { computed } from 'vue';
import BottomNav from "./UI/Components/Navigation/BottomNav.vue";

const route = useRoute();
const hideNavAndFooter = computed(() => {
  return ['/log-in', '/sign-up', '/home-game', '/competition-game', '/game-end'].includes(route.path);
});


//Backend Endpoints Exemples

// Coupons

</script>

<template>
  <div class="flex flex-col">
    <div>
      <NavBar v-if="!hideNavAndFooter" />
      <BottomNav v-if="!hideNavAndFooter" />
    </div>
    
    <RouterView />
    <Footer v-if="!hideNavAndFooter" />
  </div>
</template>

<style scoped></style>
