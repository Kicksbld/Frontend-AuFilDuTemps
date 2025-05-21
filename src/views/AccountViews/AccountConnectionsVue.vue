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

    <div v-else>
      <div class="px-6 sm:px-10 md:px-20 mx-auto mt-8">
        <div class=" flex-col sm:flex-row justify-between gap-10">

          <div class="mb-6 ">
            <Typography variant="h1" font="scholar" theme="gold" class="block font-semibold mb-1">Sexe</Typography>
            <div class="flex items-center gap-4 justify-between">
              <div>
                <select
                  class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none"
                  v-model="infos.gender" @change="handleToggleAndSave('gender')">
                  <option value="">Select Gender</option>
                  <option v-for="option in genderOptions" :key="option.value" :value="option.value">
                    {{ option.label }}
                  </option>
                </select>

              </div>
              <div>
                <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{
                  formatEnum(safePreference.gender) }}
                </Typography>
              </div>
            </div>
          </div>

          <div class="mb-6">
            <Typography variant="h1" font="scholar" theme="gold" class="block font-semibold mb-1">Taille</Typography>
            <div class="flex items-center gap-4 justify-between">
              <div>
                <select v-model="infos.preferredSize" @change="handleToggleAndSave('preferredSize')"
                  class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none">
                  <option value="">Select Size</option>
                  <option v-for="option in sizeOptions" :key="option.value" :value="option.value">
                    {{ option.label }}
                  </option>
                </select>

              </div>
              <div>
                <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{
                  formatEnum(safePreference.preferredSize) }}

                </Typography>
              </div>
            </div>
          </div>
        </div>

        <!-- Couleur favorite -->
        <div class="mb-6 flex-1">
          <Typography variant="h1" font="scholar" theme="gold" class="block font-semibold mb-1">Couleur favorite
          </Typography>
          <div class="flex items-center gap-4 justify-between">
            <div>
              <select
                class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none"
                v-model="infos.favoriteColor" @change="handleToggleAndSave('favoriteColor')">
                <option value="">Select Color</option>
                <option v-for="option in colorOptions" :key="option.value" :value="option.value">
                  {{ option.label }}
                </option>
              </select>

            </div>
            <div>
              <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{
                formatEnum(safePreference.favoriteColor) }}
              </Typography>
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
import Typography from '../../UI/design-system/Typography.vue';
import Button from '../../UI/design-system/Button.vue';
import ParticlesBackground from "@/UI/Components/ParticlesBackground.vue";
import { preferences } from '@/services';
import { useApi } from "@/stores/dataBaseData";
import api from "../../api/api"
import { formatEnum, genderOptions, sizeOptions, colorOptions } from '../../services/enum';

export default {
  components: {
    ParticlesBackground,
    Typography,
    Button
  },
  setup() {

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

    onMounted(async () => {
      await fetchPreferences()
    })

    const handleToggleAndSave = async (field) => {
      try {
        // Create the update object with the correct field
        const updateData = {
          [field]: infos.value[field]
        }

        // Use the API directly to make a PATCH request
        await api.patch('/preferences', updateData)

        // Refresh the data from the API
        await fetchPreferences()
      } catch (error) {
        console.error('Error updating preference:', error)
      }
    }

    return {
      infos,
      handleToggleAndSave,
      safePreference,
      preferencesData,
      loading,
      error,
      formatEnum,
      genderOptions,
      sizeOptions,
      colorOptions
    }
  }
}
</script>



<style scoped></style>