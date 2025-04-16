<template>

<div class="w-full bg-quinary p-10">

    <main class="grid place-content-center min-h-[50vh] w-full">
        <h1 class="text-4xl text-red-500">favourites Page under development</h1>
        <div class="flex flex-col gap-4 mt-4">
            <RouterLink class="text-blue-500" to="/products">Products</RouterLink>
        </div>
    </main>

    <Typography variant="h1" component="h1" font="scholar" weight="regular" theme="quaternary" class="text-[80px] text-shadow-custom mb-10">
        FAVORIS
    </Typography>

    <div class="grid grid-cols-2 gap-9 justify-center px-4">
        <div class="grid  gap-2">
            <div class="flex flex-col items-center relative">
                <img class="w-100" src="../assets/img/png/card.png" alt="produit img"
                    style="clip-path: polygon(0% 0%, 100% 5%, 100% 100%, 0% 95%);">

                <div class="absolute top-2 right-1 cursor-pointer w-[50px]"><img
                        src="../assets/img/svg/icons/bin-beige.svg"></div>
                <div class="flex justify-between w-full mt-4 text-lg">
                    <Typography class="mt-[15%] mb-[5%]" variant="h1" component="h1" font="scholar" weight="regular"
                        theme="quaternary">
                        Blouson
                    </Typography>
                    <Typography class="mt-[15%] mb-[5%]" variant="h2" component="h2" font="halenoir" weight="regular"
                        theme="quaternary">
                        45,95 EUR
                    </Typography>
                </div>
                <hr class="w-full my-2 border-[1px] border-black">
                <Button class="w-full" @click="router.push('/cart')" variant="secondary" size="medium">
                    AJOUTER
                </Button>
                <div class="flex gap-3 p-2 w-full">
                    <Button class="w-full" @click="router.push('')" variant="secondary" size="medium">
                        XS
                    </Button>
                    <Button class="w-full" @click="router.push('')" variant="secondary" size="medium">
                        S
                    </Button>
                    <Button class="w-full" @click="router.push('')" variant="secondary" size="medium">
                        M
                    </Button>
                    <Button class="w-full" @click="router.push('')" variant="secondary" size="medium">
                        L
                    </Button>
                    <Button class="w-full" @click="router.push('')" variant="secondary" size="medium">
                        XL
                    </Button>
                </div>
            </div>
        </div>


        <div class="flex flex-col items-center relative ">
            <img class="w-100" src="../assets/img/png/card.png" alt="produit img"
                style="clip-path: polygon(0% 0%, 100% 5%, 100% 100%, 0% 95%);">
            <div class="absolute top-2 right-2 text-xl text-gray-700 cursor-pointer w-[50px]"><img
                    src="../assets/img/svg/icons/bin-beige.svg"></div>
            <div class="flex justify-between w-full mt-4 text-lg">
                <Typography class="mt-[15%] mb-[5%]" variant="h1" component="h1" font="scholar" weight="regular"
                    theme="quaternary">
                    T-shirt
                </Typography>
                <Typography class="mt-[15%] mb-[5%]" variant="h2" component="h2" font="halenoir" weight="regular"
                    theme="quaternary">
                    45,95 EUR
                </Typography>
            </div>
            <hr class="w-full my-2 border-[1px] border-black">
            <Button class="w-full" @click="router.push('/cart')" variant="secondary" size="medium">
                AJOUTER
            </Button>
            <div class="flex gap-3 p-2 w-full">
                    <Button class="w-full" @click="router.push('')" variant="secondary" size="medium">
                        XS
                    </Button>
                    <Button class="w-full" @click="router.push('')" variant="secondary" size="medium">
                        S
                    </Button>
                    <Button class="w-full" @click="router.push('')" variant="secondary" size="medium">
                        M
                    </Button>
                    <Button class="w-full" @click="router.push('')" variant="secondary" size="medium">
                        L
                    </Button>
                    <Button class="w-full" @click="router.push('')" variant="secondary" size="medium">
                        XL
                    </Button>
                </div>
        </div>

        <div class="flex flex-col items-center relative ">
            <img class="w-100" src="../assets/img/png/card.png" alt="produit img"
                style="clip-path: polygon(0% 0%, 100% 5%, 100% 100%, 0% 95%);">
            <div class="absolute top-2 right-2 text-xl text-gray-700 cursor-pointer w-[50px]"><img
                    src="../assets/img/svg/icons/bin-beige.svg"></div>
            <div class="flex justify-between w-full mt-4 text-lg">
                <Typography class="mt-[15%] mb-[5%]" variant="h1" component="h2" font="scholar" weight="regular"
                    theme="quaternary">
                   Pantalon original
                </Typography>
                <Typography class="mt-[15%] mb-[5%]" variant="h1" component="h2" font="halenoir" weight="regular"
                    theme="quaternary">
                    45,95 EUR
                </Typography>
            </div>
            <hr class="w-full my-2 border-[1px] border-black">
            <Button class="w-full" @click="router.push('/cart')" variant="secondary" size="medium">
                AJOUTER
            </Button>
            <div class="flex gap-3 p-2 w-full">
                    <Button class="w-full" @click="router.push('')" variant="secondary" size="medium">
                        XS
                    </Button>
                    <Button class="w-full" @click="router.push('')" variant="secondary" size="medium">
                        S
                    </Button>
                    <Button class="w-full" @click="router.push('')" variant="secondary" size="medium">
                        M
                    </Button>
                    <Button class="w-full" @click="router.push('')" variant="secondary" size="medium">
                        L
                    </Button>
                    <Button class="w-full" @click="router.push('')" variant="secondary" size="medium">
                        XL
                    </Button>
                </div>
        </div>

    </div>
</div>

</template>

<script setup>
import Typography from '../UI/design-system/Typography.vue';
import Button from '../UI/design-system/Button.vue';



</script>

<style scoped>
.text-shadow-custom {
  text-shadow: 0 0 10px #E7B276;
}
</style>