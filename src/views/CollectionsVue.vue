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

  <div class="grid grid-cols-2 gap-10 px-10">
  <div
      v-for="produit in articles"
      :key="produit.id"
      class="flex flex-col items-center"
    >
    
      <img
        :src="produit.images[0]"
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
        @click="ajouterAuPanier(produit)"
      >
        AJOUTER
      </Button>

      <div class="flex w-full gap-2 mt-2">
        <Button
          v-for="taille in tailles"
          :key="taille"
          class="w-full"
          variant="secondary"
          size="medium"
          :class="selectedTaille[produit.id] === taille ? 'bg-[#D4AF8E] text-white' : ''"
          @click="selectTaille(produit.id, taille)"
        >
          {{ taille }}
        </Button>
      </div>
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


