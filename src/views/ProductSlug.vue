<template>
  <div v-if="produit" class="w-full bg-quinary p-10 min-h-screen">
    <div class="flex pt-40 gap-10 flex-wrap">

      <!-- img à gauche -->
      <div class="flex flex-col gap-4">
        <img
          v-for="(img, index) in produit.images"
          :key="index"
          :src="img"
          @click="imagePrincipale = img"
          class="w-24 h-28 object-cover rounded-md cursor-pointer transition hover:scale-105 border-2"
          :class="{ 'border-gold': img === imagePrincipale, 'border-transparent': img !== imagePrincipale }"
        />
      </div>

      <!-- Image principale -->
      <div class="w-[440px] h-[600px] overflow-hidden rounded-2xl border border-gold">
        <img
          :src="imagePrincipale"
          alt="Image principale"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Détails produits -->
      <div class=" w-[47%]" id="detail_products">
        <div class="flex justify-between items-center">
          <Typography variant="h1" component="h1" font="scholar" weight="regular" theme="gold">
            {{ produit.name }}
          </Typography>
          
            <img @click.stop ="ajouterAuxFavoris(produit)"
             class="w-10" src="../assets/img/png/like.png" alt="like icon" />
     
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
        <div class="flex gap-3 pt-2 w-full">
          <Button
            v-for="taille in ['XS', 'S', 'M', 'L', 'XL']"
            :key="taille"
            class="w-full"
            @click="selectTaille(taille)"
            variant="secondary"
            size="medium"
          >
            {{ taille }}
          </Button>
        </div>

        <Typography class="mt-[5%]" variant="p" component="p" font="halenoir" weight="regular" theme="gold">
          {{ produit.description }}
        </Typography>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Typography from '../UI/design-system/Typography.vue'
import Button from '../UI/design-system/Button.vue'

const route = useRoute()
const router = useRouter()

const produit = ref(null)
const imagePrincipale = ref(null)
const selectedTaille = ref(null)

const fetchProduit = async () => {
  const id = route.params.id
  const response = await fetch(`https://backend-au-fil-du-temps.vercel.app/products/${id}`)
  const data = await response.json()
  produit.value = data
  imagePrincipale.value = data.images?.[0] || ''
}

const selectTaille = (taille) => {
  selectedTaille.value = taille
}
const ajouterAuxFavoris = (produit) => {
  let favoris = JSON.parse(localStorage.getItem('favoris')) || []

  const existe = favoris.find(fav => fav.id === produit.id)
  if (!existe) {
    favoris.push(produit)
    localStorage.setItem('favoris', JSON.stringify(favoris))
  }
  router.push('/favourites')
}
const addToCart = () => {
  if (!selectedTaille.value) {
    alert("Veuillez sélectionner une taille avant d'ajouter au panier.")
    return
  }

  const item = {
    id: produit.value.id,
    nom: produit.value.name,
    prix: produit.value.price,
    images: produit.value.images,
    description: produit.value.description,
    taille: selectedTaille.value,
    quantité: 1,
  }

  const cart = JSON.parse(localStorage.getItem('cart')) || []
  cart.push(item)
  localStorage.setItem('cart', JSON.stringify(cart))

  router.push('/cart')
}

onMounted(() => {
  fetchProduit()
})
</script>
