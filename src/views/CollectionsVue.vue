<template>
    <main class="grid place-content-center min-h-[50vh] w-full">
        <h1 class="text-4xl text-red-500">Collection Page under development</h1>
        <div class="flex flex-col gap-4 mt-4">
            <RouterLink class="text-blue-500" to="/products">Products</RouterLink>
            <RouterLink class="text-blue-500" to="/outfit-gallery">Outfit Collection</RouterLink>
        </div>
    </main>

  <!-- <div class="container">
    <div class="scroll-bar" :style="{ height: `${barHeight}%` }"></div>
    <div class="content">
    
   <div v-for="i in 10" :key="i" class="content-item">Item {{ i }}</div> 
    </div>
  </div> -->
  <Typography variant="h1" component="h1" font="scholar" weigth="light" theme="tercery" class="text-9xl">PRODUIT</Typography>

  <div class="grid grid-cols-2 gap-3 item-center justify-center">
  <img class="w-[500px]" src="../assets/img/png/card.png" alt="produit img" style="clip-path: polygon(0% 0%, 100% 3%, 100% 98%, 0% 100%);">
  <Typography class="absolute text-center">Pantalon</Typography>
  <img class="w-[500px]" src="../assets/img/png/card.png" alt="produit img" style="clip-path: polygon(0% 0%, 100% 3%, 100% 98%, 0% 100%);">
  <Typography class="absolute">T-shirt</Typography>
  <img class="w-[500px]" src="../assets/img/png/card.png" alt="produit img" style="clip-path: polygon(0% 0%, 100% 3%, 100% 98%, 0% 100%);">
  <Typography class="absolute">Pull</Typography>
  <img class="w-[500px]" src="../assets/img/png/card.png" alt="produit img" style="clip-path: polygon(0% 0%, 100% 3%, 100% 98%, 0% 100%);">
  <Typography class="absolute">Sweat shirt</Typography>
</div>




</template>

<script setup>
import Typography from '../UI/design-system/Typography.vue';


// import { gsap } from "gsap";
    
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";


// gsap.registerPlugin(ScrollToPlugin);

// export default {
//   data() {
//     return {
//       scrollPosition: 0,
//       documentHeight: 0,
//       windowHeight: 0,
//       barHeight: 0,
//     };
//   },
//   mounted() {
//     this.updateScroll();
//     window.addEventListener('scroll', this.onScroll);
//     window.addEventListener('resize', this.updateScroll);
//   },
//   beforeDestroy() {
//     window.removeEventListener('scroll', this.onScroll);
//     window.removeEventListener('resize', this.updateScroll);
//   },
//   methods: {
//     onScroll() {
//       this.scrollPosition = window.scrollY;
//       this.updateBarHeight();
//     },
//     updateScroll() {
//       this.documentHeight = document.documentElement.scrollHeight;
//       this.windowHeight = window.innerHeight;
//       this.updateBarHeight();
//     },
//     updateBarHeight() {
//       const maxScroll = this.documentHeight - this.windowHeight;
//       this.barHeight = (this.scrollPosition / maxScroll) * 100;
//     },
//   },
// };
</script>

<style scoped>
/* .container {
  height: 100vh;
  position: relative;
  padding: 20px;
  background-color: #f0f0f0;
} */

/* .scroll-bar {
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
}  */

/* .content-item {
  padding: 10px;
  margin: 5px 0;
  background-color: #ddd;
  border-radius: 5px;
}  */
</style>


