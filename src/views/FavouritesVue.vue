<template>
  <div v-if="!isLoggedIn" class="text-center py-20">
    <ParticlesBackground />
    <p class="text-lg text-gray-600">Vous devez être connecté pour voir vos favoris.</p>
    <RouterLink to="/sign-up" class="text-gold underline">Se connecter</RouterLink>
  </div>

  <div class="w-full bg-quinary p-10" v-else>
    <ParticlesBackground />
    <main class="grid place-content-center min-h-[20vh] w-full"></main>

    <div class="flex">
      <img src="../assets/img/svg/favoris.svg" />
      <hr class="w-full my-2 border-[1px] border-[#D4AF8E] mt-45" />
    </div>

    <div v-if="loading" class="text-center py-4">
      <Typography variant="h2" font="scholar" theme="gold">
        Chargement des Favoris...
      </Typography>
    </div>

    <div v-else-if="error" class="text-center py-4">
      <Typography variant="h2" font="scholar" theme="gold">
        Erreur lors du chargement des favoris
      </Typography>
    </div>

    <div v-else-if="!loading && safeFavorites.length === 0"
      class="flex flex-col items-center justify-center text-center text-lg text-gold gap-4">
      <Typography variant="h1" component="h1" font="scholar" weight="regular" theme="gold">Aucun favori pour le moment.
      </Typography>
      <router-link to="/">
        <Button class="justify-center" variant="secondary">Explorer</Button>
      </router-link>
    </div>

    <div v-else class="flex flex-wrap justify-center gap-12 mt-12">
      <div v-for="favorite in safeFavorites" :key="favorite.id"
        class="relative p-4 rounded-2xl shadow-md w-[300px] min-h-[580px] flex flex-col justify-between">
        <router-link :to="`/product/${favorite.product.id}`">
          <div class="h-[320px] overflow-hidden">
            <img class="w-full h-full object-cover" :src="favorite.product.images?.[0]" alt="produit img"
              style="clip-path: polygon(0% 0%, 100% 5%, 100% 100%, 0% 95%)" />
          </div>
        </router-link>

        <div class="absolute top-6 right-6 cursor-pointer w-[40px]" @click.stop="supprimerArticle(favorite.product.id)">
          <img src="../assets/img/svg/icons/bin-brown.svg" alt="supprimer" class="w-full" />
        </div>

        <div class="mt-6">
          <div class="flex justify-between text-lg mb-4">
            <Typography variant="h1" component="h1" font="scholar" weight="regular" theme="gold">{{ favorite.product.name }}
            </Typography>
            <Typography variant="h2" component="h2" font="halenoir" weight="regular" theme="gold">{{ favorite.product.price }} €
            </Typography>
          </div>

          <div class="h-px bg-gold my-4"></div>

          <Button class="w-full mb-4" @click="ouvrirPopup(favorite.product)" variant="secondary" size="medium">AJOUTER</Button>
        </div>
      </div>
    </div>


    <!-- POPUP -->
    <div v-if="produitSelectionne"
      class="fixed inset-0 backdrop-blur-md bg-transparent z-50 flex items-center justify-center">
      <div class="bg-quinary border border-gold p-8 flex gap-10 w-[80%] max-w-4xl relative">
        <img :src="produitSelectionne.images?.[0]" alt="image produit" class="w-[300px] h-auto object-cover" />

        <div class="flex flex-col justify-center">
          <Typography class="mb-2" variant="h2" font="scholar" weight="regular" theme="gold">
            {{ produitSelectionne.name }}
          </Typography>
          <Typography class="mb-4" variant="h3" font="halenoir" weight="regular" theme="gold">
            {{ produitSelectionne.price }} €
          </Typography>

          <p class="text-gold mb-2">Sélectionnez votre taille</p>
          <div class="flex gap-2 mb-4">
            <Button v-for="taille in tailles" :key="taille" @click="selectTaille(taille)"
              :variant="selectedTaille === taille ? 'primary' : 'secondary'" size="small">
              {{ taille }}
            </Button>
          </div>

          <Button @click="validerAjoutPanier" variant="secondary" size="medium">
            AJOUTER
          </Button>
        </div>

        <Button class="absolute top-4 right-4 text-gold text-2xl" @click="fermerPopup">
          ✕
        </Button>
      </div>
    </div>


  </div>

</template>


<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useSessionDataStore } from '@/stores/getUserSession.js'
import Typography from '../UI/design-system/Typography.vue'
import Button from '../UI/design-system/Button.vue'
import ParticlesBackground from "@/UI/Components/ParticlesBackground.vue";
import { useApi } from "@/stores/dataBaseData"
import { favorites } from "@/services"

const { data: favoritesData, error, loading, run: fetchFavorites } = useApi(favorites.list)
const { run: deleteFavorite } = useApi(favorites.remove)

// Add computed property to safely handle favorites data
const safeFavorites = computed(() => {
  return favoritesData.value || []
})

watch(favoritesData, (newValue) => {
  console.log('produits reçus :', newValue)
}, { immediate: true })

const sessionStore = useSessionDataStore()
const { fetchSession, getSessionData } = sessionStore
const isLoggedIn = computed(() => !!getSessionData)
const router = useRouter()

const tailles = ['XS', 'S', 'M', 'L', 'XL']

onMounted(async () => {
  await fetchSession()
  if (!isLoggedIn.value) {
    router.push('/log-in')
    return
  }
  await fetchFavorites()
})

const supprimerArticle = async (id) => {
  console.log('id :', id)
  try {
    await deleteFavorite(id)
    await fetchFavorites()
  } catch (error) {
    console.error('Erreur lors de la suppression du favori :', error)
  }
}

// POPUP
const popupVisible = ref(false)
const produitSelectionne = ref(null)
const selectedTaille = ref(null)

const ouvrirPopup = (produit) => {
  produitSelectionne.value = produit
  selectedTaille.value = null
  popupVisible.value = true
}

const fermerPopup = () => {
  produitSelectionne.value = null
  popupVisible.value = false
}

const selectTaille = (taille) => {
  selectedTaille.value = taille
}

const validerAjoutPanier = () => {
  if (!selectedTaille.value) {
    alert("Veuillez choisir une taille avant de valider.")
    return
  }

  const produit = produitSelectionne.value
  const panier = JSON.parse(localStorage.getItem('panier')) || []

  const existeDeja = panier.some(
    p => p.id === produit.id && p.taille === selectedTaille.value
  )

  if (!existeDeja) {
    panier.push({
      ...produit,
      taille: selectedTaille.value
    })
    localStorage.setItem('panier', JSON.stringify(panier))
  }

  fermerPopup()
  router.push('/cart')
}
</script>