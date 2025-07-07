<script setup>
import PanZoomMap from "../UI/Components/PanZoomMap.vue";
import Button from "../UI/design-system/Button.vue";
import { useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';
import Typography from "../UI/design-system/Typography.vue";

const router = useRouter();
const timer = ref('00:00');
const isCharacterFound = ref(false);
let startTime = null;
let timerInterval = null;

const startTimer = () => {
  startTime = Date.now();
  timerInterval = setInterval(() => {
    const elapsedTime = Date.now() - startTime;
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    timer.value = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, 1000);
};

const stopAndSaveTimer = () => {
  if (timerInterval) {
    clearInterval(timerInterval);
    localStorage.setItem('gameTime', timer.value);
  }
};

const handleCharacterFound = () => {
  isCharacterFound.value = true;
  handleGameEnd();
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
});

const handleGameEnd = () => {
  stopAndSaveTimer();
};
</script>

<template>
    <main class="grid z-50 relative place-content-center min-h-screen bg-[#E7B276] w-full">
      <div v-if="isCharacterFound" class="absolute bottom-4 right-4 bg-quinary p-4 rounded-lg flex items-center gap-4" :class="{ 'slide-in-left': isCharacterFound }">
        <Typography variant="h2" font="scholar" theme="gold">
          Vous avez trouvé Raph
        </Typography>
        <Button 
            @click="router.push('/game-end')"
            class=" w-[241px]" 
            variant="secondary"
        >
            terminer
        </Button>
      </div>
        <img class="absolute top-4 z-50  left-1/2 transform -translate-x-1/2 w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] max-w-[450px]"
            alt="ou est raph" src="../assets/img/svg/OuestRaph.svg" />
        <div class="absolute items-end flex gap-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[45%]">

            <div class="flex flex-col space-y-[16px]">
                <div class="w-[142px] h-[160px] bg-[#BF8E63] flex items-center justify-center">
                    <img src="../assets/img/svg/characterToFind.svg" class="w-[40%] h-auto" alt="">
                </div>
                <div class="w-[142px] h-auto bg-[#BF8E63] flex justify-center items-center p-4">
                    <p class="font-halenoir text-3xl text-[#52504F]">{{ timer }}</p>
                </div>
            </div>
            <PanZoomMap @character-found="handleCharacterFound" />
        </div>

        
    </main>
</template>


<style scoped></style>