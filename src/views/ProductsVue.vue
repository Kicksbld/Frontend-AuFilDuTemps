<template>
    <main class="grid place-content-center min-h-[50vh] w-full">
        <h1 class="text-4xl text-red-500">Products Page under development</h1>
    </main>

    <carousel :pictures="pictures" />
</template>


<script>
  
import { Carousel } from 'flowbite-vue'

const pictures = [
  {src: './img/carous1', alt: 'img 1'},
  {src: '/images/img-2.svg', alt: 'Image 2'},
  {src: '/images/img-3.svg', alt: 'Image 3'},
]
</script>

<style lang="css" scoped>

</style>