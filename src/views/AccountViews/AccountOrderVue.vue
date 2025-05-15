<template>
  <div class="w-full bg-quinary">
    
      <ParticlesBackground />
    <main class="grid place-content-center min-h-[20vh] w-full">
       
    </main>

    <img src="../../assets/img/svg/dernierescommandes.svg" />

    <div class="flex gap-8 justify-center">
      <div
        v-for="(product, index) in products"
        :key="product.id"
        class="w-full h-full bg-[#4C0B0C]"
        :style="{ clipPath: 'polygon(0% 0%, 100% 5%, 100% 100%, 0% 98%)' }"
      >
        <RouterLink :to="`/product/${product.id}`">
          <img
            class="w-full h-full object-cover"
            :src="product.images?.[0]"
            alt="produit img"
            style="clip-path: polygon(0% 0%, 100% 5%, 100% 100%, 0% 95%)"
          />
        </RouterLink>

        <div class="p-4 flex flex-col justify-between">
          <div>
            <Typography variant="h2" font="scholar" weight="regular" theme="gold">
              {{ product.name }}
            </Typography>
            <br />
            <Typography variant="h3" font="scholar" weight="regular" theme="gold">
              {{ product.description }}
            </Typography>
          </div>
          <br>
          <div class="flex items-center justify-between mt-auto">
            <Typography variant="h3" font="scholar" weight="regular" theme="gold">
              {{product.createdAt}}
            </Typography>
            <router-link to="/cart"> <img src="../../assets/img/svg/icons/cart-brown.svg" class="bg-[#250101] rounded-xl w-6 h-6 p-1" /></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import Button from '../../UI/design-system/Button.vue'
import Typography from '../../UI/design-system/Typography.vue';
import ParticlesBackground from "@/UI/Components/ParticlesBackground.vue";

const products = ref([])

const fetchProducts = async () => {
  try {
    const response = await fetch('https://backend-au-fil-du-temps.vercel.app/products')
    if (!response.ok) throw new Error('Erreur de chargement')
    const data = await response.json()

    console.log('produits reçus :', data) 

    products.value = data
  } catch (error) {
    console.error('Erreur lors de la récupération des produits :', error)
  }
}

onMounted(() => {
  fetchProducts()
})
</script>

<style scoped>
</style>
