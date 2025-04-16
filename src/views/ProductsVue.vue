<template>

<div class="w-full bg-quinary p-10">

  <div class="flex justify-between pt-40 min-h-screen">
    <div class="flex-col flex items-center gap-[3px]" id="img_products">
      <img class="w-20" src="../assets/img/png/card.png" alt="produit img"
        style="clip-path: polygon(0% 15%, 100% 0%, 100% 100%, 0% 100%);">
      <img class="w-20" src="../assets/img/png/card.png" alt="produit img"
        style="clip-path: polygon(0% 0%, 100% 3%, 100% 90%, 0% 100%);">
      <img class="w-20" src="../assets/img/png/card.png" alt="produit img"
        style="clip-path: polygon(0% 0%, 100% 3%, 100% 100%, 0% 100%);">
      <img class="w-20" src="../assets/img/png/card.png" alt="produit img"
        style="clip-path: polygon(0% 0%, 100% 3%, 100% 98%, 0% 100%);">
      <img class="w-20" src="../assets/img/png/card.png" alt="produit img"
        style="clip-path: polygon(0% 0%, 100% 3%, 100% 98%, 0% 100%);">
      <img class="w-20" src="../assets/img/png/card.png" alt="produit img"
        style="clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%);">
    </div>
    <div class="ml-[1%]" id="img_primary">
      <img class="w-125" src="../assets/img/png/card.png" alt="produit img"
        style="clip-path: polygon(0% 0%, 100% 3%, 100% 98%, 0% 100%);">
    </div>

    <div class="ml-[5%] w-[8°%]" id="detail_products">
      <div class="flex justify-between items-center">
        <Typography variant="h1" component="h1" font="scholar" weight="regular" theme="quaternary">
          Nom du produit
        </Typography>
        <router-link to="/favourites" >
    <img class="w-10" src="../assets/img/png/like.png" alt="like icon">
  </router-link>
      </div>
      <Typography class="mb-[5%]" variant="h2" component="h2" font="halenoir" weight="regular" theme="quaternary">
        45,95 EUR
      </Typography>

      <hr class="bg-[#BF8E63] h-[2px] my-4">

      <Typography class="mt-[60px] mb-[5%]" variant="h3" component="h3" font="halenoir" weight="regular"
        theme="quaternary">
        Noir - 6543688
      </Typography>


      <Button variant="secondary" size="medium" class="w-full">AJOUTER</Button>

      <div class="flex gap-3 p-2">
                    <Button class="w-full" @click="router.push('')" variant="secondary" size="medium">
                        XS
                    </Button>
                    <Button class="w-full" @click="router.push('')" variant="secondary" size="medium">
                        S
                    </Button>
                    <Button class="w-full" @click="router.push('')" variant="secondary" size="medium">
                        M
                    </Button>
                    <Button class="w-full" @click="router.push('')" variant="secondary" size="medium">
                        L
                    </Button>
                    <Button class="w-full" @click="router.push('')" variant="secondary" size="medium">
                        XL
                    </Button>
                </div>
     
      <Typography class="mt-[5%]" variant="p" component="p" font="halenoir" weight="regular" theme="quaternary">
        Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens scuta qui
        habitus iram pugnantium concitat et dolorem proximos
      </Typography>
      <Typography variant="p" component="p" font="halenoir" weight="regular" theme="quaternary">
        Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens scuta qui
        habitus iram pugnantium concitat et dolorem proximos
      </Typography>
      <Typography variant="p" component="p" font="halenoir" weight="regular" theme="quaternary">
        Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens scuta qui
        habitus iram pugnantium concitat et dolorem proximos
      </Typography>

    </div>
  </div>
  <Typography class="mt-[15%] mb-[5%]" variant="h1" component="h1" font="halenoir" weight="regular" theme="quaternary">
  Articles similaires
