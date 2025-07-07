<template>
  <div class="w-full bg-quinary min-h-screen">
    <ParticlesBackground />

   
    <div class="flex mt-60">
      <img src="../../assets/img/svg/commandes.svg" />
      <hr class="w-full my-2 border-[1px]  border-gold mt-30" />
    </div>

    <div v-if="loading" class="text-center py-4 ">
      <Typography variant="h2" font="scholar" theme="gold">
        Chargement des commandes...
      </Typography>
    </div>

    <div v-else-if="error" class="text-center py-4">
      <Typography variant="h2" font="scholar" theme="gold">
        Erreur lors du chargement des commandes
      </Typography>
    </div>

    <div v-else-if="ordersData && ordersData.length === 0" class="text-center py-4">
      <Typography variant="h2" font="scholar" theme="gold">
        Vous n'avez pas de commandes
      </Typography>
    </div>

    <div v-else class="flex overflow-x-auto gap-6 px-4 py-6 justify-center">
      <div v-for="(order) in ordersData" :key="order.id"
        class="min-w-[300px] max-w-[300px] bg-[#4C0B0C] flex-shrink-0 rounded-xl"
        :style="{ clipPath: 'polygon(0% 0%, 100% 5%, 100% 100%, 0% 98%)' }">
        <RouterLink :to="`/product/${order.items[0].product.id}`">
          <img class="w-full h-[250px] object-cover" :src="order.items[0].product.images?.[0]" alt="produit img"
            style="clip-path: polygon(0% 0%, 100% 5%, 100% 100%, 0% 95%)" />


          <div class="p-4 flex flex-col justify-between min-h-[200px]">
            <div class="flex items-center justify-between gap-2" v-for="item in order.items">
              <Typography  variant="h2" font="scholar" weight="regular" theme="gold">
                {{ item.product.name }}
              </Typography>
              <Typography variant="h3" font="scholar" weight="regular" theme="gold">
                {{ item.product.price }} € * {{ item.quantity }}
              </Typography>
            </div>
            <br />
            <div>
              <Typography variant="h3" font="scholar" weight="regular" theme="gold">
                Total: {{ (order.totalAmount).toFixed(2) }} €
              </Typography>
            </div>
            <br />
            <div class="flex items-center justify-between mt-auto">
              <Typography variant="h3" font="scholar" weight="regular" theme="gold">
                Créé le: {{ formatDate(order.createdAt) }}
              </Typography>
              <router-link to="/cart">
                <Button variant="secondary" @click="addToCart(product)"
                  class="relative w-12 h-12 rounded-full  shadow-[0_0_10px_#E7B276] transition-all duration-300 ease-in-out hover:bg-[#E7B276] hover:shadow-none flex items-center justify-center">
                  <img src="../../assets/img/svg/icons/cart-brown.svg" class="w-8" />
                </Button>
              </router-link>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { RouterLink } from 'vue-router'
import Typography from '../../UI/design-system/Typography.vue';
import ParticlesBackground from "@/UI/Components/ParticlesBackground.vue";
import { orders } from "@/services"
import { useApi } from "@/stores/dataBaseData"

const { data: ordersData, error, loading, run: fetchOrders } = useApi(orders.list)

watch(ordersData, (newValue) => {
  console.log('commandes reçues :', newValue)
}, { immediate: true })

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

onMounted(async () => {
  await fetchOrders()
})
</script>

<style scoped></style>
