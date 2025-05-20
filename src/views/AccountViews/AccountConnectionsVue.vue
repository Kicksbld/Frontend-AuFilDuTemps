<template>
  <div class="bg-quinary w-full">
    <ParticlesBackground />
    <main class="grid place-content-center min-h-[20vh] w-full ">

    </main>

    //&-----------Préférences------------

    <div class="flex">
      <img src="../../assets/img/svg/preferences.svg">
      <hr class="w-full my-2 border-[1px]  border-gold mt-40" />
    </div>

    <div v-if="loading" class="text-center py-4">
      <Typography variant="h2" font="scholar" theme="gold">
        Chargement des preferences...
      </Typography>
    </div>

    <div v-else-if="error" class="text-center py-4">
      <Typography variant="h2" font="scholar" theme="gold">
        Erreur lors du chargement des preferences
      </Typography>
    </div>

    <div v-else class="flex overflow-x-auto gap-6 px-4 py-6 justify-center">
      <div class="px-6 sm:px-10 md:px-20 mx-auto mt-8">
        <div class=" flex-col sm:flex-row justify-between gap-10">

          <div class="mb-6 ">
            <Typography variant="h1" font="scholar" theme="gold" class="block font-semibold mb-1">Sexe</Typography>
            <div class="flex items-center gap-4 justify-between">
              <div v-if="editMode.gender">
                <input type="text" v-model="edited.gender" placeholder="Entrez votre gender"
                  class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
              </div>
              <div v-else>
                <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{ safePreference.gender }}
                </Typography>
              </div>
              <div @click="handleToggleAndSave('gender')" class="flex ">
                <Button variant="secondary">
                  {{ editMode.gender ? 'OK' : 'Modifier' }}
                </Button>
              </div>
            </div>
          </div>

          <div class="mb-6">
            <Typography variant="h1" font="scholar" theme="gold" class="block font-semibold mb-1">Taille</Typography>
            <div class="flex items-center gap-4 justify-between">
              <div v-if="editMode.preferredSize">
                <input type="text" v-model="edited.preferredSize" placeholder="Entrez votre preferredSize"
                  class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
              </div>
              <div v-else>
                <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{ safePreference.preferredSize
                  }}
                </Typography>
              </div>
              <div @click="handleToggleAndSave('preferredSize')">
                <Button variant="secondary">
                  {{ editMode.preferredSize ? 'OK' : 'Modifier' }}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <!-- Couleur favorite -->
        <div class="mb-6 flex-1">
          <Typography variant="h1" font="scholar" theme="gold" class="block font-semibold mb-1">Couleur favorite
          </Typography>
          <div class="flex items-center gap-4 justify-between">
            <div v-if="editMode.favoriteColor">
              <input type="text" v-model="edited.favoriteColor" placeholder="Entrez votre couleur favorite"
                class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
            </div>
            <div v-else>
              <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{ safePreference.favoriteColor }}
              </Typography>
            </div>
            <div @click="handleToggleAndSave('favoriteColor')">
              <Button variant="secondary">
                {{ editMode.favoriteColor ? 'OK' : 'Modifier' }}
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
  </div>
</template>

<script>
import { ref, onMounted, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import Typography from '../../UI/design-system/Typography.vue';
import Button from '../../UI/design-system/Button.vue';
import ParticlesBackground from "@/UI/Components/ParticlesBackground.vue";
import { preferences } from '@/services';
import { useApi } from "@/stores/dataBaseData";


export default {
  components: {
    ParticlesBackground,
    Typography,
    Button
  },
  setup() {
    const router = useRouter()

    const { data: preferencesData, error, loading, run: fetchPreferences } = useApi(preferences.list)

    const safePreference = computed(() => {
      return preferencesData.value || []
    })
    watch(preferencesData, (newValue) => {
      console.log('Adresse :', newValue)
    }, { immediate: true })

    const infos = ref({
      gender: '',
      preferredSize: '',
      favoriteColor: ''
    })

    const edited = ref({ ...infos.value })
    const editMode = ref({
      gender: false,
      preferredSize: false,
      favoriteColor: false
    })

    onMounted(async () => {
      await fetchPreferences()
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
      handleToggleAndSave,
      safePreference,
      preferencesData
    }
  }
}
</script>



<style scoped></style>