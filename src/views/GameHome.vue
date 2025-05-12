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
            Le but est simple, il faut retrouver les personnages habillé par notre marque dans cette carte.
            C’est exactement comme dans où est Charlie.
          </Typography>

          <Typography theme="gold" variant="h2" font="scholar">
            Les prix à gagner sont les suivants :
          </Typography>

          <div class="w-full h-fit relative">
            <div class="w-full h-[800px] sm:h-[600px] md:h-[400px] relative flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
              <div
                v-for="(place, index) in order"
                :key="index"
                :class="[place.style, 'transition-all duration-300 ease-in-out']"
                @click="rotateCards(index)"
              >
                <div class="w-full h-full flex flex-col items-center justify-center">
                  <Typography variant="h2" font="scholar" theme="gold">{{ place.name }}</Typography>
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
      name: '1ère Place',
      price: '1000€',
      color: 'bg-primary',
      style: 'relative sm:absolute w-[220px] sm:w-[275px] md:w-[325px] h-[240px] sm:h-[300px] md:h-[342px] z-10 bg-primary rounded-lg',
    },
    {
      name: '2ème Place',
      price: '500€',
      color: 'bg-secondary',
      style: 'relative sm:absolute w-[220px] sm:w-[250px] md:w-[304px] h-[200px] sm:h-[240px] md:h-[276px] sm:right-0 bg-secondary rounded-lg',
    },
    {
      name: '3ème Place',
      price: '250€',
      color: 'bg-tertiary',
      style: 'relative sm:absolute w-[220px] sm:w-[250px] md:w-[304px] h-[200px] sm:h-[240px] md:h-[276px] sm:left-0 bg-tertiary rounded-lg',
    },
  ]);

  
  const rotateCards = (index) => {
    if (index === 0) {
      order.value = defaultOrder.map((card, i) => ({
        ...card,
       
      }));
    } else if (index === 1) {
      order.value = [
        { ...defaultOrder[1],  },
        { ...defaultOrder[2], },
        { ...defaultOrder[0],  }
      ];
    } else if (index === 2) {
      order.value = [
        { ...defaultOrder[2],  },
        { ...defaultOrder[0], },
        { ...defaultOrder[1],  }
      ];
    }
  };
  
  // Update initial order with proper styles
  const defaultOrder = order.value.map((card, i) => ({
    ...card,
  }));
  
  return {
    router,
    order,
    rotateCards
  };
}

};
</script>

<style scoped>

</style>
