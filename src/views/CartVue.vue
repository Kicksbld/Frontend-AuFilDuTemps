<template>
  <div class="w-full bg-quinary p-10">
    <ParticlesBackground />

    <main class="grid place-content-center min-h-[20vh] w-full">
       
    </main>
    
    <div class="flex">
    <img src="../assets/img/svg/panier.svg">
    <hr class="w-full my-2 border-[1px] border-[#D4AF8E] mt-45" />
    </div>

    <div class="p-6">
      <div>
    <div v-if="panier.length === 0" class="text-lg text-[#E7B276]">Le panier est vide.</div>


    
    <div v-else class="space-y-8 flex flex-col-2">
      <div
        v-for="produit in panier"
        :key="produit.id"
        class="relative w-[300px] rounded shadow-lg p-4"
      >
      
        <!-- <img
          class="w-[300px]"
          :src="produit.images[0]"
          style="clip-path: polygon(0% 0%, 100% 5%, 100% 100%, 0% 95%)"
        /> -->

        
        <div
          class="absolute top-2 right-1 cursor-pointer w-[20px]"
          @click="supprimerArticle(produit.id)"
        >
          <img src="../assets/img/svg/icons/bin-brown.svg" />
        </div>
        
        <div class="flex justify-between w-full mt-4 text-lg">
       
          <Typography variant="h1" component="h1" font="scholar" weight="regular" theme="gold">
            {{ produit.name }}
          </Typography>

          <span class="text-right text-[#E7B276] text-scholar text-[16px]">{{ produit.taille }}</span>
    
        </div>
     
        <hr class="w-full my-2 border-[1px] border-[#D4AF8E]" />

        <div class="flex justify-between items-center w-full mt-2">
          <Typography variant="h2" component="h2" font="halenoir" weight="regular" theme="gold">
            {{ produit.price }} €
          </Typography>

          <select
            v-model="produit.quantité"
            @change="updateQuantité(produit.id, produit.quantité)"
            class="border border-[#D4AF8E] text-[16px] px-4 py-1 rounded bg-transparent text-[#E7B276]"
          >
            <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
<div class="grid grid-cols-2 gap-9 justify-center px-4 text-[#D4AF8E]">
  <div class="grid gap-2">
    <div class="flex flex-col items-center relative">

      <img 
        class="w-[300px]" 
        src="../assets/img/png/card.png" 
        style="clip-path: polygon(0% 0%, 100% 5%, 100% 100%, 0% 95%);">

      <div class="absolute top-2 right-1 cursor-pointer w-[40px]">
        <img src="../assets/img/svg/icons/bin-brown.svg">
      </div>

      <div class="flex justify-between w-full mt-4 text-lg">
        <Typography variant="h1" component="h1" font="scholar" weight="regular" theme="gold" class="text-[20px]">Blouson </Typography><span class="text-right text-[#E7B276] text-[16px]">M</span>
      </div>

      <hr class="w-full my-2 border-[1px] border-[#D4AF8E]">
      <div class="flex justify-between items-center w-full mt-2">
        <Typography variant="h2" component="h2" font="halenoir" weight="regular" theme="gold" class="text-[18px]">49,95 EUR </Typography>
        <select 
          v-model="quantity" 
          class="border border-[#D4AF8E] text-[16px] px-4 py-1 rounded bg-transparent text-[#D4AF8E]">
          <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
        </select>
      </div>

    </div>
  </div>
</div>

<div class="flex flex-col items-center mt-10 ">
<div class="flex">
  <Typography variant="h1" component="h1" font="scholar" theme="gold">TOTAL</Typography>
  <Typography variant="h2" component="h2" font="halenoir" weight="regular" theme="gold">
    {{ totalPanier }} €
  </Typography>
</div>

<Button variant="secondary" size="medium" class="w-[700px]">Commander</Button>
</div>
  </div>
  </div>

</template>

<script setup>
import Typography from '../UI/design-system/Typography.vue';
import Button from '../UI/design-system/Button.vue';
import { ref, onMounted, watch, computed } from 'vue';
import ParticlesBackground from "@/UI/Components/ParticlesBackground.vue";


const panier = ref([])

onMounted(() => {
  const donnees = localStorage.getItem('panier')
  if (donnees) {
    panier.value = JSON.parse(donnees)
  }
  console.log('panier :', panier.value)
  console.log('type de panier[0] :', typeof panier.value[0])
})

const supprimerArticle = (id) => {
  const index = panier.value.findIndex(produit => produit.id === id)
  if (index !== -1) {
    panier.value.splice(index, 1)
    localStorage.setItem('panier', JSON.stringify(panier.value))
  }
}

const updateQuantité = (id, quantité) => {
  const index = panier.value.findIndex(produit => produit.id === id)
  if (index !== -1) {
    panier.value[index].quantité = quantité
    localStorage.setItem('panier', JSON.stringify(panier.value))
  }
}
const totalPanier = computed(() => {
  return panier.value.reduce((total, produit) => {
    const prix = parseFloat(produit.price) || 0
    const quantite = parseInt(produit.quantité) || 1
    return total + prix * quantite
  }, 0).toFixed(2)
})


</script>

<style scoped>
.text-shadow-custom {
  text-shadow: 0 0 10px #E7B276;
}
</style>


