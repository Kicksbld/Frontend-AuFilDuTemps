<template>
  <div class="bg-quinary w-full">
    <ParticlesBackground />
    <main class="grid place-content-center  w-full "></main>

    <div class="pt-42 gap-20 flex flex-col">
      <div class="flex">
        <img src="../../assets/img/svg/coupons.svg" />
        <hr class="w-full my-2 border-[1px] border-gold mt-45" />
      </div>
      <div class="">
        <img src="../../assets/img/svg/price.svg" />
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
import Typography from '../../UI/design-system/Typography.vue';
import Button from '../../UI/design-system/Button.vue';
import ParticlesBackground from "@/UI/Components/ParticlesBackground.vue";

const router = useRouter();
</script>