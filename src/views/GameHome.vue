<template>
  <div class="w-full min-h-screen bg-quinary p-14">
    <div class="flex gap-12">
      <div class="relative flex-1 hidden lg:block">
        <img src="../assets/img/png/imgGameHome.png" alt="game home" class="absolute bg-cover">
      </div>
      
      <div class="space-y-12 flex-1">
        <img src="../assets/img/svg/ouEstLeTee.svg" alt="ou est le tee">
        <div class="space-y-6">
          <Typography theme="gold" variant="h2" font="scholar">
            Le but est simple, il faut retrouver Raph, le seul personnage habillé par notre marque dans cette carte en un temps imparti.
          </Typography>

          <Typography theme="gold" variant="h2" font="scholar">
            Les prix à gagner sont les suivants :
          </Typography>

          <div class="w-full h-fit">
            <div class="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
              <div
                v-for="(place, index) in order"
                :key="index"
                :class="[place.style, 'transition-all duration-300 ease-in-out']"
                :style="{ backgroundImage: `url(${bgCard})`, backgroundRepeat: 'no-repeat', backgroundSize: '80%', backgroundPosition: 'bottom left' }"
              >
                <div class="w-full h-full flex flex-col items-center justify-start pt-4 pb-6">
                  <div class="text-center flex flex-col items-center gap-2">
                    <h2 class="font-scholar text-7xl" :class="place.name === '1' ? 'text-quinary' : 'text-gold'">{{ place.name }}</h2>
                    <p class="font-scholar text-xl max-w-[75%]" :class="place.name === '1' ? 'text-quinary' : 'text-gold'">{{ place.details }}</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button @click="router.push('/competition-game')" variant="secondary" size="large" class="w-full">
          Démarrer
        </Button>
      </div>
    </div>
  </div>
</template>


<script>
import Typography from '../UI/design-system/Typography.vue';
import Button from '../UI/design-system/Button.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import bgCard from "../assets/img/png/bg-card.png"

export default {
  name: 'GameHome',
  components: {
    Typography,
    Button
  },
  setup() {
  const router = useRouter();

  const order = ref([
    
    {
      name: '2',
      price: '500€',
      style: 'relative w-[220px] aspect-square bg-primary rounded-lg card-overlay',
      details: "Si tu trouves Raph en moins de 1 minute, tu gagnes -10% !"
    },
    {
      name: '1',
      price: '1000€',
      style: 'relative w-[300px] aspect-square bg-gold rounded-lg',
      details: "Si tu trouves Raph en moins de 10 secondes, tu gagnes un t-shirt !"
    },
    {
      name: '3',
      price: '250€',
      style: 'relative w-[220px] aspect-square  bg-primary rounded-lg card-overlay',
      details: "Si tu trouves Raph en moins de 30 secondes, tu gagnes -20% !"
    },
  ]);

  
  return {
    router,
    order,
    bgCard
  };
}

};
</script>

<style scoped>

</style>
