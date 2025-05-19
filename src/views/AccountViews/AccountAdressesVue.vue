<template>
  <div class="w-full bg-quinary p-10">
    <ParticlesBackground />
    <div class="flex pt-35">
      <img src="../../assets/img/svg/titre_adresse.svg" class="w-160" />
      <hr class="w-full my-2 border-[1px] border-gold mt-40" />
    </div>
    <div class="p-10">
      <div class="mb-6">
        <Typography variant="h1" font="scholar" theme="gold" class="block font-semibold mb-1">Travail</Typography>
        <div class="flex items-center gap-4 justify-between">
          <div v-if="editMode.travail">
            <input type="text" v-model="edited.travail" :placeholder="placeholderTravail"
              class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
          </div>
          <div v-else>
            <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{ infos.travail }}</Typography>
          </div>
          <div @click="adresseSave('travail')" class="flex">
            <Button variant="secondary">
              {{ editMode.travail ? 'OK' : 'Modifier' }}
            </Button>
          </div>
        </div>
      </div>

      <!-- Liste des adresses -->
      <div class="mb-6" v-for="(adresse, index) in adresses" :key="index">
        <Typography variant="h1" font="scholar" theme="gold" class="block font-semibold mb-1">
          Adresse {{ index + 1 }}
        </Typography>
        <div class="flex items-center gap-4 justify-between">
          <div v-if="editMode.adresses[index]">
            <input type="text" v-model="adresses[index]" placeholder="Entrez une adresse"
              class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
          </div>
          <div v-else>
            <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{ adresse }}</Typography>
          </div>

          <div class="flex flex-col gap-2 items-end">
            <Button variant="secondary" @click="supprimerAdresse(index)">Supprimer</Button>

            <template v-if="editMode.adresses[index]">
              <Button variant="secondary" @click="saveAdresse(index)">Sauvegarder</Button>
            </template>
            <template v-else>
              <Button variant="secondary" @click="editMode.adresses[index] = true">Modifier</Button>
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
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import Typography from '../../UI/design-system/Typography.vue'
import Button from '../../UI/design-system/Button.vue'
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
      travail: '',
    })

    const edited = ref({ ...infos.value })
    const editMode = ref({
      travail: false,
      adresses: []
    })

    const adresses = ref([])
    const placeholderTravail = 'Adresse'

    const ajouterAdresse = () => {
      if (adresses.value.length && adresses.value[adresses.value.length - 1] === '') return
      adresses.value.push('')
      editMode.value.adresses.push(true)
      console.log('Adresse ajoutée')
    }

    const editAdresse = (index) => {
      editMode.value.adresses[index] = true
    }

    const saveAdresse = (index) => {
      localStorage.setItem('userAdresses', JSON.stringify(adresses.value))
      editMode.value.adresses[index] = false
    }

    const supprimerAdresse = (index) => {
      adresses.value.splice(index, 1)
      editMode.value.adresses.splice(index, 1)
      localStorage.setItem('userAdresses', JSON.stringify(adresses.value))
      console.log('Adresse supprimée')
    }

    const adresseSave = (field) => {
      if (editMode.value[field]) {
        infos.value[field] = edited.value[field]
        localStorage.setItem('userInfos', JSON.stringify(infos.value))
      }
      editMode.value[field] = !editMode.value[field]
    }

    onMounted(() => {
      const saved = localStorage.getItem('userInfos')
      if (saved) {
        infos.value = JSON.parse(saved)
        edited.value = { ...infos.value }
      }

      const savedAdresses = localStorage.getItem('userAdresses')
      if (savedAdresses) {
        adresses.value = JSON.parse(savedAdresses)
        editMode.value.adresses = adresses.value.map(() => false)
      }
    })

    watch(adresses, (newAdresses) => {
      localStorage.setItem('userAdresses', JSON.stringify(newAdresses))
    }, { deep: true })

    return {
      infos,
      edited,
      editMode,
      adresseSave,
      adresses,
      ajouterAdresse,
      supprimerAdresse,
      editAdresse,
      saveAdresse,
      placeholderTravail
    }
  }
}
</script>

<style scoped></style>
