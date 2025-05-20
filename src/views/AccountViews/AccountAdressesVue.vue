<template>
  <div class="w-full bg-quinary p-10">
    <ParticlesBackground />
    <div class="flex pt-35">
      <img src="../../assets/img/svg/titre_adresse.svg" class="w-160" />
      <hr class="w-full my-2 border-[1px] border-gold mt-40" />
    </div>

    <div v-if="loading" class="text-center py-4">
      <Typography variant="h2" font="scholar" theme="gold">
        Chargement des adresses...
      </Typography>
    </div>


    <div v-else-if="error" class="text-center py-4">
      <Typography variant="h2" font="scholar" theme="gold">
        Erreur lors du chargement des commandes
      </Typography>
    </div>

    <div v-else>
      <div class="p-10">
        <div class="mb-6">
          <Typography variant="h1" font="scholar" theme="gold" class="block font-semibold mb-1">{{
            safeAddresses[0].label }}
          </Typography>
          <div class="flex items-center gap-4 justify-between">
            <div v-if="editMode.label">
              <input type="text" v-model="edited.label" :placeholder="placeholder"
                class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
            </div>
            <div v-else>
              <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{ safeAddresses[0].street }} {{
                safeAddresses[0].city }} {{ safeAddresses[0].postalCode }}
              </Typography>
            </div>
            <div @click="adresseSave('label')" class="flex">
              <Button variant="secondary">
                {{ editMode.label ? 'OK' : 'Modifier' }}
              </Button>
            </div>
          </div>
        </div>

        <!-- Liste des addresses -->
        <div class="mb-6" v-for="(safeAddresses, index) in addresses" :key="index">
          <Typography variant="h1" font="scholar" theme="gold" class="block font-semibold mb-1">
            Adresse {{ index + 1 }}
          </Typography>
          <div class="flex items-center gap-4 justify-between">
            <div v-if="editMode.addresses[index]">
              <input type="text" v-model="addresses[index]" placeholder="Entrez une adresse"
                class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
            </div>
            <div v-else>
              <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{ safeAddresses.street }}
              </Typography>

            </div>

            <div class="flex flex-col gap-2 items-end">
              <Button variant="secondary" @click="supprimerAdresse(index)">Supprimer</Button>

              <template v-if="editMode.addresses[index]">
                <Button variant="secondary" @click="saveAdresse(index)">Sauvegarder</Button>
              </template>
              <template v-else>
                <Button variant="secondary" @click="editMode.addresses[index] = true">Modifier</Button>
              </template>
            </div>
          </div>
        </div>

        <div class="flex gap-3 justify-between">
          <div class="h-px bg-gold my-6" style="width: 360px;"></div>
          <div class="h-px bg-gold my-6" style="width: 360px;"></div>
        </div>

        <RouterLink to="/account">
          <Typography variant="h2" component="h2" font="scholar" weight="regular" theme="gold" class="text-center pt-5">
            Retour au compte</Typography>
        </RouterLink>

        <div class="flex justify-center align-center pt-4 ">
          <Button variant="secondary" @click="ajouterAdresse">Ajouter une adresse</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import Typography from '../../UI/design-system/Typography.vue'
import Button from '../../UI/design-system/Button.vue'
import ParticlesBackground from "@/UI/Components/ParticlesBackground.vue";
import { addresses } from '@/services';
import { useApi } from "@/stores/dataBaseData";

export default {
  components: {
    ParticlesBackground,
    Typography,
    Button
  },
  setup() {
    const router = useRouter()

    const { data: addressesData, error, loading, run: fetchAdresses } = useApi(addresses.list)
    const safeAddresses = computed(() => {
      return addressesData.value || []
    })
    watch(addressesData, (newValue) => {
      // localStorage.setItem('userAdresses', JSON.stringify(newAdresses))
      console.log('Preferences :', newValue)
    }, { immediate: true })

    const infos = ref({
      label: '',
      street: '',
      city: ''
    })

    const edited = ref({ ...infos.value })

    const editMode = ref({
      label: false,
      street: false,
      city: false,

    })

    const placeholderTravail = 'Adresse'

    const ajouterAdresse = () => {
      if (infos.value.length && infos.value[infos.value.length - 1] === '') return
      infos.value.push('')
      editMode.value.infos.push(true)
      console.log('Adresse ajoutée')
    }

    const editAdresse = (index) => {
      editMode.value.infos[index] = true
    }

    const saveAdresse = (index) => {
      // localStorage.setItem('userAdresses', JSON.stringify(infos.value))
      editMode.value.infos[index] = false
    }

    const supprimerAdresse = (index) => {
      infos.value.splice(index, 1)
      editMode.value.infos.splice(index, 1)
      // localStorage.setItem('userAdresses', JSON.stringify(infos.value))
      console.log('Adresse supprimée')
    }

    const adresseSave = (field) => {
      if (editMode.value[field]) {
        infos.value[field] = edited.value[field]
        // localStorage.setItem('userInfos', JSON.stringify(infos.value))
      }
      editMode.value[field] = !editMode.value[field]
    }

    onMounted(async () => {
      await fetchAdresses()
      /* const saved = localStorage.getItem('userInfos')
      if (saved) {
        infos.value = JSON.parse(saved)
        edited.value = { ...infos.value }
      }

      const savedAdresses = localStorage.getItem('userAdresses')
      if (savedAdresses) {
        infos.value = JSON.parse(savedAdresses)
        editMode.value.infos !== null ? "" : infos.value.map(() => false)
      } */
    })

    // watch(infos, (newAdresses) => {
    //   localStorage.setItem('userAdresses', JSON.stringify(newAdresses))
    // }, { deep: true })

    return {
      infos,
      edited,
      editMode,
      adresseSave,
      infos,
      ajouterAdresse,
      supprimerAdresse,
      editAdresse,
      saveAdresse,
      placeholderTravail,
      safeAddresses,
      addressesData,

    }
  }
}
</script>

<style scoped></style>
