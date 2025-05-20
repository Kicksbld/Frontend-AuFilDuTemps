<template>
  <div class="bg-quinary w-full">
    <ParticlesBackground />
    <main class="grid place-content-center  w-full "></main>

    <div class="pt-42 gap-20 flex flex-col">
      <div class="flex">
        <img src="../../assets/img/svg/coupons.svg" />
        <hr class="w-full my-2 border-[1px] border-gold mt-45" />
      </div>

      <div v-if="loading" class="text-center py-4">
        <Typography variant="h2" font="scholar" theme="gold">
          Chargement des coupons...
        </Typography>
      </div>

      <div v-else-if="error" class="text-center py-4">
        <Typography variant="h2" font="scholar" theme="gold">
          Erreur lors du chargement des coupons
        </Typography>
      </div>

      <div v-else-if="!safeCoupons" class="text-center py-4">
        <Typography variant="h2" font="scholar" theme="gold">
          Aucun coupon disponible
        </Typography>
      </div>

      <div v-else>
        <img v-if="safeCoupons[0]?.imageUrl" alt="Coupon" :src="safeCoupons[0].imageUrl" />
        <Typography v-else variant="h2" font="scholar" theme="gold">
          Image du coupon non disponible
        </Typography>
      </div>
    </div>
    <div class="flex justify-center items-center pt-30 pb-8">
      <Button @click="router.push('/account')" variant="secondary">
        Retour Au Compte
      </Button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Button from '../../UI/design-system/Button.vue';
import Typography from '../../UI/design-system/Typography.vue';
import ParticlesBackground from "@/UI/Components/ParticlesBackground.vue";
import { useApi } from "@/stores/dataBaseData"
import { coupons } from "@/services"
import { watch, onMounted, computed } from 'vue';

const { data: couponsData, error, loading, run: fetchCoupons } = useApi(coupons.list)

// Add computed property to safely handle coupons data
const safeCoupons = computed(() => {
  console.log('coupons reçus :', couponsData.value)
  return couponsData.value || []
})

watch(couponsData, (newValue) => {
  console.log('coupons reçus :', newValue)
}, { immediate: true })

onMounted(async () => {

  await fetchCoupons()
  console.log('After fetch - coupons data:', couponsData.value)
})

const router = useRouter();
</script>