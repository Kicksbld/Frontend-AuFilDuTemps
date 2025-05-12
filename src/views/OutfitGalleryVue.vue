<template>

<div class="w-full bg-quinary p-10">

    <main class="grid place-content-center min-h-[20vh] w-full">
       
    </main>
<div class="flex">
    <img src="../assets/img/svg/galerieoutfits.svg">
    <hr class="w-full my-2 border-[1px] border-[#D4AF8E] mt-45" />
</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4">
  <img src="../assets/img/png/card.png" class="w-[260px] rotate-[-2deg] shadow-lg rounded-lg" />
  <img src="../assets/img/png/card.png" class="w-[260px] rotate-[1deg] shadow-lg rounded-lg" />
  <img src="../assets/img/png/card.png" class="w-[260px] rotate-[3deg] shadow-lg rounded-lg" />
  <img src="../assets/img/png/card.png" class="w-[260px] rotate-[2deg] shadow-lg rounded-lg" />
  <img src="../assets/img/png/card.png" class="w-[260px] rotate-[3deg] shadow-lg rounded-lg" />

  <!-- Bloc citation -->
  <div class="col-span-1 sm:col-span-2 lg:col-span-1 text-center text-[#f7e5c9] text-base sm:text-lg italic font-light flex flex-col items-center justify-center px-4">
    <img src="../assets/img/svg/separatorBubbles.svg" class="w-8 sm:w-12 mb-2" />
    <Typography variant="h1" component="h1" font="scholar" theme="gold" class="leading-relaxed">
      “L’art lave notre âme de la <br> poussière du quotidien.”<br/>— Pablo Picasso
    </Typography>
    <img src="../assets/img/svg/separatorBubbles.svg" class="w-8 sm:w-12 mt-2 rotate-180" />
  </div>

  <img src="../assets/img/png/card.png" class="w-[260px] rotate-[-1deg] shadow-lg rounded-lg" />
  <img src="../assets/img/png/card.png" class="w-[260px] rotate-[-2deg] shadow-lg rounded-lg" />
  <img src="../assets/img/png/card.png" class="w-[260px] rotate-[1deg] shadow-lg rounded-lg" />
</div>

</div>
</template>

<script setup>
import Typography from '../UI/design-system/Typography.vue';


</script>

<style scoped>
.text-shadow-custom {
  text-shadow: 0 0 10px #E7B276;
}

</style>