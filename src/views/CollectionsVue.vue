<template>
    <main class="grid place-content-center min-h-[50vh] w-full">
        <h1 class="text-4xl text-red-500">Collection Page under development</h1>
        <div class="flex flex-col gap-4 mt-4">
            <RouterLink class="text-blue-500" to="/products">Products</RouterLink>
            <RouterLink class="text-blue-500" to="/outfit-gallery">Outfit Collection</RouterLink>
        </div>
    </main>

  <div class="container">
    <div class="scroll-bar" :style="{ height: `${barHeight}%` }"></div>
    <div class="content">
    
      <!-- <div v-for="i in 10" :key="i" class="content-item">Item {{ i }}</div> -->
    </div>
  </div>

</template>

<script>

import { gsap } from "gsap";
    
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollToPlugin);

export default {
  data() {
    return {
      scrollPosition: 0,
      documentHeight: 0,
      windowHeight: 0,
      barHeight: 0,
    };
  },
  mounted() {
    this.updateScroll();
    window.addEventListener('scroll', this.onScroll);
    window.addEventListener('resize', this.updateScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.updateScroll);
  },
  methods: {
    onScroll() {
      this.scrollPosition = window.scrollY;
      this.updateBarHeight();
    },
    updateScroll() {
      this.documentHeight = document.documentElement.scrollHeight;
      this.windowHeight = window.innerHeight;
      this.updateBarHeight();
    },
    updateBarHeight() {
      const maxScroll = this.documentHeight - this.windowHeight;
      this.barHeight = (this.scrollPosition / maxScroll) * 100;
    },
  },
};
</script>

<style scoped>
/* .container {
  height: 100vh;
  position: relative;
  padding: 20px;
  background-color: #f0f0f0;
} */

.scroll-bar {
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  width: 10px;
  background-color: #007bff;
  transition: height 0.1s ease;
}

.content {
  margin-top: 50px;
  height: 2000px; 
} 

/* .content-item {
  padding: 10px;
  margin: 5px 0;
  background-color: #ddd;
  border-radius: 5px;
}  */
</style>


