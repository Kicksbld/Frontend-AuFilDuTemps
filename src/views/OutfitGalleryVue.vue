<template>
    <main class="grid place-content-center min-h-[50vh] w-full">
        <h1 class="text-4xl text-red-500">Outfit Gallery Page under development</h1>
        <div class="flex flex-col gap-4 mt-4">
            <RouterLink class="text-blue-500" to="/products">Products</RouterLink>
        </div>
    </main>
    <div class="grid grid-cols-2 gap-4 w-full mt-1">
        <img class="w-[400px] ml-[100px]" src="../assets/img/png/card.png" alt="card penché">
        <img class=" w-[400px]" src="../assets/img/png/card.png" alt="card penché">
    </div>

    <div class="grid grid-cols-2 gap-4 w-full mt-1">
        <img class=" w-[400px] ml-[100px]" src="../assets/img/png/card.png" alt="card penché">
        <Typography variant="h1" component="h1" font="halenoir" weight="light" theme="tercery">
            L'art, c'est le reflet que renvoie l'âme humaine éblouie de la splendeur du beau. - Victor Hugo
        </Typography>
    </div>

    <div class="flex grid grid-cols-2 gap-4 w-full mt-1">
        <img class="w-[400px] ml-[100px] " src="../assets/img/png/card.png" alt="card penché">
        <img class=" w-[400px]" src="../assets/img/png/card.png" alt="card penché">
    </div>


<div class="flex grid grid-cols-2 gap-4 w-full mt-1">
    <img class=" w-[400px] ml-[100px]" src="../assets/img/png/card.png" alt="card penché">
    <Typography variant="h1" component="h1" font="halenoir" weight="light" theme="tercery">
        L'art, c'est le reflet que renvoie l'âme humaine éblouie de la splendeur du beau. - Victor Hugo
    </Typography>
</div>
</template>

<script setup>
import Typography from '../UI/design-system/Typography.vue';


</script>

<style scoped></style>