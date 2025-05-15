<template>
  <div class="w-full bg-quinary p-10">

    <main class="grid place-content-center min-h-[20vh] w-full">
       
    </main>
    
    <div class="flex">
    <img src="../assets/img/svg/panier.svg">
    <hr class="w-full my-2 border-[1px] border-[#D4AF8E] mt-45" />
    </div>

    <div class="p-6">
      <div>
  

    <div
  v-if="panier.length === 0"
  class="flex flex-col items-center justify-center text-center text-lg text-gold gap-4"
>
  <Typography variant="h1" component="h1" font="scholar" weight="regular" theme="gold" >Le panier est vide.</Typography>
  <router-link to="/">
    <Button class="justify-center" variant="secondary">Explorer</Button>
  </router-link>
</div>

    <div v-else class="space-y-8 flex flex-col-1">
      <div
        v-for="produit in panier"
        :key="produit.id"
        class="relative w-[300px] rounded shadow-lg p-4"
      >
      
      <RouterLink :to="`/product/${produit.id}`">
      <div class="h-[320px] overflow-hidden">
        <img
          class="w-full h-full object-cover"
          :src="produit.images"
          alt="produit img"
          style="clip-path: polygon(0% 0%, 100% 5%, 100% 100%, 0% 95%)"
        />
      </div>
    </RouterLink>
        
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

<div class="flex flex-col items-center mt-10 ">
<div class="flex">
  <Typography variant="h1" component="h1" font="scholar" theme="gold">TOTAL</Typography>
  <Typography variant="h2" component="h2" font="halenoir" weight="regular" theme="gold">
    {{ totalPanier }} €
  </Typography>
</div>

<Button variant="secondary" @click="handleCheckout" class="w-100">
    Commander
</Button>
</div>
  </div>
  </div>

</template>

<script setup>
import Typography from '../UI/design-system/Typography.vue';
import Button from '../UI/design-system/Button.vue';
import { ref, onMounted, watch, computed } from 'vue';


const panier = ref([]);
const productId = "price_1QxqwxBYXgW8ATru1sFnAEuu";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


onMounted(() => {
  const donnees = localStorage.getItem('panier');
  if (donnees) {
    panier.value = JSON.parse(donnees);
  }
  console.log('panier :', panier.value);
  console.log('type de panier[0] :', typeof panier.value[0]);
});


const supprimerArticle = (id) => {
  const index = panier.value.findIndex(produit => produit.id === id);
  if (index !== -1) {
    panier.value.splice(index, 1);
    localStorage.setItem('panier', JSON.stringify(panier.value));
  }
};


const updateQuantité = (id, quantité) => {
  const index = panier.value.findIndex(produit => produit.id === id);
  if (index !== -1) {
    panier.value[index].quantité = quantité;
    localStorage.setItem('panier', JSON.stringify(panier.value));
  }
};


const totalPanier = computed(() => {
  return panier.value.reduce((total, produit) => {
    const prix = parseFloat(produit.price) || 0;
    const quantite = parseInt(produit.quantité) || 1;
    return total + prix * quantite;
  }, 0).toFixed(2);
});

//& Paiement
const handleCheckout = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/payement`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priceId: productId,
      }),
    });

    const data = await response.json();
    if (data.url) {
      window.location.href = data.url;
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
</script>


<style scoped>
.text-shadow-custom {
  text-shadow: 0 0 10px #E7B276;
}
</style>


