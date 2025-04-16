<template>
    <div class=" w-full bg-quinary">
    <main class="grid place-content-center min-h-[50vh] w-full">
        <h1 class="text-4xl text-red-500">Order Page under development</h1>
    </main>

    <div class="flex ">
    <Typography variant="h1" component="h1" font="flaemische" theme="quaternary" class="text-[50px] text-shadow-custom pb-[4px]">V</Typography>
    <Typography variant="h1" component="h1" font="scholar" theme="quaternary" class="text-[60px] text-shadow-custom">os dernières commandes</Typography>
</div>

        <!--    v-for="(product, index) in orders"
        :key="index" -->
    <div class="flex gap-8 justify-center">
      <div
          v-for="n in 4"
        :key="n" class=" w-[200px] h-[350px] bg-[#4C0B0C]"
        :style="{ clipPath: 'polygon(0% 0%, 100% 5%, 100% 100%, 0% 95%)' }">
        <img src="../../assets/img/png/card.png" class="w-full h-[180px] object-cover" />
        <div class="p-4 flex flex-col justify-between h-[170px]">
          <div>
            <Typography variant="h2" font="scholar" weight="regular" theme="quaternary" >Pull #{{n }}</Typography>
            <br>
            <Typography variant="h3" font="scholar" weight="regular" theme="quaternary">description</Typography>
          </div>
          <div class="flex items-center justify-between mt-auto">
            <Typography variant="h3" font="scholar" weight="regular" theme="quaternary">Date d'achat</Typography>
            <img src="../../assets/img/svg/icons/cart-brown.svg" class="bg-white rounded-xl w-6 h-6 p-1" />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import Typography from '../../UI/design-system/Typography.vue';

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