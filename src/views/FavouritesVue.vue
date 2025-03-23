<template>
    <main class="grid place-content-center min-h-[50vh] w-full">
        <h1 class="text-4xl text-red-500">favourites Page under development</h1>
        <div class="flex flex-col gap-4 mt-4">
            <RouterLink class="text-blue-500" to="/products">Products</RouterLink>
        </div>
    </main>

    <Typography class="mt-[15%] mb-[5%]" variant="h1" component="h1" font="scholar" weight="regular" theme="tercery">
        FAVORIS
    </Typography>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            <div class="flex flex-col items-center relative w-100">
                <img class="w-100" src="../assets/img/png/card.png" alt="produit img"
                    style="clip-path: polygon(0% 0%, 100% 5%, 100% 100%, 0% 100%);">
                <span class="absolute top-2 right-2 text-xl text-gray-700 cursor-pointer">🗑️</span>
                <div class="flex justify-between w-full mt-4 text-lg font-semibold">
                    <Typography class="mt-[15%] mb-[5%]" variant="h1" component="h1" font="halenoir" weight="light"
                        theme="tercery">
                        Nom du produit
                    </Typography>
                    <Typography class="mt-[15%] mb-[5%]" variant="h1" component="h1" font="halenoir" weight="light"
                        theme="tercery">
                        45,95 EUR
                    </Typography>
                </div>
                <hr class="w-full my-2 border-[1px] border-black">
                <Button @click="router.push('/design-sytem')" variant="primary" size="medium">
                    AJOUTER
                </Button>
            </div>
        </div>


        <div class="flex flex-col items-center relative ">
                <img class="w-100" src="../assets/img/png/card.png" alt="produit img"
                    style="clip-path: polygon(0% 0%, 100% 5%, 100% 100%, 0% 100%);">
                <span class="absolute top-2 right-2 text-xl text-gray-700 cursor-pointer">🗑️</span>
                <div class="flex justify-between w-full mt-4 text-lg font-semibold">
                    <Typography class="mt-[15%] mb-[5%]" variant="h1" component="h1" font="halenoir" weight="light"
                        theme="tercery">
                        Nom du produit
                    </Typography>
                    <Typography class="mt-[15%] mb-[5%]" variant="h1" component="h1" font="halenoir" weight="light"
                        theme="tercery">
                        45,95 EUR
                    </Typography>
                </div>
                <hr class="w-full my-2 border-[1px] border-black">
                <Button @click="router.push('/design-sytem')" variant="primary" size="medium">
                    AJOUTER
                </Button>
            </div>

        <div class="flex flex-col items-center relative ">
                <img class="w-100" src="../assets/img/png/card.png" alt="produit img"
                    style="clip-path: polygon(0% 0%, 100% 5%, 100% 100%, 0% 100%);">
                <span class="absolute top-2 right-2 text-xl text-gray-700 cursor-pointer">🗑️</span>
                <div class="flex justify-between w-full mt-4 text-lg font-semibold">
                    <Typography class="mt-[15%] mb-[5%]" variant="h1" component="h1" font="halenoir" weight="light"
                        theme="tercery">
                        Nom du produit
                    </Typography>
                    <Typography class="mt-[15%] mb-[5%]" variant="h1" component="h1" font="halenoir" weight="light"
                        theme="tercery">
                        45,95 EUR
                    </Typography>
                </div>
                <hr class="w-full my-2 border-[1px] border-black">
                <Button @click="router.push('/design-sytem')" variant="primary" size="medium">
                    AJOUTER
                </Button>
            </div>

    </div>


</template>

<script>
import Typography from '../UI/design-system/Typography.vue';
import Button from '../UI/design-system/Button.vue';


</script>

<style scoped></style>