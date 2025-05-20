<template>


  <div class="w-full bg-quinary p-10">
    <ParticlesBackground />
    <div v-if="loadingPanier" class="flex justify-center items-center w-full">
      <fwb-spinner color="gray" size="10" />
    </div>
    <div class="pt-40 min-h-screen flex flex-col">
      <div class="flex">
        <img src="../assets/img/svg/produits.svg" />
        <hr class="w-full my-2 border-[1px] border-gold mt-45" />
      </div>

      <!-- POPUP -->
      <div v-if="modalProduit"
        class="fixed inset-0 backdrop-blur-md bg-transparent z-50 flex items-center justify-center">
        <div class="bg-quinary border border-gold p-8 flex gap-10 w-[80%] max-w-4xl relative">
          <img :src="modalProduit.images" alt="image produit" class="w-[300px] h-auto object-cover" />

          <div class="flex flex-col justify-center">
            <Typography class="mb-2" variant="h2" font="scholar" weight="regular" theme="gold">
              {{ modalProduit.name }}
            </Typography>
            <Typography class="mb-4" variant="h3" font="halenoir" weight="regular" theme="gold">
              {{ modalProduit.price }} €
            </Typography>

            <p class="text-gold mb-2">Sélectionnez votre taille</p>
            <div class="flex gap-2 mb-4">
              <Button v-for="taille in tailles" :key="taille" @click="selectTaille(modalProduit.id, taille)"
                :variant="selectedTaille[modalProduit.id] === taille ? 'primary' : 'secondary'" size="small">
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
      <!-- <Typography class="mt-[15%] mb-[5%]" variant="h1" component="h1" font="halenoir" weight="regular" theme="gold">
        Voir plus
      </Typography>
      <div class="grid grid-cols-6 gap-[2%] items-center justify-center">
        <div v-for="produit in articlesSimilaires" :key="produit.id"
          class="relative w-full h-[300px] overflow-hidden rounded-lg">
          <router-link :to="`/product/${produit.id}`">
            <img class="w-full h-full object-cover" :src="produit.images" alt="produit img"
              style="clip-path: polygon(0% 10%, 100% 10%, 100% 100%, 0% 100%)" />
          </router-link>

          <img @click.stop="ajouterAuxFavoris(produit)" class="w-8 absolute bottom-3 right-3 cursor-pointer z-10"
            :src="isProduitFavori(produit) ? favorieFilled : favorieOutline" alt="like icon" />
        </div>
      </div> -->



    </div>

  </div>
  <!-- 
  <fwb-carousel :pictures="pictures" /> -->

</template>

<script setup>
import { ref, onMounted, reactive, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Typography from '../UI/design-system/Typography.vue'
import Button from '../UI/design-system/Button.vue'
import ParticlesBackground from "@/UI/Components/ParticlesBackground.vue";
import { FwbSpinner } from 'flowbite-vue'
import favorieFilled from '../assets/img/svg/icons/favorie-filled-beige.svg';
import favorieOutline from '../assets/img/svg/icons/favorie-outline-beige.svg';
import { useSessionDataStore } from "../stores/getUserSession";


const route = useRoute()
const router = useRouter()
const produit = ref([])
const tailles = ['XS', 'S', 'M', 'L', 'XL']
const selectedTaille = ref({})
const isProduitFavori = (produit) => {
  return favoris.value.some(fav => fav.id === produit.id)
}

const favoris = ref(JSON.parse(localStorage.getItem('favoris')) || [])
const sessionStore = useSessionDataStore();

onMounted(() => {
  sessionStore.fetchSession();
});

const user = computed(() => sessionStore.getUserData);

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

const ajouterAuxFavoris = (produit) => {
  const index = favoris.value.findIndex(fav => fav.id === produit.id)
  if (!user.value) {
    router.push('/log-in')
    return;
  }

  if (index === -1) {
    favoris.value.push(produit)
  } else {
    favoris.value.splice(index, 1)
  }
  localStorage.setItem('favoris', JSON.stringify(favoris.value))
}


// const articlesSimilaires = ref([])

// const fetchplusProduits = async () => {
//   try {
//     const response = await fetch(`https://backend-au-fil-du-temps.vercel.app/products`)
//     if (!response.ok) throw new Error('Erreur chargement articles similaires')
//     const data = await response.json()

//     const filtres = data.filter(p => p.id !== route.params.id)

//     articlesSimilaires.value = filtres.slice(0, 6)
//   } catch (error) {
//     console.error('Erreur articles similaires :', error)
//   }
// }

onMounted(() => {
  fetchProduit()
  // fetchplusProduits()
})

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
    panier.push({ ...produit, taille })
    localStorage.setItem('panier', JSON.stringify(panier))
  }

  fermerPopup()
  router.push('/products')
}

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