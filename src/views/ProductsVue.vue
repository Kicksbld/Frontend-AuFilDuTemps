<template>
  <main class="grid place-content-center min-h-[50vh] w-full">
    <h1 class="text-4xl text-red-500">Products Page under development</h1>
  </main>
  <div class="flex justify-between items-center">
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
    <div class="ml-[1%]" id="img_primary" >
      <img class="w-125" src="../assets/img/png/card.png" alt="produit img"
        style="clip-path: polygon(0% 0%, 100% 3%, 100% 98%, 0% 100%);">
    </div>

    <div class="ml-[5%] w-[8°%]" id="detail_products">
      <div class="flex justify-between items-center">
        <Typography variant="h1" component="h1" font="scholar" weight="light" theme="tercery">
          Nom du produit
        </Typography>
        <img id="like_button" class="w-10" src="../assets/img/png/like.png" alt="button like">
      </div>
      <Typography class="mb-[5%]" variant="h2" component="h2" font="halenoir" weight="medium" theme="primary">
        45,95 EUR
      </Typography>

      <hr>
      <Typography class="mt-[60px] mb-[5%]" variant="h3" component="h3" font="halenoir" weight="regular" theme="tercery">
        Noir : 6543688
      </Typography>


      <button>AJOUTER</button>
      <Typography class="mt-[5%]" variant="p" component="p" font="halenoir" weight="light" theme="tercery">
        Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens scuta qui
        habitus iram pugnantium concitat et dolorem proximos
      </Typography>
      <Typography variant="p" component="p" font="halenoir" weight="light" theme="tercery">
        Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens scuta qui
        habitus iram pugnantium concitat et dolorem proximos
      </Typography>
      <Typography variant="p" component="p" font="halenoir" weight="light" theme="tercery">
        Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens scuta qui
        habitus iram pugnantium concitat et dolorem proximos
      </Typography>
     
    </div>
  </div>


  <Typography class="mt-[15%] mb-[5%]" variant="h1" component="h1" font="halenoir" weight="light" theme="tercery">
          Article similaire
  </Typography>
<div class="flex gap-[2%] items-center justify-center">
  <img class="w-40" src="../assets/img/png/card.png" alt="produit img"
        style="clip-path: polygon(0% 0%, 100% 5%, 100% 100%, 0% 100%);">
      <img class="w-40" src="../assets/img/png/card.png" alt="produit img"
        style="clip-path: polygon(0% 0%, 90% 0%, 100% 90%, 0% 100%);">
      <img class="w-40" src="../assets/img/png/card.png" alt="produit img"
        style="clip-path: polygon(0% 0%, 100% 3%, 100% 100%, 0% 100%);">
      <img class="w-40" src="../assets/img/png/card.png" alt="produit img"
        style="clip-path: polygon(0% 0%, 100% 3%, 100% 98%, 0% 100%);">
      <img class="w-40" src="../assets/img/png/card.png" alt="produit img"
        style="clip-path: polygon(0% 0%, 100% 3%, 100% 98%, 0% 100%);">
      <img class="w-40" src="../assets/img/png/card.png" alt="produit img"
        style="clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%);">
    </div>
    
  <br>
  <fwb-carousel :pictures="pictures" />

</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue'
import caroussel1 from '../assets/img/png/carous1.png';
import caroussel2 from '../assets/img/png/carous2.png';
import caroussel3 from '../assets/img/png/carous3.png'
import Typography from '../UI/design-system/Typography.vue';

const pictures = [
  { src: caroussel1, alt: 'Image 1' },
  { src: caroussel2, alt: 'Image 2' },
  { src: caroussel3, alt: 'Image 3' },
]
</script>

<style>
</style>