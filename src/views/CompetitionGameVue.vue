<script setup>
import PanZoomMap from "../UI/Components/PanZoomMap.vue";
import Button from "../UI/design-system/Button.vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const handleGameEnd = () => {
    router.push('/game-end');
};
</script>

<template>
    <main class="grid place-content-center min-h-screen bg-[#E7B276] w-full">
        
        <PanZoomMap />
        <div class="absolute bottom-8 left-8 flex flex-col space-y-[16px]">
            <div class="w-[142px] h-[160px] bg-[#D9D9D9] flex justify-end items-end p-4">
                0/1
            </div>
            <div class="w-[142px] h-[160px] bg-[#D9D9D9] flex justify-end items-end p-4">
                0/1
            </div>
            <div class="w-[142px] h-[160px] bg-[#D9D9D9] flex justify-center items-center p-4">
               <img src="../assets/img/svg/check.svg" alt="">
            </div>
        </div>
        <Button 
            @click="handleGameEnd" 
            class="absolute bottom-8 right-8 w-[241px]" 
            variant="primary"
        >
            terminer
        </Button>
    </main>
</template>


<style scoped>

</style>