<template>
    <main class="grid place-content-center min-h-[50vh] w-full">
        <h1 class="text-4xl text-red-500">Cart Page under development</h1>
        <div class="flex flex-col gap-4 mt-4">
            <RouterLink class="text-blue-500" to="/checkout">Checkout</RouterLink>
        </div>
    </main>
    <Typography variant="h1" component="h1" font="scholar" weight="regular" theme="primary" class="text-[80px] mb-10">
    PANIER
</Typography>

<div class="flex gap-10 items-start">
  <div class="relative">
    <img src="../assets/img/png/card.png" alt="Produit" class="rounded w-[500px]" />
    <img src="../assets/img/svg/icons/bin-beige.svg" alt="Supprimer" class="absolute top-2 right-2 w-6 h-6 cursor-pointer" />
  </div>

  <div class="w-[2px] h-[500px] bg-[#BF8E63]"></div>

  <div class="flex flex-col justify-start w-full">
    <div class="flex justify-between items-start mb-6">
      <div class="flex gap-4 items-baseline">
        <Typography variant="h1" component="h1" font="scholar" weight="medium" theme="secondary">
          Blouson
        </Typography>
        <Typography variant="h2" component="h2" font="halenoir" weight="medium" theme="secondary">
          49,95 EUR
        </Typography>
      </div>

      <select v-model="quantity" class="border text-[20px] px-4 py-1 rounded bg-transparent text-[#D4AF8E]">
        <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
      </select>
    </div>


    <div class="flex gap-4 mb-6">
      <Button variant="primary" size="medium">XS</Button>
      <Button variant="primary" size="medium">S</Button>
      <Button variant="primary" size="medium">M</Button>
      <Button variant="primary" size="medium">L</Button>
      <Button variant="primary" size="medium">XL</Button>
    </div>

    <div class="flex items-center gap-4 mb-6">
      <Button class="border-none p-0">
        <img src="../assets/img/svg/icons/bin-beige.svg" class="w-9" />
      </Button>
      <Button class="border-none p-0">
        <img src="../assets/img/svg/icons/favorie-filled-beige.svg" class="w-9" />
      </Button>
    </div>
  </div>
  
</div>
<Typography variant="h1" component="h1" font="halenoir"> Total: 49,95 EUR</Typography>
<RouterLink to="/account/payement-method">
      <Button variant="primary" size="medium" class="w-[300px] ml-100 text-center flex justify-center align-center " >
        Commander
      </Button>
    </RouterLink>
</template>

<script setup>
import Typography from '../UI/design-system/Typography.vue';
import Button from '../UI/design-system/Button.vue';



</script>

<style scoped></style>