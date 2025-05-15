<template>

  <div class="w-full bg-quinary p-10">
    <main class="grid place-content-center min-h-[20vh] w-full">
        
    </main>

  <!-- <div class="container">
    <div class="scroll-bar" :style="{ height: `${barHeight}%` }"></div>
    <div class="content">
    
   <div v-for="i in 10" :key="i" class="content-item">Item {{ i }}</div> 
    </div>
  </div> -->
  <div class="flex">
  <img src="../assets/img/svg/produits.svg">
  <hr class="w-full my-2 border-[1px] border-[#D4AF8E] mt-45" />
  </div>
<!-- Popup -->
<div
  v-if="modalProduit"
  class="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center"
>
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
        <Button
          v-for="taille in tailles"
          :key="taille"
          @click="selectTaille(modalProduit.id, taille)"
          :variant="selectedTaille[modalProduit.id] === taille ? 'primary' : 'secondary'"
          size="small"
        >
          {{ taille }}
        </Button>
      </div>

      <Button @click="validerAjoutPanier" variant="secondary" size="medium">
        AJOUTER
      </Button>
    </div>

    <button
      class="absolute top-4 right-4 text-gold text-2xl"
      @click="fermerPopup"
    >
      ✕
    </button>
  </div>
</div>


  <div class="grid grid-cols-2 gap-10 px-10">
  <div
      v-for="produit in articles"
      :key="produit.id"
      class="flex flex-col items-center"
    >
    
      <img
        :src="produit.images"
        :alt="produit.name"
        class="w-full object-cover rounded-md"
      />
      <div class="flex justify-between w-full mt-4 text-lg">
        <Typography
          variant="h2"
          component="h2"
          font="halenoir"
          weight="regular"
          theme="gold"
        >
          {{ produit.name }}
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          font="halenoir"
          weight="regular"
          theme="gold"
        >
          {{ produit.price }} €
        </Typography>
      </div>
      <Button
  variant="secondary"
  size="medium"
  class="w-full"
  @click="ouvrirPopup(produit)"
>
  AJOUTER
</Button>

    </div>
  </div>
</div>
</template>

<script setup>

import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Typography from '../UI/design-system/Typography.vue'
import Button from '../UI/design-system/Button.vue'

const router = useRouter()

const articles = ref([])
const tailles = ['XS', 'S', 'M', 'L', 'XL']
const selectedTaille = reactive({})

const fetchArticles = async () => {
  try {
    const response = await fetch('https://backend-au-fil-du-temps.vercel.app/products')
    if (!response.ok) throw new Error('Erreur lors du chargement des produits')
    const data = await response.json()
    articles.value = data
  } catch (error) {
    console.error('Erreur API :', error)
  }
}

onMounted(() => {
  fetchArticles()
})

const selectTaille = (produitId, taille) => {
  selectedTaille[produitId] = taille
}

const ajouterAuPanier = (produit) => {
  const tailleChoisie = selectedTaille[produit.id]

  if (!tailleChoisie) {
    alert('Veuillez sélectionner une taille avant d’ajouter au panier.')
    return
  }

  let panier = JSON.parse(localStorage.getItem('panier')) || []

  const existe = panier.find(
    item => item.id === produit.id && item.taille === tailleChoisie
  )

  if (!existe) {
    const articleInfos = {
      id: produit.id,
      nom: produit.name,
      prix: produit.price,
      images: produit.images,
      taille: tailleChoisie,
      quantité: 1,
    }

    panier.push(articleInfos)
    localStorage.setItem('panier', JSON.stringify(panier))
  }

  router.push('/cart')
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
  const taille = selectedTaille[produit.id]

  if (!taille) {
    alert("Veuillez choisir une taille avant d'ajouter au panier.")
    return
  }

  const panier = JSON.parse(localStorage.getItem('panier')) || []
  const existeDeja = panier.some(p => p.id === produit.id && p.taille === taille)

  if (!existeDeja) {
    panier.push({ ...produit, taille })
    localStorage.setItem('panier', JSON.stringify(panier))
  }

  fermerPopup()
  router.push('/cart')
}




// import { gsap } from "gsap";
    
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";


// gsap.registerPlugin(ScrollToPlugin);

// export default {
//   data() {
//     return {
//       scrollPosition: 0,
//       documentHeight: 0,
//       windowHeight: 0,
//       barHeight: 0,
//     };
//   },
//   mounted() {
//     this.updateScroll();
//     window.addEventListener('scroll', this.onScroll);
//     window.addEventListener('resize', this.updateScroll);
//   },
//   beforeDestroy() {
//     window.removeEventListener('scroll', this.onScroll);
//     window.removeEventListener('resize', this.updateScroll);
//   },
//   methods: {
//     onScroll() {
//       this.scrollPosition = window.scrollY;
//       this.updateBarHeight();
//     },
//     updateScroll() {
//       this.documentHeight = document.documentElement.scrollHeight;
//       this.windowHeight = window.innerHeight;
//       this.updateBarHeight();
//     },
//     updateBarHeight() {
//       const maxScroll = this.documentHeight - this.windowHeight;
//       this.barHeight = (this.scrollPosition / maxScroll) * 100;
//     },
//   },
// };
</script>

<style scoped>
.text-shadow-custom {
  text-shadow: 0 0 10px #E7B276;
}

/* .container {
  height: 100vh;
  position: relative;
  padding: 20px;
  background-color: #f0f0f0;
} */

/* .scroll-bar {
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  width: 10px;
  background-color: #007bff;
  transition: height 0.1s ease;
}

.content {
  margin-top: 50px;
  height: 2000px; 
}  */

/* .content-item {
  padding: 10px;
  margin: 5px 0;
  background-color: #ddd;
  border-radius: 5px;
}  */
</style>


