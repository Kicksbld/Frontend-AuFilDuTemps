<template>
    <main class="grid place-content-center min-h-[50vh] w-full">
        <h1 class="text-4xl text-red-500">Products Page under development</h1>
    </main>
  <fwb-carousel :pictures="pictures" />
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue'
import caroussel1 from '../assets/img/png/carous1.png';
import caroussel2 from '../assets/img/png/carous2.png';
import caroussel3 from '../assets/img/png/carous3.png'

const pictures = [
  {src: caroussel1, alt: 'Image 1'},
  {src: caroussel2, alt: 'Image 2'}, 
  {src: caroussel3, alt: 'Image 3'},
]
</script>

<style>

</style>