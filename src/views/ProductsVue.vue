<template>


  <div class="w-full bg-quinary p-10">
    <ParticlesBackground />
    <div v-if="loading" class="fixed inset-0 bg-quinary bg-opacity-80 z-50 flex items-center justify-center">
      <div class="text-center">
        <Typography variant="h2" font="scholar" theme="gold" class="mt-4">
          Chargement des produits...
        </Typography>
      </div>
    </div>

    <div v-if="loadingPanier" class="flex justify-center items-center w-full">
    </div>
    <div v-else class="pt-40 min-h-screen flex flex-col">
      <div class="flex">
        <img src="../assets/img/svg/produits.svg" />
        <hr class="w-full my-2 border-[1px] border-gold mt-45" />
      </div>

      <!-- POPUP -->
      <div v-if="modalProduit"
        class="fixed inset-0 backdrop-blur-md bg-transparent z-50 flex items-center justify-center">
        <div class="bg-quinary border border-gold p-8 flex gap-10 w-[90%] max-w-4xl relative">

          <div class="w-full flex flex-col p-10 ">
            <img :src="modalProduit.images" alt="image produit"
              style="clip-path: polygon(0% 0%, 100% 5%, 100% 100%, 0% 95%)" class="w-300" />

            <div class="flex justify-between pt-5 ">
              <Typography variant="h2" font="scholar" weight="regular" theme="gold">
                {{ modalProduit.name }}
              </Typography>
              <Typography variant="h3" font="halenoir" weight="regular" theme="gold">
                {{ modalProduit.price }} EUR
              </Typography>
            </div>
            <hr class="w-full border-gold pt-10">
          </div>

          <div class="flex flex-col w-full justify-center ">
            <Typography variant=" h3" font="halenoir" weight="regular" theme="gold" class="pb-6">
              Sélectionnez votre taille
            </Typography>

            <div class="flex w-full gap-4 mb-6">
              <Button v-for="taille in tailles" :key="taille.value" @click="selectTaille(modalProduit.id, taille.value)"
                :variant="selectedTaille[modalProduit.id] === taille.value ? 'primary' : 'secondary'" class="w-full">
                {{ taille.label }}
              </Button>
            </div>

            <Button @click="validerAjoutPanier" variant="secondary">
              AJOUTER
            </Button>
          </div>


          <Button class="absolute top-4 right-4 w-15" @click="fermerPopup">
            <img src="../assets/img/svg/icons/cross.svg" alt="close icon">
          </Button>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-12 mt-12">
        <div v-for="produit in produit" :key="produit.id"
          class="relative  shadow-md w-[350px] min-h-[580px] flex flex-col justify-between">
          <RouterLink :to="`/product/${produit.id}`">
            <div class="h-[320px] overflow-hidden">
              <img class="w-full h-full object-cover" :src="produit.images" alt="produit img"
                style="clip-path: polygon(0% 0%, 100% 5%, 100% 100%, 0% 95%)" />
            </div>
          </RouterLink>

          <div class="absolute bottom-40 right-6 cursor-pointer w-[40px]">
            <img @click.stop="ajouterAuxFavoris(produit)" class="w-10 cursor-pointer"
              :src="isProduitFavori(produit) ? favorieFilled : favorieOutline" alt="like icon" />

          </div>

          <div class="mt-6">
            <div class="flex justify-between text-lg mb-4">
              <Typography variant="h1" component="h1" font="scholar" weight="regular" theme="gold">
                {{ produit.name }}
              </Typography>
              <Typography variant="h2" component="h2" font="halenoir" weight="regular" theme="gold">
                {{ produit.price }} €
              </Typography>
            </div>

            <div class="h-px bg-gold my-4"></div>

            <Button class="w-full mb-4" @click="ouvrirPopup(produit)" variant="secondary" size="medium">
              AJOUTER
            </Button>
          </div>
        </div>
      </div>
    </div>
      <div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import Typography from '../UI/design-system/Typography.vue'
import Button from '../UI/design-system/Button.vue'
import ParticlesBackground from "@/UI/Components/ParticlesBackground.vue";
import favorieFilled from '../assets/img/svg/icons/favorie-filled-beige.svg';
import favorieOutline from '../assets/img/svg/icons/favorie-outline-beige.svg';
import { useSessionDataStore } from "../stores/getUserSession";
import { useApi } from '../stores/dataBaseData';
import { favorites } from '../services';
import api from '../api/api';
import { sizeOptions } from '../services/enum';

const router = useRouter()
const produit = ref([])
const tailles = sizeOptions
const selectedTaille = ref({})
const loading = ref(true)

const isProduitFavori = (produit) => {
  return favoritesData.value?.some(fav => fav.product?.id === produit.id) || false;
}

const { data: favoritesData, run: fetchFavorites } = useApi(favorites.list)

const sessionStore = useSessionDataStore();

const fetchProduit = async () => {
  try {
    const { data } = await api.get('/products')
    produit.value = data
  } catch (error) {
    console.error('Erreur lors de la récupération du produit :', error)
    produit.value = [] // Set empty array on error
  }
}

onMounted(async () => {
  try {
    loading.value = true
    await Promise.all([
      fetchProduit(),
      fetchFavorites(),
      sessionStore.fetchSession()
    ])
  } catch (error) {
    console.error('Error during initialization:', error)
  } finally {
    loading.value = false
  }
})

const user = computed(() => sessionStore.getUserData);

const selectTaille = (produitId, taille) => {
  selectedTaille.value[produitId] = taille
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

const modalProduit = ref(null)

const ouvrirPopup = (produit) => {
  modalProduit.value = produit
}

const fermerPopup = () => {
  modalProduit.value = null
}

const validerAjoutPanier = () => {
  const produit = modalProduit.value
  const taille = selectedTaille.value[produit.id]

  if (!taille) {
    alert("Veuillez choisir une taille avant d'ajouter au panier.")
    return
  }

  const panier = JSON.parse(localStorage.getItem('panier')) || []
  const existeDeja = panier.some(
    p => p.id === produit.id && p.taille === taille
  )

  if (!existeDeja) {
    panier.push({
      id: produit.id,
      taille: taille,
      productId: produit.id,
      name: produit.name,
      price: produit.price,
      images: produit.images?.[0],
      stripeId: produit.stripeId,
      description: produit.description
    })
    localStorage.setItem('panier', JSON.stringify(panier))
  }

  fermerPopup()
  router.push('/cart')
}

</script>

<style>
.text-shadow-custom {
  text-shadow: 0 0 10px #E7B276;
}
</style>