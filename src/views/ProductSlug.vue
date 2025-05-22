<template>
  <div class="w-full bg-quinary p-10 min-h-screen">
    <ParticlesBackground />
    <div v-if="loading" class="fixed inset-0 bg-quinary bg-opacity-80 z-50 flex items-center justify-center">
      <div class="text-center">
        <Typography variant="h2" font="scholar" theme="gold">
          Chargement du produit...
        </Typography>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row pt-50 gap-10">
      <!-- img à gauche -->
      <div v-if="produit" class="flex flex-row lg:flex-col gap-4 justify-center lg:items-start">
        <img v-for="(img, index) in produit.images" :key="index" :src="img" @click="imagePrincipale = img"
          class="w-20 h-24 sm:w-24 sm:h-28 object-cover cursor-pointer transition hover:scale-105"
          :class="img === imagePrincipale" style="clip-path: polygon(0% 5%, 100% 0%, 100% 97%, 0% 100%)" />
      </div>

      <div v-if="produit" class="w-full sm:w-[440px] h-[400px] sm:h-[600px] overflow-hidden mx-auto">
        <img :src="imagePrincipale" alt="Image principale" class="w-full h-full object-cover"
          style="clip-path: polygon(0% 0%, 100% 0%, 100% 97%, 0% 100%)" />
      </div>

      <!-- Détails produits -->
      <div v-if="produit" class="w-full lg:w-[47%] pt-10" id="detail_products">
        <div class="flex justify-between items-center flex-wrap gap-4">
          <Typography variant="h1" component="h1" font="scholar" weight="regular" theme="gold">
            {{ produit.name }}
          </Typography>

          <img @click.stop="ajouterAuxFavoris(produit)" class="w-10 cursor-pointer"
            :src="isProduitFavori(produit) ? favorieFilled : favorieOutline" alt="like icon" />
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
import { useApi } from '../stores/dataBaseData';
import { favorites } from '../services';
import api from '../api/api';

const route = useRoute()
const router = useRouter()
const loading = ref(true)

const sessionStore = useSessionDataStore()
const user = computed(() => sessionStore.getUserData)

const produit = ref(null)
const imagePrincipale = ref(null)
const selectedTaille = ref(null)

const { data: favorisData, run: fetchFavorites } = useApi(favorites.list)

const isProduitFavori = (produit) => {
  return favorisData.value?.some(fav => fav.product?.id === produit.id) || false;
}

const fetchProduit = async () => {
  try {
    loading.value = true
    const id = route.params.id
    const { data } = await api.get(`/products/${id}`)
    produit.value = data
    imagePrincipale.value = data.images?.[0] || ''
  } catch (error) {
    console.error('Erreur lors du chargement du produit:', error)
  } finally {
    loading.value = false
  }
}

const articlesSimilaires = ref([])

const fetchArticlesSimilaires = async () => {
  try {
    const { data } = await api.get('/products')
    const autresProduits = data.filter(p => p.id !== parseInt(route.params.id))
    articlesSimilaires.value = autresProduits
  } catch (error) {
    console.error('Erreur articles similaires :', error)
  }
}

const selectTaille = (taille) => {
  selectedTaille.value = taille
}

const ajouterAuxFavoris = async (produit) => {
  if (!user.value) {
    router.push('/log-in')
    return
  }

  const isFavorite = isProduitFavori(produit)
  try {
    if (isFavorite) {
      await api.delete(`/favorites/${produit.id}`)
      console.log('Produit retiré des favoris')
    } else {
      await api.post(`/favorites/${produit.id}`)
      console.log('Produit ajouté aux favoris')
    }
    await fetchFavorites() // Refresh the favorites list after change
    console.log('Favoris mis à jour')
  } catch (error) {
    console.error('Erreur lors de la modification des favoris:', error)
  }
}

const addToCart = () => {
  if (!selectedTaille.value) {
    alert("Veuillez sélectionner une taille avant d'ajouter au panier.")
    return
  }

  const panier = JSON.parse(localStorage.getItem('panier')) || []
  
  // Check if the exact same product with the same size already exists
  const existeDeja = panier.some(item => 
    item.id === produit.value.id && 
    item.taille === selectedTaille.value
  )

  if (!existeDeja) {
    const newItem = {
      id: produit.value.id,
      taille: selectedTaille.value,
      productId: produit.value.id,
      name: produit.value.name,
      price: produit.value.price,
      stripeId: produit.value.stripeId,
      images: produit.value.images?.[0],
      description: produit.value.description,
      quantité: 1
    }
    
    panier.push(newItem)
    localStorage.setItem('panier', JSON.stringify(panier))
  }

  router.push('/cart')
}

onMounted(async () => {
  try {
    loading.value = true
    await Promise.all([
      fetchProduit(),
      fetchFavorites(),
      fetchArticlesSimilaires()
    ])
  } catch (error) {
    console.error('Error during initialization:', error)
  } finally {
    loading.value = false
  }
})

watch(() => route.params.id, async () => {
  try {
    loading.value = true
    await Promise.all([
      fetchProduit(),
      fetchFavorites(),
      fetchArticlesSimilaires()
    ])
  } catch (error) {
    console.error('Error during route change:', error)
  } finally {
    loading.value = false
  }
})
</script>
