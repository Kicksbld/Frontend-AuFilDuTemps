<template>
  <div class="w-full bg-quinary p-10">
    <main class="grid place-content-center min-h-[20vh] w-full"></main>

    <div class="flex items-center gap-4 mb-8">
      <img src="../assets/img/svg/galerieoutfits.svg" />
      <hr class="flex-grow border-[1px] border-[#D4AF8E]" />
    </div>

    <div class="flex flex-col items-center gap-12">

 <!-- Haut -->
<div class="flex flex-wrap justify-center gap-8">
  <div v-if="produits[0]">
    <img :src="produits[0].image" class="w-[260px] shadow-lg rounded-lg rotate-[-2deg]" />
  </div>
  <div v-if="produits[1]">
    <img :src="produits[1].image" class="w-[260px] shadow-lg rounded-lg rotate-[1deg]" />
  </div>
  <div v-if="produits[2]">
    <img :src="produits[2].image" class="w-[260px] shadow-lg rounded-lg rotate-[2deg]" />
  </div>
</div>

<!-- Milieu-->
<div class="flex flex-col lg:flex-row justify-center items-center gap-12 mt-12">
  <div class="flex flex-row gap-8">
    <div v-if="produits[1]">
      <img :src="produits[2].image" class="w-[260px] shadow-lg rounded-lg rotate-[-1deg]" />
    </div>
    <div v-if="produits[1]">
      <img :src="produits[1].image" class="w-[260px] shadow-lg rounded-lg rotate-[2deg]" />
    </div>
  </div>

  <!-- Citation -->
  <div class="text-gold text-base sm:text-lg italic font-light text-center px-6 max-w-sm">
    <img src="../assets/img/svg/separatorBubbles.svg" class="w-8 sm:w-12 mb-4 mx-auto" />
    <Typography variant="h1" component="h1" font="scholar" theme="gold" class="leading-relaxed">
      “L’art lave notre âme de la <br />poussière du quotidien.”<br />— Pablo Picasso
    </Typography>
    <img src="../assets/img/svg/separatorBubbles.svg" class="w-8 sm:w-12 mt-4 mx-auto rotate-180" />
  </div>
</div>

<!-- Bas  -->
<div class="flex flex-wrap justify-center gap-8 mt-12">
  <div v-if="produits[2]">
    <img :src="produits[0].image" class="w-[260px] shadow-lg rounded-lg rotate-[1deg]" />
  </div>
  <div v-if="produits[1]">
    <img :src="produits[0].image" class="w-[260px] shadow-lg rounded-lg rotate-[-2deg]" />
  </div>
  <div v-if="produits[2]">
    <img :src="produits[1].image" class="w-[260px] shadow-lg rounded-lg rotate-[2deg]" />
  </div>
  <ParticlesBackground />
</div>


    </div>
  </div>
</template>


<script setup>
import Typography from '../UI/design-system/Typography.vue'
import { ref, onMounted } from 'vue'
import ParticlesBackground from "@/UI/Components/ParticlesBackground.vue";

const produits = ref([])

const fetchProduit = async () => {
  try {
    const response = await fetch(`https://backend-au-fil-du-temps.vercel.app/products`)
    if (!response.ok) throw new Error('Produit non trouvé')
    const data = await response.json()

    produits.value = data.map(produit => ({
      ...produit,
      image: produit.images[0]
    }))
  } catch (error) {
    console.error('Erreur lors de la récupération du produit :', error)
  }
}

onMounted(() => {
  fetchProduit()
})
</script>


<style scoped>
.text-shadow-custom {
  text-shadow: 0 0 10px #E7B276;
}
</style>
