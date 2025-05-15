<template>
    <div>
  <ParticlesBackground />
        <div class="w-full bg-quinary p-10">


<div v-if="produit">
  Product {{ produit.id }}

<div class="w-full bg-quinary ">

<div class="flex justify-between pt-40 min-h-screen">
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
  <div class="ml-[1%]" id="img_primary">
    <img class="w-125" src="../assets/img/png/card.png" alt="produit img"
      style="clip-path: polygon(0% 0%, 100% 3%, 100% 98%, 0% 100%);">
  </div>
  
  <div v-if="produit" class="ml-[5%] w-[8°%]" id="detail_products">
<div class="flex justify-between items-center">
  <Typography variant="h1" component="h1" font="scholar" weight="regular" theme="gold">
    {{ produit.name }}
  </Typography>
  <router-link to="/favourites">
    <img class="w-10" src="../assets/img/png/like.png" alt="like icon" />
  </router-link>
</div>

<Typography class="mb-[5%]" variant="h2" component="h2" font="halenoir" weight="regular" theme="gold">
  {{ produit.price }} EUR
</Typography>

<hr class="bg-[#BF8E63] h-[2px] my-4" />

<Typography class="mt-[60px] mb-[5%]" variant="h3" component="h3" font="halenoir" weight="regular" theme="gold">
  {{ produit.color }} - {{ produit.sku }}
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
  {{ produit.description}}
</Typography>


</div>
</div>
</div></div>
        </div>
</div>


  

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Typography from '../UI/design-system/Typography.vue'
import Button from '../UI/design-system/Button.vue'
import ParticlesBackground from "@/UI/Components/ParticlesBackground.vue";

const route = useRoute()
const produit = ref(null)

const fetchProduit = async () => {
  const id = route.params.id
  const response = await fetch(`https://backend-au-fil-du-temps.vercel.app/products/${id}`)
  const data = await response.json()
  produit.value = data
}


const addToCart = () => {
  if (produit.value) {
    const cartItem = {
      id: produit.id,
        nom: produit.name, 
        prix: produit.price, 
        images: produit.images,
        description: produit.description,
        quantité: 1,
    }


    const cart = JSON.parse(localStorage.getItem('cart')) || []


    cart.push(cartItem)

    this.$router.push('/cart')

    localStorage.setItem('cart', JSON.stringify(cart))

    console.log('Produit ajouté au panier', cartItem)
  }
}


onMounted(() => {
  fetchProduit()
  onMounted(() => {
  fetchProduit()
  console.log(route.params.id) 
})

})
</script>
