<template>
    <main class="grid place-content-center min-h-[50vh] w-full">
        <h1 class="text-4xl text-red-500">Products Page under development</h1>
    </main>
  <fwb-carousel :pictures="pictures" />
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue'

const pictures = [
  {src: './img/carous1.png', alt: 'Image 1'},
  {src: './img/carous2.png', alt: 'Image 2'},
  {src: './img/carous3.png', alt: 'Image 3'},
]
</script>

<style>

</style>