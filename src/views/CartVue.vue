<template>
    <main class="grid place-content-center min-h-[50vh] w-full">
        <h1 class="text-4xl text-red-500">Cart Page under development</h1>
        <div class="flex flex-col gap-4 mt-4">
            <RouterLink class="text-blue-500" to="/checkout">Checkout</RouterLink>
        </div>
    </main>

    <Typography variant="h1" component="h1" font="scholar" weight="regular" class="text-[80px] text-[#C4A36D] mb-10">
        PANIER
    </Typography>

    <div class="grid grid-cols-2 gap-10 items-start">
        <div class="relative w-full">
            <img src="../assets/img/png/card.png" alt="Produit" class="w-full h-auto object-cover" />
            <img src="../assets/img/svg/icons/bin-beige.svg" alt="Supprimer"
                class="absolute top-0 right-0 w-6 h-6 m-2" />
        </div>

        <div class="flex flex-col justify-between ">
            <div class="flex items-center justify-between mb-6">
                <div class="flex items-baseline gap-4">
                    <Typography variant="h2" component="h2" font="scholar" weight="regular" class="text-[24px]">
                        Blouson
                    </Typography>
                    <Typography variant="h3" component="h3" font="scholar" weight="regular" class="text-[24px]">
                        49,95 EUR
                    </Typography>
                </div>

                <select v-model="quantity" class="border text-[20px] px-4 py-2 a">
                    <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                </select>
            </div>

            <div class="flex gap-4 mb-6">
                <Button variant="outline" size="medium">XS</Button>
                <Button variant="outline" size="medium">S</Button>
                <Button variant="outline" size="medium">M</Button>
                <Button variant="outline" size="medium">L</Button>
                <Button variant="outline" size="medium">XL</Button>
            </div>

            <div class="flex items-center gap-4 mb-6">
                <img src="../assets/img/svg/icons/bin-beige.svg" class="w-6 h-6" />
                <img src="../assets/img/svg/icons/favorie-filled-brown.svg" class="w-6 h-6" />
            </div>
        </div>
    </div>

    <div class="text-right mt-10 text-[20px]">
        Total: 49,95 EUR
    </div>

</template>

<script setup>
import Typography from '../UI/design-system/Typography.vue';
import Button from '../UI/design-system/Button.vue';


</script>

<style scoped></style>