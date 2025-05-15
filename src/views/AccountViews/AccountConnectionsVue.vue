<template>
    <div class="bg-quinary w-full">
      <ParticlesBackground />
    <main class="grid place-content-center min-h-[20vh] w-full ">
        
    </main>

    //&-----------Préférences------------

    <div class="flex">
    <img src="../../assets/img/svg/preferences.svg">
    <hr class="w-full my-2 border-[1px] border-[#D4AF8E] mt-40" />
    </div>
    <div class="px-6 sm:px-10 md:px-20 mx-auto mt-8">
  <div class=" flex-col sm:flex-row justify-between gap-10">
    
 
    <div class="mb-6 ">
      <Typography variant="h1" font="scholar" theme="gold" class="block font-semibold mb-1">Sexe</Typography>
      <div class="flex items-center gap-4 justify-between">
        <div v-if="editMode.sexe">
          <input 
            type="text"
            v-model="edited.sexe"
            placeholder="Entrez votre sexe"
            class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" 
          />
        </div>
        <div v-else>
          <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{ infos.sexe }}</Typography>
        </div>
        <div @click="handleToggleAndSave('sexe')" class="flex ">
          <Button variant="secondary">
            {{ editMode.sexe ? 'OK' : 'Modifier' }}
          </Button>
        </div>
      </div>
    </div>

    <div class="mb-6">
      <Typography variant="h1" font="scholar" theme="gold" class="block font-semibold mb-1">Taille</Typography>
      <div class="flex items-center gap-4 justify-between">
        <div v-if="editMode.taille">
          <input 
            type="text"
            v-model="edited.taille"
            placeholder="Entrez votre taille"
            class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" 
          />
        </div>
        <div v-else>
          <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{ infos.taille }}</Typography>
        </div>
        <div @click="handleToggleAndSave('taille')">
          <Button variant="secondary">
            {{ editMode.taille ? 'OK' : 'Modifier' }}
          </Button>
        </div>
      </div>
    </div>
  </div>

  <!-- Couleur favorite -->
  <div class="mb-6 flex-1">
    <Typography variant="h1" font="scholar" theme="gold" class="block font-semibold mb-1">Couleur favorite</Typography>
    <div class="flex items-center gap-4 justify-between">
      <div v-if="editMode.couleurs">
        <input 
          type="text"
          v-model="edited.couleurs"
          placeholder="Entrez votre couleur favorite"
          class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" 
        />
      </div>
      <div v-else>
        <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{ infos.couleurs }}</Typography>
      </div>
      <div @click="handleToggleAndSave('couleurs')">
        <Button variant="secondary">
          {{ editMode.couleurs ? 'OK' : 'Modifier' }}
        </Button>
      </div>
    </div>
  </div>

  <!-- Sauvegarder -->
  <div class="text-center mt-10">
    <RouterLink to="/account">
      <Typography variant="h2" font="scholar" weight="regular" theme="gold">Retour au compte</Typography> 
    </RouterLink>
  </div>
</div>

    </div>
</template>

<script >
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Typography from '../../UI/design-system/Typography.vue';
import Button from '../../UI/design-system/Button.vue';
import ParticlesBackground from "@/UI/Components/ParticlesBackground.vue";

export default {
  components: {
    ParticlesBackground,
    Typography,
    Button
  },
  setup() {
    const router = useRouter()

    const infos = ref({
      sexe: '',
      taille: '',
      couleurs: ''
    })

    const edited = ref({ ...infos.value })

    const editMode = ref({
      sexe: false,
      taille: false,
      couleurs: false
    })

    onMounted(() => {
      const saved = localStorage.getItem('userInfos')
      if (saved) {
        infos.value = JSON.parse(saved)
        edited.value = { ...infos.value }
      }
    })

    const handleToggleAndSave = (field) => {
  if (editMode.value[field]) {
    infos.value[field] = edited.value[field]
    localStorage.setItem('userInfos', JSON.stringify(infos.value))
  }
  editMode.value[field] = !editMode.value[field]
}

return {
  infos,
  edited,
  editMode,
  handleToggleAndSave
}
  }
}
</script>



<style scoped>
p {
  color: #E7B276;
}

</style>