<template>
  <div class="bg-quinary w-full">
    <ParticlesBackground />
    <main class="grid place-content-center min-h-[25vh] w-full "></main>

    <div class="pt-40 min-h-screen flex flex-col">
      <div class="flex">
        <img src="../assets/img/svg/coupon.svg" />
        <hr class="w-full my-2 border-[1px] border-gold mt-45" />
      </div>

    </div>

    <Typography variant="h1" font="scholar" theme="gold">Test</Typography>
    <div class="p-10">
      <img src="../../assets/img/svg/price.svg">
    </div>
  </div>
</template>


<script setup>
import Typography from '../../UI/design-system/Typography.vue';
import ParticlesBackground from "@/UI/Components/ParticlesBackground.vue";
</script>