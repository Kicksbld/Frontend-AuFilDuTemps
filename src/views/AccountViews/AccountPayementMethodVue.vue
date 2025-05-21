<template>
  <div class="bg-quinary w-full">
    <ParticlesBackground />
    <main class="grid place-content-center min-h-[25vh] w-full"></main>

    <div class="px-6 md:px-10">
      <div class="flex mt-10">
        <img src="../../assets/img/svg/parametres.svg" />
        <hr class="w-full my-2 border-[1px] border-gold mt-40" />
      </div>

      <div class="flex justify-end sm:justify-end pr-10">
        <Button @click="handleLogOut" variant="secondary">Log Out</Button>
      </div>

      <div v-if="loading" class="text-center py-4">
        <Typography variant="h2" font="scholar" theme="gold">
          Chargement des informations...
        </Typography>
      </div>

      <div v-else class="p-0 md:p-10 space-y-16">

        <div class="flex flex-col lg:flex-row justify-between gap-10">
          <div class="flex flex-col sm:flex-row gap-8 flex-wrap">
            <div class="flex flex-col">
              <Typography variant="h1" font="scholar" theme="gold">Nom</Typography>
              <div v-if="editingField === 'name'">
                <input type="text" v-model="infos.name" :placeholder="placeholder"
                  class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
              </div>
              <div v-else>
                <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{ infos.name }}</Typography>
              </div>
            </div>
          </div>

          <div class="pt-4 self-start">
            <Button v-if="editingField === 'name'" variant="secondary" class="h-[40px]" @click="handleToggleAndSave('name')">
              Sauvegarder
            </Button>
            <Button v-else variant="secondary" class="h-[40px]" @click="startEditing('name')">
              Modifier
            </Button>
          </div>
        </div>

        <div class="flex flex-wrap justify-between gap-4">
          <div class="h-px bg-gold w-full md:w-[30%]"></div>
          <div class="h-px bg-gold w-full md:w-[30%]"></div>
        </div>

        <!-- EMAIL -->
        <div class="flex flex-col lg:flex-row justify-between gap-6">
          <div class="flex flex-col">
            <Typography variant="h1" font="scholar" theme="gold">Adresse mail</Typography>
            <div v-if="editingField === 'email'">
              <input type="text" v-model="infos.email" :placeholder="placeholder"
                class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
            </div>
            <div v-else>
              <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{ infos.email }}</Typography>
            </div>
          </div>
          <div class="pt-4 self-start">
            <Button v-if="editingField === 'email'" variant="secondary" class="h-[40px]" @click="handleToggleAndSave('email')">
              Sauvegarder
            </Button>
            <Button v-else variant="secondary" class="h-[40px]" @click="startEditing('email')">
              Modifier
            </Button>
          </div>
        </div>

        <div class="flex flex-wrap justify-between gap-4">
          <div class="h-px bg-gold w-full md:w-[30%]"></div>
          <div class="h-px bg-gold w-full md:w-[30%]"></div>
        </div>

        <!-- TÉLÉPHONE -->
        <div class="flex flex-col lg:flex-row justify-between gap-6">
          <div class="flex flex-col">
            <Typography variant="h1" font="scholar" theme="gold">Téléphone</Typography>
            <div v-if="editingField === 'phoneNumber'">
              <input type="text" v-model="infos.phoneNumber" :placeholder="placeholder"
                class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
            </div>
            <div v-else>
              <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{ infos.phoneNumber }}</Typography>
            </div>
          </div>
          <div class="pt-4 self-start">
            <Button v-if="editingField === 'phoneNumber'" variant="secondary" class="h-[40px]" @click="handleToggleAndSave('phoneNumber')">
              Sauvegarder
            </Button>
            <Button v-else variant="secondary" class="h-[40px]" @click="startEditing('phoneNumber')">
              Modifier
            </Button>
          </div>
        </div>

        <div class="flex flex-wrap justify-between gap-4">
          <div class="h-px bg-gold w-full md:w-[30%]"></div>
          <div class="h-px bg-gold w-full md:w-[30%]"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Typography from '../../UI/design-system/Typography.vue';
import Button from '../../UI/design-system/Button.vue';
import { authClient } from '../../lib/auth-client';
import { useSessionDataStore } from '../../stores/getUserSession';
import ParticlesBackground from "@/UI/Components/ParticlesBackground.vue";
import { useApi } from "../../stores/dataBaseData"
import { users } from "../../services/index.js"

const { run: updateUser } = useApi(users.update)

export default {
  components: {
    ParticlesBackground,
    Typography,
    Button
  },
  data() {
    return {
      infos: {
        name: '',
        email: '',
        phoneNumber: '',
      },
      editingField: null,
      loading: true,
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    startEditing(field) {
      this.editingField = field;
    },

    async fetchUserData() {
      this.loading = true;
      try {
        const sessionStore = useSessionDataStore();
        await sessionStore.fetchSession();
        const session = sessionStore.getData;

        if (session?.user) {
          this.userData = session.user;
          this.infos = {
            name: session.user.name || '',
            email: session.user.email || '',
            phoneNumber: session.user.phoneNumber || '',
            id: session.user.id || '',
          };
        } else {
          console.warn('Aucun utilisateur trouvé');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        this.loading = false;
      }
    },

    async handleToggleAndSave(field) {
      if (!this.infos.id) {
        console.error('No user ID found');
        return;
      }
      
      this.loading = true;
      try {
        console.log('infos', this.infos[field]);
        
        await updateUser(this.infos.id, {
          [field]: this.infos[field]
        });
        
        this.editingField = null;
        await this.fetchUserData();
      } catch (error) {
        console.error('Error updating user:', error);
      } finally {
        this.loading = false;
      }
    },

    async handleLogOut() {
      const sessionStore = useSessionDataStore();
      await authClient.signOut();
      sessionStore.reset();
      window.location.reload();
      window.location.href = '/'
    }
  }
};
</script>

<style scoped></style>
