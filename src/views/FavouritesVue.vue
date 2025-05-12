<template>

<div v-if="!isLoggedIn" class="text-center py-20">
    <p class="text-lg text-gray-600">Vous devez être connecté pour voir vos favoris.</p>
    <RouterLink to="/sign-up" class="text-gold underline">Se connecter</RouterLink>
  </div>

  <div class="w-full bg-quinary p-10">
    <main class="grid place-content-center min-h-[20vh] w-full"></main>

    <div class="flex">
      <img src="../assets/img/svg/favoris.svg" />
      <hr class="w-full my-2 border-[1px] border-[#D4AF8E] mt-45" />
    </div>

    <div v-if="articles.length === 0" class="text-center text-gray-600">
      Aucun favori pour le moment.
    </div>

    <div v-for="produit in articles" :key="produit.id" class="relative">
     
      <RouterLink :to="`/product/${produit.id}`">
        <div>
          <img
            class="w-full"
            :src="produit.images[0]"
            alt="produit img"
            style="clip-path: polygon(0% 0%, 100% 5%, 100% 100%, 0% 95%)"
          />
        </div>
      </RouterLink>
      <div
        class="absolute top-2 right-2 cursor-pointer w-[30px]"
        @click.stop="supprimerArticle(produit.id)"
      >
        <img
          src="../assets/img/svg/icons/bin-brown.svg"
          alt="supprimer"
          class="w-full"
        />
      </div>

   
      <div class="flex justify-between w-full mt-4 text-lg">
        <Typography variant="h1" component="h1" font="scholar" weight="regular" theme="gold">
          {{ produit.name }}
        </Typography>

        <Typography variant="h2" component="h2" font="halenoir" weight="regular" theme="gold">
          {{ produit.price }} €
        </Typography>
      </div>
      <div class="h-px bg-gold my-6 "></div>
      <!-- Ajout au panier -->
      <Button
        class="w-full"
        @click="ajouterAuPanier(produit)"
        variant="secondary"
        size="medium"
      >
        AJOUTER
      </Button>

   <!-- Choix de la taille -->
<div class="flex gap-3 pt-2 w-full">
  <Button
    v-for="taille in tailles"
    :key="taille"
    class="w-full"
    @click="selectTaille(produit.id, taille)"
    :variant="selectedTaille[produit.id] === taille ? 'primary' : 'secondary'"
    size="medium"
  >
    {{ taille }}
  </Button>
</div>

    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSessionDataStore } from '@/stores/getUserSession.js'
import Typography from '../UI/design-system/Typography.vue'
import Button from '../UI/design-system/Button.vue'

const sessionStore = useSessionDataStore()
const { fetchSession, getSessionData } = sessionStore

const isLoggedIn = computed(() => !!getSessionData)
const router = useRouter()

const articles = ref([])
const tailles = ['XS', 'S', 'M', 'L', 'XL']

onMounted(async () => {
  await fetchSession() 

  if (!isLoggedIn.value) {
    router.push('/sign-up')
    return
  }

  fetchArticles()
})


const fetchArticles = () => {
  const favoris = JSON.parse(localStorage.getItem('favoris')) || []
  articles.value = favoris
}

const selectedTaille = ref({})

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

  router.push('/cart')
}


const supprimerArticle = (id) => {
  const favoris = JSON.parse(localStorage.getItem('favoris')) || []
  const index = favoris.findIndex(produit => produit.id === id)

  if (index !== -1) {
    favoris.splice(index, 1)
    localStorage.setItem('favoris', JSON.stringify(favoris))
    fetchArticles()  
  }
}
</script>
