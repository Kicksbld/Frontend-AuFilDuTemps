<template>
  <div class="w-full bg-quinary p-10">
    <main class="grid place-content-center min-h-[20vh] w-full"></main>

    <div class="flex items-center gap-4 mb-8">
      <img src="../assets/img/svg/galerieoutfits.svg" />
      <hr class="flex-grow border-[1px] border-gold mt-40" />
    </div>

    <div class="flex flex-col items-center gap-12">
      <!-- Section avec images statiques associées à un ID produit -->
      <div class="flex flex-wrap justify-center gap-8">
        <RouterLink :to="`/product/1`">
          <img src="../assets/img/png/pull.png" class="w-[260px] shadow-lg rotate-[-2deg] cursor-pointer" />
        </RouterLink>
        <RouterLink :to="`/product/2`">
          <img src="../assets/img/png/jean.png" class="w-[260px] shadow-lg rotate-[1deg] cursor-pointer" />
        </RouterLink>
        <RouterLink :to="`/product/3`">
          <img src="../assets/img/png/t-shirt.png" class="w-[360px] shadow-lg rotate-[2deg] cursor-pointer" />
        </RouterLink>
      </div>

      <div class="flex flex-col lg:flex-row justify-center items-start gap-12 mt-12">
        <div class="flex flex-row gap-8">
          <img src="../assets/img/png/collection1.png" class="w-[260px] shadow-lg rounded-lg rotate-[-1deg]" />
          <img src="../assets/img/png/collection2.png" class="w-[260px] shadow-lg rounded-lg rotate-[-2deg]" />
        </div>

        <div class="text-gold text-base sm:text-lg italic font-light text-center px-6 max-w-sm">
          <img src="../assets/img/svg/separatorBubbles.svg" class="w-8 sm:w-12 mb-4 mx-auto" />
          <Typography variant="h1" component="h1" font="scholar" theme="gold" class="leading-relaxed">
            “L’art lave notre âme de la <br />poussière du quotidien.”<br />— Pablo Picasso
          </Typography>
          <img src="../assets/img/svg/separatorBubbles.svg" class="w-8 sm:w-12 mt-4 mx-auto rotate-180" />
        </div>
      </div>

      <ParticlesBackground />
    </div>
  </div>
</template>

<script setup>
import Typography from '../UI/design-system/Typography.vue'
import ParticlesBackground from "@/UI/Components/ParticlesBackground.vue"
</script>
