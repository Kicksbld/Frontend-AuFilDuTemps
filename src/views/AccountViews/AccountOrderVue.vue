<template>
    <div class=" w-full bg-quinary">
      <ParticlesBackground />
    <main class="grid place-content-center min-h-[20vh] w-full">
       
    </main>

 <img src="../../assets/img/svg/dernierescommandes.svg">

        <!--    v-for="(product, index) in orders"
        :key="index" -->
    <div class="flex gap-8 justify-center">
      <div
          v-for="n in 4"
        :key="n" class=" w-full h-full bg-[#4C0B0C]"
        :style="{ clipPath: 'polygon(0% 0%, 100% 5%, 100% 100%, 0% 98%)' }">
        <img src="../../assets/img/png/card.png" class="w-full " />
        <div class="p-4 flex flex-col justify-between">
          <div>
            <Typography variant="h2" font="scholar" weight="regular" theme="gold" >Pull #{{n }}</Typography>
            <br>
            <Typography variant="h3" font="scholar" weight="regular" theme="gold">description</Typography>
          </div>
          <div class="flex items-center justify-between mt-auto">
            <Typography variant="h3" font="scholar" weight="regular" theme="gold">Date d'achat</Typography>
            <img src="../../assets/img/svg/icons/cart-brown.svg" class="bg-white rounded-xl w-6 h-6 p-1" />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import Typography from '../../UI/design-system/Typography.vue';
import ParticlesBackground from "@/UI/Components/ParticlesBackground.vue";



//& les produits enregistrés

// export default {
//   data() {
//     return {
//       orders: [
//         {
//           name: 'Pull',
//           description: 'blabla',
//           date: '12/03/2025',
//           image: '../../assets/img/png/card.png',
//         },
//         {
//           name: 'Sweat',
//           description: 'blabla',
//           date: '25/02/2025',
//           image: '../../assets/img/png/card.png',
//         },
//         {
//           name: 'T-shirt ',
//           description: 'blabla',
//           date: '10/01/2025',
//           image: '../../assets/img/png/card.png',
//         },
//         {
//           name: 'pantalon',
//           description: 'blabla',
//           date: '05/12/2024',
//           image: '../../assets/img/png/card.png',
//         },
//       ],
//     };
//   },
// };

    
</script>

<style scoped>

.text-shadow-custom {
  text-shadow: 0 0 10px #E7B276;
}

</style>