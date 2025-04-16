<template>
  <div class="w-full bg-quinary">
    <main class="grid place-content-center min-h-[50vh] w-full">
      <h1 class="text-4xl text-red-500">Checkout Page under development</h1>
      <div class="flex flex-col gap-4 mt-4">
        <RouterLink class="text-blue-500" to="/cart">Cart</RouterLink>
        <RouterLink class="text-blue-500" to="/order-review"
          >Order Review</RouterLink
        >
  
        <button
          class="px-6 py-2 border-none bg-blue-500 text-white rounded-md cursor-pointer"
          @click="handleCheckout"
        >
          Passer Au Payement
        </button>
      </div>
    </main>

  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productId: "price_1QxqwxBYXgW8ATru1sFnAEuu", 
        BACKEND_URL: import.meta.env.VITE_BACKEND_URL
      };
    },
    methods: {
      async handleCheckout() {
        try {
          const response = await fetch(`${this.BACKEND_URL}/payement`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              priceId: this.productId, 
            }),
          });
  
          const data = await response.json();
          if (data.url) {
            window.location.href = data.url; 
          }
        } catch (error) {
          console.error("Error:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .text-shadow-custom {
  text-shadow: 0 0 10px #E7B276;
}

</style>