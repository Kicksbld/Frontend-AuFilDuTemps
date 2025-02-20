<script setup>
import { useDataBaseStore } from "../stores/dataBaseData";
import { onMounted, computed } from "vue";
import { RouterLink } from "vue-router";

const { fetchDBData, state } = useDataBaseStore();

onMounted(() => {
    fetchDBData("users");
});

const users = computed(() => Array.isArray(state.data) ? state.data : []);

</script>

<template>
  <main class="grid place-content-center min-h-screen w-full">
    <h1 class="text-4xl text-red-500">Home Page under development</h1>
    <div class="flex flex-col gap-4 mt-4" >
    <RouterLink class="text-blue-500" to="/cart">Cart</RouterLink>
    <RouterLink class="text-blue-500" to="/checkout">Checkout</RouterLink>
    <RouterLink class="text-blue-500" to="/order-review">Order Review</RouterLink>
    <RouterLink class="text-blue-500" to="/outfit-gallery">Outfit Gallery</RouterLink>
    <RouterLink class="text-blue-500" to="/products">Products</RouterLink>
    <RouterLink class="text-blue-500" to="/favourites">Favourites</RouterLink>
    <RouterLink class="text-blue-500" to="/collections">Collections</RouterLink>
    <RouterLink class="text-blue-500" to="/account">Account</RouterLink>
    <RouterLink class="text-blue-500" to="/account/adresses">Adresses</RouterLink>
    <RouterLink class="text-blue-500" to="/account/connections">Connections</RouterLink>
    <RouterLink class="text-blue-500" to="/account/order">Order</RouterLink>
    <RouterLink class="text-blue-500" to="/account/payement-method">Payement Method</RouterLink>
    <RouterLink class="text-blue-500" to="/account/support-form">Support Form</RouterLink>
    
  </div>
  </main>
  
</template>
