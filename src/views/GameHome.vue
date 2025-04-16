<template>
  <div class="w-full min-h-screen bg-quinary p-14">
    <div class="flex gap-12">
      <div class="relative flex-1 hidden lg:block ">
        <img src="../assets/img/png/imgGameHome.png" alt="game home" class="absolute bg-cover">
      </div>
      
      <div class="space-y-12 flex-1">
        <img src="../assets/img/svg/ouEstLeTee.svg" alt="ou est le tee">
        <div class="space-y-6">
          <Typography theme="gold" variant="h2" font="scholar">Le but est simple, il faut retrouver les personnages
            habillé par notre marque dans cette carte.
            C’est exactement comme dans où est Charlie.
          </Typography>

          <Typography theme="gold" variant="h2" font="scholar">
            Les prix à gagner sont les suivants :
          </Typography>
          <div class="w-full h-fit relative">
            <div class="w-full h-[800px] sm:h-[600px] md:h-[400px] relative flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
              <!-- Third Place -->
              <div class="relative sm:absolute w-[220px] sm:w-[250px] md:w-[304px] h-[200px] sm:h-[240px] md:h-[276px] sm:left-0 bg-tertiary rounded-lg">
                <div class="w-full h-full flex flex-col items-center justify-center">
                  <Typography variant="h2" font="scholar" theme="gold">3ème Place</Typography>
                </div>
              </div>
              
              <!-- First Place (Center, Tallest) -->
              <div class="relative sm:absolute w-[220px] sm:w-[275px] md:w-[325px] h-[240px] sm:h-[300px] md:h-[342px] z-10 bg-primary rounded-lg">
                <div class="w-full h-full flex flex-col items-center justify-center">
                  <Typography variant="h2" font="scholar" theme="gold">1ère Place</Typography>
                </div>
              </div>
              
              <!-- Second Place -->
              <div class="relative sm:absolute w-[220px] sm:w-[250px] md:w-[304px] h-[200px] sm:h-[240px] md:h-[276px] sm:right-0 bg-secondary rounded-lg">
                <div class="w-full h-full flex flex-col items-center justify-center">
                  <Typography variant="h2" font="scholar" theme="gold">2eme Place</Typography>
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

export default {
  name: 'GameHome',
  components: {
    Typography,
    Button
  },
  setup() {
    const router = useRouter();
    return {
      router
    };
  }
};
</script>

<style scoped></style>