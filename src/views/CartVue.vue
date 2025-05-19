<template>
  <div v-if="loadingPanier" class="flex justify-center items-center w-full">
    <fwb-spinner color="gray" size="10" />
  </div>

  <div v-else class="w-full bg-quinary p-10">
    <ParticlesBackground />

    <main class="grid place-content-center min-h-[20vh] w-full"></main>

    <div class="flex flex-col sm:flex-row items-center gap-4">
      <img src="../assets/img/svg/panier.svg" class=" sm:w-auto" />
      <hr class="w-full  self-end border-[1px] border-gold sm:mt-[45px]" />
    </div>

    <div class="p-6">
      <div>
        <div v-if="panier.length === 0"
          class="flex flex-col items-center justify-center text-center text-lg text-gold gap-4">
          <Typography variant="h1" component="h1" font="scholar" weight="regular" theme="gold">
            Le panier est vide.
          </Typography>
          <router-link to="/products">
            <Button class="justify-center" variant="secondary">Explorer</Button>
          </router-link>
        </div>

        <div v-else class="flex flex-wrap justify-center gap-6">
          <div v-for="produit in panier" :key="produit.id" class="relative w-full sm:w-[300px] rounded shadow-lg p-4">
            <RouterLink :to="`/product/${produit.id}`">
              <div class="h-[320px] overflow-hidden">
                <img class="w-full h-full object-cover" :src="produit.images" alt="produit img"
                  style="clip-path: polygon(0% 0%, 100% 5%, 100% 100%, 0% 95%)" />
              </div>
            </RouterLink>

            <div class="absolute top-8 right-5 cursor-pointer w-[40px]" @click="supprimerArticle(produit.id)">
              <img src="../assets/img/svg/icons/bin-brown.svg" />
            </div>

            <div class="flex justify-between w-full mt-4 text-lg flex-wrap gap-2">
              <Typography variant="h1" component="h1" font="scholar" weight="regular" theme="gold">
                {{ produit.name }}
              </Typography>
              <span class="text-right text-[#E7B276] text-scholar text-[16px]">{{ produit.taille }}</span>
            </div>

            <hr class="w-full my-2 border-[1px]  border-gold" />

            <div class="flex justify-between items-center w-full mt-2 flex-wrap gap-2">
              <Typography variant="h2" component="h2" font="halenoir" weight="regular" theme="gold">
                {{ produit.price }} €
              </Typography>

              <select v-model="produit.quantité" @change="updateQuantité(produit.id, produit.quantité)"
                class="border  border-gold text-[16px] px-4 py-1 rounded bg-transparent text-[#E7B276]">
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center mt-10 gap-4 text-center">
        <div class="flex flex-col sm:flex-row items-center gap-2">
          <Typography variant="h1" component="h1" font="scholar" theme="gold">TOTAL</Typography>
          <Typography variant="h2" component="h2" font="halenoir" weight="regular" theme="gold">
            {{ totalPanier }} €
          </Typography>
        </div>

        <Button variant="secondary" @click="handleCheckout" class="w-50 sm:w-100">
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
import ParticlesBackground from "@/UI/Components/ParticlesBackground.vue";
import { FwbSpinner } from 'flowbite-vue'; // 🧩 Ajout du spinner

const panier = ref([]);
const loadingPanier = ref(true); // 👈 état de chargement
const productId = "price_1QxqwxBYXgW8ATru1sFnAEuu";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

onMounted(() => {
  setTimeout(() => {
    const donnees = localStorage.getItem('panier');
    if (donnees) {
      panier.value = JSON.parse(donnees);
    }
    loadingPanier.value = false; // 👈 On désactive le loading une fois les données récupérées
  }, 500); // 👈 petit délai pour voir le spinner, à ajuster selon ton cas
})

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
