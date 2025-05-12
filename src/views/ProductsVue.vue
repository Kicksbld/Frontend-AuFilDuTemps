<template>

<div class="w-full bg-quinary p-10">

  <div class="pt-40 min-h-screen flex flex-col">
  <div class="flex justify-between">

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
  
  <div id="img_primary">
    <img class="w-125" src="../assets/img/png/card.png" alt="produit img"
      style="clip-path: polygon(0% 0%, 100% 3%, 100% 98%, 0% 100%);">
  </div>

    <div class="grid grid-col">
    <div v-for="produit in produit" class="ml-[5%] w-[8°%]" id="detail_products">
  <div :key="produit.id" class="flex justify-between items-center">
    <RouterLink :to="`/product/${produit.id}`">
    <Typography variant="h1" component="h1" font="scholar" weight="regular" theme="gold">
      {{ produit.name }}
    </Typography>
  </RouterLink>

    <Button @click="ajouterAuxFavoris(produit)">
  <img class="w-10" src="../assets/img/png/likeBeige.png" alt="like icon" />
</Button>

  </div>

  <Typography class="mb-[5%]" variant="h2" component="h2" font="halenoir" weight="regular" theme="gold">
    {{ produit.price }} EUR
  </Typography>

  <hr class="bg-[#BF8E63] h-[2px] my-4" />

  <Typography class="mt-[60px] mb-[5%]" variant="h3" component="h3" font="halenoir" weight="regular" theme="gold">
    {{ produit.color }} - {{ produit.sku }}
  </Typography>

   <!-- Ajout au panier -->
   <Button
        class="w-full"
        @click="ajouterAuPanier(produit)"
        variant="secondary"
        size="medium"
      >
        AJOUTER
      </Button>

  <div class="flex gap-3 pt-2 w-full">
    <Button
  v-for="taille in tailles"
  :key="taille"
  class="w-full"
  @click="selectTaille(produit.id, taille)"
  variant="secondary"
  size="medium"
>
  {{ taille }}
</Button>

  </div>

  <Typography class="mt-[5%]" variant="p" component="p" font="halenoir" weight="regular" theme="gold">
    {{ produit.description}}
  </Typography>

  </div>

</div>
</div>


<div>
  <Typography class="mt-[15%] mb-[5%]" variant="h1" component="h1" font="halenoir" weight="regular" theme="gold">
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
 
</div>
</div>

  </div>
  <!-- 
  <fwb-carousel :pictures="pictures" /> -->
</div>
</template>

<script setup>

import { ref, onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Typography from '../UI/design-system/Typography.vue'
import Button from '../UI/design-system/Button.vue'

const route = useRoute()
const router = useRouter()
const produit = ref([])
const tailles = ['XS', 'S', 'M', 'L', 'XL']
const selectedTaille = ref({})

const fetchProduit = async () => {
  try {
    const response = await fetch(`https://backend-au-fil-du-temps.vercel.app/products`)
    if (!response.ok) throw new Error('Produit non trouvé')
    const data = await response.json()
    produit.value = data
  } catch (error) {
    console.error('Erreur lors de la récupération du produit :', error)
  }
}


const selectTaille = (produitId, taille) => {
  selectedTaille.value[produitId] = taille
}
const ajouterAuPanier = (produit) => {
  const taille = selectedTaille.value[produit.id]

  if (!taille) {
    alert("Veuillez choisir une taille avant d'ajouter au panier.")
    return
  }

  const panier = JSON.parse(localStorage.getItem('panier')) || []

  // Vérifie si le produit avec la même taille est déjà dans le panier
  const existeDeja = panier.some(
    produit => produit.id === produit.id && produit.taille === taille
  )

  if (!existeDeja) {
    panier.push({
      ...produit,
      taille
    })
    localStorage.setItem('panier', JSON.stringify(panier))
  }

  // Redirection
  router.push('/cart')
}


const ajouterAuxFavoris = (produit) => {
  let favoris = JSON.parse(localStorage.getItem('favoris')) || []

  const existe = favoris.find(fav => fav.id === produit.id)
  if (!existe) {
    favoris.push(produit)
    localStorage.setItem('favoris', JSON.stringify(favoris))
  }
}


const articlesSimilaires = ref([])

const fetchArticlesSimilaires = async () => {
  try {
    const response = await fetch(`https://backend-au-fil-du-temps.vercel.app/products`)
    if (!response.ok) throw new Error('Erreur chargement articles similaires')
    const data = await response.json()

    const filtres = data.filter(p => p.id !== route.params.id)

    articlesSimilaires.value = filtres.slice(0, 6)
  } catch (error) {
    console.error('Erreur articles similaires :', error)
  }
}

onMounted(() => {
  fetchProduit()
  fetchArticlesSimilaires()
})


// import { FwbCarousel } from 'flowbite-vue'
// import caroussel1 from '../assets/img/png/carous1.png';
// import caroussel2 from '../assets/img/png/carous2.png';
// import caroussel3 from '../assets/img/png/carous3.png';

// const pictures = [
//   { src: caroussel1, alt: 'Image 1' },
//   { src: caroussel2, alt: 'Image 2' },
//   { src: caroussel3, alt: 'Image 3' },
// ]
</script>

<style>
.text-shadow-custom {
  text-shadow: 0 0 10px #E7B276;
}
</style>