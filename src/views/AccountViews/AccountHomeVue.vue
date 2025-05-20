<template>
  <div class="w-full bg-quinary p-10">
    <ParticlesBackground />
    <main class="grid place-content-center min-h-[20vh]"></main>

    <div class="flex mt-10">
      <img src="../../assets/img/svg/Bienvenue.svg" />
      <hr class="w-full my-2 border-[1px]  border-gold mt-30" />
    </div>

    <div class="flex justify-center w-full">
      <div class="overflow-x-auto whitespace-nowrap px-4 mt-10 pb-4">
        <div class="flex gap-25 w-max">

          <div class="flex flex-col items-center shrink-0 min-w-[180px] sm:min-w-[200px] md:min-w-[220px]">
            <RouterLink to="/account/connections">
              <Button>
                <img src="../../assets/img/svg/preference.svg"
                  class="w-[120px] sm:w-[150px] md:w-[180px] h-auto object-contain" />
              </Button>
            </RouterLink>
            <Typography variant="h2" component="h2" font="scholar" theme="gold" weight="regular" class="text-center">
              Mes préférences
            </Typography>
          </div>

          <div class="flex flex-col items-center shrink-0 min-w-[180px] sm:min-w-[200px] md:min-w-[220px]">
            <RouterLink to="/account/price">
              <Button>
                <img src="../../assets/img/svg/coupon.svg"
                  class="w-[120px] sm:w-[150px] md:w-[180px] h-auto object-contain" />
              </Button>
            </RouterLink>
            <Typography variant="h2" component="h2" font="scholar" theme="gold" weight="regular" class="text-center">
              Mes coupons
            </Typography>
          </div>

          <div class="flex flex-col items-center shrink-0 min-w-[180px] sm:min-w-[200px] md:min-w-[220px]">
            <RouterLink to="/account/adresses">
              <Button>
                <img src="../../assets/img/svg/adresse.svg"
                  class="w-[120px] sm:w-[150px] md:w-[180px] h-auto object-contain" />
              </Button>
            </RouterLink>
            <Typography variant="h2" component="h2" font="scholar" theme="gold" weight="regular" class="text-center">
              Mes adresses
            </Typography>
          </div>

          <div class="flex flex-col items-center shrink-0 min-w-[180px] sm:min-w-[200px] md:min-w-[220px]">
            <RouterLink to="/account/orders">
              <Button>
                <img src="../../assets/img/svg/commande.svg"
                  class="w-[120px] sm:w-[150px] md:w-[180px] h-auto object-contain" />
              </Button>
            </RouterLink>
            <Typography variant="h2" component="h2" font="scholar" theme="gold" weight="regular" class="text-center">
              Mes commandes
            </Typography>
          </div>

          <div class="flex flex-col items-center shrink-0 min-w-[180px] sm:min-w-[200px] md:min-w-[220px]">
            <RouterLink to="/account/payement-method">
              <Button>
                <img src="../../assets/img/svg/parametre.svg"
                  class="w-[120px] sm:w-[150px] md:w-[180px] h-auto object-contain" />
              </Button>
            </RouterLink>
            <Typography variant="h2" component="h2" font="scholar" theme="gold" weight="regular" class="text-center">
              Paramètres
            </Typography>
          </div>

        </div>
      </div>
    </div>

    <div></div>
  </div>
</template>


<script setup>
import Typography from '../../UI/design-system/Typography.vue';
import Button from '../../UI/design-system/Button.vue';
import { ref, onMounted } from 'vue'
import ParticlesBackground from "@/UI/Components/ParticlesBackground.vue";
import { useRouter } from 'vue-router';


let router = useRouter()




const infos = ref({
  sexe: 'Non renseigné',
  taille: 'Non renseigné',
  couleurs: 'Non renseigné'
})

onMounted(() => {
  const data = localStorage.getItem('userInfos')
  if (data) {
    infos.value = JSON.parse(data)
  }
})



</script>

<style scoped>
.text-shadow-custom {
  text-shadow: 0 0 10px #E7B276;
}
</style>