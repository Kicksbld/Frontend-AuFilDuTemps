<template>
 <div class="bg-quinary w-full">
   <ParticlesBackground />
    <main class="grid place-content-center min-h-[25vh] w-full "></main>

    <div class="flex">
      <div class="flex justify-between items-center mb-4">
        <img src="../../assets/img/svg/coupons.svg" alt="paramètres" class="flex w-200" />
     
      </div>
      <hr class="w-full my-2 border-[1px] border-[#D4AF8E] mt-30" />
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