</Typography>
<div class="grid grid-cols-6 gap-[2%] items-center justify-center">
  <div class="relative w-full">
    <img class="w-full" src="../assets/img/png/card.png" alt="produit img"
      style="clip-path: polygon(0% 10%, 100% 10%, 100% 100%, 0% 100%);">
      <router-link to="/favourites" >
    <img class="absolute bottom-2 right-2 w-6" src="../assets/img/png/like.png" alt="like icon">
  </router-link>
  </div>
  <div class="relative w-full">
    <img class="w-full" src="../assets/img/png/card.png" alt="produit img"
      style="clip-path: polygon(0% 10%, 100% 10%, 100% 100%, 0% 100%);">
      <router-link to="/favourites" >
    <img class="absolute bottom-2 right-2 w-6" src="../assets/img/png/like.png" alt="like icon">
  </router-link>
  </div>
  <div class="relative w-full">
    <img class="w-full" src="../assets/img/png/card.png" alt="produit img"
      style="clip-path: polygon(0% 10%, 100% 10%, 100% 100%, 0% 100%);">
      <router-link to="/favourites" >
    <img class="absolute bottom-2 right-2 w-6" src="../assets/img/png/like.png" alt="like icon">
  </router-link>
  </div>
  <div class="relative w-full">
    <img class="w-full" src="../assets/img/png/card.png" alt="produit img"
      style="clip-path: polygon(0% 10%, 100% 10%, 100% 100%, 0% 100%);">
      <router-link to="/favourites" >
    <img class="absolute bottom-2 right-2 w-6" src="../assets/img/png/like.png" alt="like icon">
  </router-link>
  </div>
  <div class="relative w-full">
    <img class="w-full" src="../assets/img/png/card.png" alt="produit img"
      style="clip-path: polygon(0% 10%, 100% 10%, 100% 100%, 0% 100%);">
      <router-link to="/favourites" >
    <img class="absolute bottom-2 right-2 w-6" src="../assets/img/png/like.png" alt="like icon">
  </router-link>
  </div>
  <div class="relative w-full">
    <img class="w-full" src="../assets/img/png/card.png" alt="produit img"
      style="clip-path: polygon(0% 10%, 100% 10%, 100% 100%, 0% 100%);">
    <img class="absolute bottom-2 right-2 w-6" src="../assets/img/png/like.png" alt="like icon">
  </div>
</div>
<!-- 
<Typography class="mt-[15%] mb-[5%]" variant="h1" component="h1" font="halenoir" weight="regular" theme="tercery">
  Voir plus
</Typography>

<div class="grid grid-cols-6 gap-[2%] items-center justify-center">
  <div class="relative w-full">
    <img class="w-full" src="../assets/img/png/card.png" alt="produit img"
      style="clip-path: polygon(0% 10%, 100% 10%, 100% 100%, 0% 100%);">
      <router-link to="/favourites" >
    <img class="absolute bottom-2 right-2 w-6" src="../assets/img/png/like.png" alt="like icon">
  </router-link>
  </div>
  <div class="relative w-full">
    <img class="w-full" src="../assets/img/png/card.png" alt="produit img"
      style="clip-path: polygon(0% 10%, 100% 10%, 100% 100%, 0% 100%);">
      <router-link to="/favourites" >
    <img class="absolute bottom-2 right-2 w-6" src="../assets/img/png/like.png" alt="like icon">
  </router-link>
  </div>
  <div class="relative w-full">
    <img class="w-full" src="../assets/img/png/card.png" alt="produit img"
      style="clip-path: polygon(0% 10%, 100% 10%, 100% 100%, 0% 100%);">
      <router-link to="/favourites" >
    <img class="absolute bottom-2 right-2 w-6" src="../assets/img/png/like.png" alt="like icon">
  </router-link>
  </div>
  <div class="relative w-full">
    <img class="w-full" src="../assets/img/png/card.png" alt="produit img"
      style="clip-path: polygon(0% 10%, 100% 10%, 100% 100%, 0% 100%);">
      <router-link to="/favourites" >
    <img class="absolute bottom-2 right-2 w-6" src="../assets/img/png/like.png" alt="like icon">
  </router-link>
  </div>
  <div class="relative w-full">
    <img class="w-full" src="../assets/img/png/card.png" alt="produit img"
      style="clip-path: polygon(0% 10%, 100% 10%, 100% 100%, 0% 100%);">
      <router-link to="/favourites" >
    <img class="absolute bottom-2 right-2 w-6" src="../assets/img/png/like.png" alt="like icon">
  </router-link>
  </div>
  <div class="relative w-full">
    <img class="w-full" src="../assets/img/png/card.png" alt="produit img"
      style="clip-path: polygon(0% 10%, 100% 10%, 100% 100%, 0% 100%);">
      <router-link to="/favourites" >
    <img class="absolute bottom-2 right-2 w-6" src="../assets/img/png/like.png" alt="like icon">
  </router-link>
  </div>
</div> -->

</div>
  <!-- 
  <fwb-carousel :pictures="pictures" /> -->

</template>

<script setup>
import Typography from '../UI/design-system/Typography.vue';
import Button from '../UI/design-system/Button.vue';

import { FwbCarousel } from 'flowbite-vue'
import caroussel1 from '../assets/img/png/carous1.png';
import caroussel2 from '../assets/img/png/carous2.png';
import caroussel3 from '../assets/img/png/carous3.png';

const pictures = [
  { src: caroussel1, alt: 'Image 1' },
  { src: caroussel2, alt: 'Image 2' },
  { src: caroussel3, alt: 'Image 3' },
]
</script>

<style>
.text-shadow-custom {
  text-shadow: 0 0 10px #E7B276;
}
</style>