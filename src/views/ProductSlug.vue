<template>
  <div v-if="produit" class="w-full bg-quinary p-10 min-h-screen">
    <ParticlesBackground />
    <div v-if="loadingPanier" class="flex justify-center items-center w-full">
      <fwb-spinner color="gray" size="10" />
    </div>
    <div class="flex flex-col lg:flex-row pt-50 gap-10">
      <!-- img à gauche -->
      <div class="flex flex-row lg:flex-col gap-4 justify-center lg:items-start">
        <img v-for="(img, index) in produit.images" :key="index" :src="img" @click="imagePrincipale = img"
          class="w-20 h-24 sm:w-24 sm:h-28 object-cover cursor-pointer transition hover:scale-105"
          :class="img === imagePrincipale" style="clip-path: polygon(0% 5%, 100% 0%, 100% 97%, 0% 100%)" />
      </div>

      <div class="w-full sm:w-[440px] h-[400px] sm:h-[600px] overflow-hidden mx-auto">
        <img :src="imagePrincipale" alt="Image principale" class="w-full h-full object-cover"
          style="clip-path: polygon(0% 0%, 100% 0%, 100% 97%, 0% 100%)" />
      </div>

      <!-- Détails produits -->
      <div class="w-full lg:w-[47%] pt-10" id="detail_products">
        <div class="flex justify-between items-center flex-wrap gap-4">
          <Typography variant="h1" component="h1" font="scholar" weight="regular" theme="gold">
            {{ produit.name }}
          </Typography>

          <img @click.stop="ajouterAuxFavoris(produit)" class="w-10 cursor-pointer"
            :src="isLiked ? favorieFilled : favorieOutline" alt="like icon" />
        </div>

        <Typography class="mb-[5%]" variant="h2" component="h2" font="halenoir" weight="regular" theme="gold">
          {{ produit.price }} EUR
        </Typography>

        <hr class="bg-[#BF8E63] h-[2px] my-4" />

        <Typography class="mt-[60px] mb-[5%]" variant="h3" component="h3" font="halenoir" weight="regular" theme="gold">
          {{ produit.color }}
        </Typography>

        <Button variant="secondary" size="medium" class="w-full" @click="addToCart">
          AJOUTER
        </Button>

        <div class="flex flex-wrap gap-3 pt-2 w-full">
          <Button v-for="taille in ['XS', 'S', 'M', 'L', 'XL']" :key="taille" class="w-full sm:w-auto flex-1"
            @click="selectTaille(taille)" variant="secondary" size="medium">
            {{ taille }}
          </Button>
        </div>

        <Typography class="mt-[5%]" variant="p" component="p" font="halenoir" weight="regular" theme="gold">
          {{ produit.description }}
        </Typography>
      </div>
    </div>
    <Typography class="mt-[10%] mb-[3%]" variant="h1" component="h1" font="halenoir" weight="regular" theme="gold">
      Voir plus
    </Typography>
    <div class="grid grid-cols-5 gap-[1%] items-center justify-center ">
      <div v-for="produit in articlesSimilaires" :key="produit.id" class="relative w-full h-[300px] overflow-hidden">
        <router-link :to="`/product/${produit.id}`">
          <img class="w-full h-full object-cover" :src="produit.images" alt="produit img"
            style="clip-path: polygon(0% 10%, 100% 10%, 95% 100%, 0% 100%)" />
        </router-link>

        <img @click.stop="ajouterAuxFavoris(produit)" class="w-8  absolute bottom-3 right-3 cursor-pointer z-10"
          :src="isProduitFavori(produit) ? favorieFilled : favorieOutline" alt="like icon" />
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSessionDataStore } from "../stores/getUserSession";
import Typography from '../UI/design-system/Typography.vue'
import Button from '../UI/design-system/Button.vue'
import ParticlesBackground from "@/UI/Components/ParticlesBackground.vue"
import favorieFilled from '../../src/assets/img/svg/icons/favorie-filled-beige.svg'
import favorieOutline from '../../src/assets/img/svg/icons/favorie-outline-beige.svg'
import { FwbSpinner } from 'flowbite-vue'

const route = useRoute()
const router = useRouter()

const sessionStore = useSessionDataStore()
const user = computed(() => sessionStore.getUserData)

const produit = ref(null)
const imagePrincipale = ref(null)
const selectedTaille = ref(null)
const isLiked = ref(false)

const isProduitFavori = (produit) => {
  return favoris.value.some(fav => fav.id === produit.id)
}

const favoris = ref(JSON.parse(localStorage.getItem('favoris')) || [])

const fetchProduit = async () => {
  const id = route.params.id
  const response = await fetch(`https://backend-au-fil-du-temps.vercel.app/products/${id}`)
  const data = await response.json()
  produit.value = data
  imagePrincipale.value = data.images?.[0] || ''

  const favoris = JSON.parse(localStorage.getItem('favoris')) || []
  isLiked.value = favoris.some(fav => fav.id === data.id)
}

const articlesSimilaires = ref([])

const fetchArticlesSimilaires = async () => {
  try {
    const response = await fetch(`https://backend-au-fil-du-temps.vercel.app/products`)
    if (!response.ok) throw new Error('Erreur chargement articles similaires')
    const data = await response.json()

    const autresProduits = data.filter(p => p.id !== parseInt(route.params.id))

    articlesSimilaires.value = autresProduits


    const favoris = JSON.parse(localStorage.getItem('favoris')) || []
    isLiked.value = favoris.some(fav => fav.id === data.id)

  } catch (error) {
    console.error('Erreur articles similaires :', error)
  }
}

const selectTaille = (taille) => {
  selectedTaille.value = taille
}

const ajouterAuxFavoris = (produit) => {
  if (!user.value) {
    router.push('/log-in')
    return
  }

  const favoris = JSON.parse(localStorage.getItem('favoris')) || []
  const index = favoris.findIndex(fav => fav.id === produit.id)

  if (index === -1) {
    favoris.push(produit)
    isLiked.value = true
  } else {
    favoris.splice(index, 1)
    isLiked.value = false
  }

  localStorage.setItem('favoris', JSON.stringify(favoris))
}

const addToCart = () => {
  if (!selectedTaille.value) {
    alert("Veuillez sélectionner une taille avant d'ajouter au panier.")
    return
  }

  const item = {
    id: produit.value.id + '-' + selectedTaille.value,
    productId: produit.value.id,
    name: produit.value.name,
    price: produit.value.price,
    images: produit.value.images?.[0],
    description: produit.value.description,
    taille: selectedTaille.value,
    quantité: 1,
  }

  const cart = JSON.parse(localStorage.getItem('panier')) || []
  const existingIndex = cart.findIndex(p => p.id === item.id)

  if (existingIndex !== -1) {
    cart[existingIndex].quantité += 0
  } else {
    cart.push(item)
  }

  localStorage.setItem('panier', JSON.stringify(cart))
  router.push('/products')
}

onMounted(() => {
  fetchProduit()
  fetchArticlesSimilaires()
})

watch(() => route.params.id, async () => {
  await fetchProduit()
  await fetchArticlesSimilaires()
})
</script>
