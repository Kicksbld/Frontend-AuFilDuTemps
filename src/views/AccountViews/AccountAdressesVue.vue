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
        Erreur lors du chargement des adresses
      </Typography>
    </div>

    <div v-else-if="safeAddresses && safeAddresses.length === 0" class="text-center py-4">
      <Typography variant="h2" font="scholar" theme="gold">
        Aucune adresse trouvée
      </Typography>
    </div>

    <div v-else>
      <div class="p-10">
        <div v-for="address in safeAddresses" class="mb-6" v-if="safeAddresses && safeAddresses.length > 0">
          <Typography variant="h1" font="scholar" theme="gold" class="block font-semibold mb-1">
            {{ address.label || 'Adresse principale' }}
          </Typography>
          <div class="flex items-center gap-4 justify-between">
            <div v-if="isEditingIndex === address.id" class="flex gap-4 flex-wrap">
              <input type="text" v-model="address.street"
                class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
              <input type="text" v-model="address.postalCode"
                class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
              <input type="text" v-model="address.city"
                class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
            </div>
            <div v-else>
              <Typography variant="h3" font="halenoir" weight="regular" theme="gold">
                {{ address.street }} {{ address.postalCode }} {{ address.city }}
              </Typography>
            </div>
            <div class="flex gap-2">
              <Button v-if="isEditingIndex !== address.id" @click="isEditingIndex = address.id" variant="secondary">
                Modifier
              </Button>
              <Button v-else @click="saveEditAdresse(address.id)" variant="secondary">
                OK
              </Button>
              <Button variant="secondary" @click="supprimerAdresse(address.id)">
                Supprimer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isAdding" class="mb-6">
      <Typography variant="h1" font="scholar" theme="gold" class="block font-semibold mb-1">
        Nouvelle adresse
      </Typography>
      <form @submit.prevent="saveAdresse" class="flex gap-4 justify-between">
        <div class="grid grid-cols-2 gap-x-4 gap-y-4">
          <input required type="text" placeholder="Entrez une adresse" v-model="infos.street"
            class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
          <input required type="text" placeholder="Entrez un code postal" v-model="infos.postalCode"
            class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
          <input required type="text" placeholder="Entrez une ville" v-model="infos.city"
            class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
          <input required type="text" placeholder="Entrez un département/région" v-model="infos.state"
            class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
          <input required type="text" placeholder="Entrez un pays" v-model="infos.country"
            class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
          <input required type="text" placeholder="Entrez un libellé" v-model="infos.label"
            class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
          <div class="flex items-center gap-2">
            <input type="checkbox" v-model="infos.isDefault" id="isDefault" class="w-4 h-4" />
            <label for="isDefault" class="text-gold">Adresse par défaut</label>
          </div>
        </div>
        <div>
        </div>
        <div class="flex flex-col gap-2 items-end">
          <Button type="submit" variant="secondary">Sauvegarder</Button>
          <Button variant="secondary" @click="isAdding = false">Annuler</Button>
        </div>
      </form>
    </div>

    <div class="flex gap-3 justify-between">
      <div class="h-px bg-gold my-6" style="width: 360px;"></div>
      <div class="h-px bg-gold my-6" style="width: 360px;"></div>
    </div>

    <RouterLink to="/account">
      <Typography variant="h2" component="h2" font="scholar" weight="regular" theme="gold" class="text-center pt-5">
        Retour au compte</Typography>
    </RouterLink>

    <div class="flex justify-center align-center pt-4">
      <Button variant="secondary" @click="isAdding = true">Ajouter une adresse</Button>
    </div>

  </div>
</template>

<script>
import { ref, onMounted, watch, computed } from 'vue'
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

    const { data: addressesData, error, loading, run: fetchAdresses } = useApi(addresses.list)
    const { run: editAddress } = useApi(addresses.update)
    const { run: createAddress } = useApi(addresses.create)
    const { run: deleteAddress } = useApi(addresses.remove)

    let isAdding = ref(false)
    let isEditingIndex = ref(null)

    const safeAddresses = computed(() => {
      return addressesData.value || []
    })

    watch(addressesData, (newValue) => {
      console.log('addressesData :', newValue)
    }, { immediate: true })

    const infos = ref({
      label: '',
      street: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      isDefault: false
    })

    const saveAdresse = async () => {
      try {
        await createAddress({
          street: infos.value.street,
          postalCode: infos.value.postalCode,
          city: infos.value.city,
          state: infos.value.state,
          country: infos.value.country,
          label: infos.value.label,
          isDefault: infos.value.isDefault
        })
        console.log('Adresse créée:', infos.value)
        isAdding.value = false
        // Reset form
        infos.value = {
          label: '',
          street: '',
          city: '',
          state: '',
          postalCode: '',
          country: '',
          isDefault: false
        }
        await fetchAdresses()
      } catch (error) {
        console.error('Erreur lors de la création:', error)
      }
    }

    const supprimerAdresse = async (index) => {
      try {
        await deleteAddress(index)
        await fetchAdresses()
      } catch (error) {
        console.error('Erreur lors de la suppression:', error)
      }
    }

    const saveEditAdresse = async (index) => {
      try {
        const address = safeAddresses.value.find(addr => addr.id === index)
        if (address) {
          await editAddress(index, address)
          console.log('Adresse modifiée:', address)
          isEditingIndex.value = null
          await fetchAdresses()
        }
      } catch (error) {
        console.error('Erreur lors de la modification:', error)
      }
    }

    onMounted(async () => {
      await fetchAdresses()
    })

    return {
      infos,
      loading,
      error,
      supprimerAdresse,
      saveAdresse,
      safeAddresses,
      addressesData,
      isAdding,
      isEditingIndex,
      saveEditAdresse
    }
  }
}
</script>

<style scoped></style>
