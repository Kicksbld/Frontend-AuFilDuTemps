<template>
      <div class="w-full bg-quinary p-10">
    <main class="grid place-content-center min-h-[20vh]">
       
    </main>

    <div class="flex">
    <img src="../../assets/img/svg/Bienvenue.svg">
    <hr class="w-full my-2 border-[1px] border-[#D4AF8E] mt-30" />
</div>
<div class="overflow-x-auto whitespace-nowrap px-4 mt-10">
  <div class="flex gap-8">

    <div class="flex flex-col items-center shrink-0 w-[220px]">
      <RouterLink to="/account/connections">
        <Button>
          <img src="../../assets/img/svg/preference.svg" class="w-[150px] md:w-[200px] h-[150px] md:h-[200px] object-contain" />
        </Button>
      </RouterLink>
      <Typography variant="h2" component="h2" font="scholar" theme="gold" weight="regular" class="text-center">
        Mes préférences
      </Typography>
    </div>

    <!-- Carte 2 -->
    <div class="flex flex-col items-center shrink-0 w-[220px]">
      <RouterLink to="/account/adresses">
        <Button>
          <img src="../../assets/img/svg/adresse.svg" class="w-[150px] md:w-[200px] h-[150px] md:h-[200px] object-contain" />
        </Button>
      </RouterLink>
      <Typography variant="h2" component="h2" font="scholar" theme="gold" weight="regular" class="text-center">
        Mes adresses
      </Typography>
    </div>

    <!-- Carte 3 -->
    <div class="flex flex-col items-center shrink-0 w-[220px]">
      <RouterLink to="/account/orders">
        <Button>
          <img src="../../assets/img/svg/commande.svg" class="w-[150px] md:w-[200px] h-[150px] md:h-[200px] object-contain" />
        </Button>
      </RouterLink>
      <Typography variant="h2" component="h2" font="scholar" theme="gold" weight="regular" class="text-center">
        Mes commandes
      </Typography>
    </div>

    <!-- Carte 4 -->
    <div class="flex flex-col items-center shrink-0 w-[220px]">
      <RouterLink to="/account/payement-method">
        <Button>
          <img src="../../assets/img/svg/parametre.svg" class="w-[150px] md:w-[200px] h-[150px] md:h-[200px] object-contain" />
        </Button>
      </RouterLink>
      <Typography variant="h2" component="h2" font="scholar" theme="gold" weight="regular" class="text-center">
        Paramètres
      </Typography>
    </div>

    <!-- Carte 5 -->
    <div class="flex flex-col items-center shrink-0 w-[220px]">
      <RouterLink to="/account/price">
        <Button>
          <img src="../../assets/img/svg/coupon.svg" class="w-[150px] md:w-[200px] h-[150px] md:h-[200px] object-contain" />
        </Button>
      </RouterLink>
      <Typography variant="h2" component="h2" font="scholar" theme="gold" weight="regular" class="text-center">
        Mes prix
      </Typography>
    </div>
  </div>
</div>

<div>
   
</div>
</div>


</template>

<script setup>
import Typography from '../../UI/design-system/Typography.vue';
import Button from '../../UI/design-system/Button.vue';
import { ref, onMounted } from 'vue'
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