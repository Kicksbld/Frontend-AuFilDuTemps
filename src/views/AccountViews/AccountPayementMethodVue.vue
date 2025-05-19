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

      <div class="p-0 md:p-10 space-y-16">


        <div class="flex flex-col lg:flex-row justify-between gap-10">
          <div class="flex flex-col sm:flex-row gap-8 flex-wrap">
            <div class="flex flex-col">
              <Typography variant="h1" font="scholar" theme="gold">Nom</Typography>
              <div v-if="modesEdition.nomPrenom">
                <input type="text" v-model="edited.name" :placeholder="placeholder"
                  class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
              </div>
              <div v-else>
                <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{ infos.name }}</Typography>
              </div>
            </div>

            <div class="flex flex-col">
              <Typography variant="h1" font="scholar" theme="gold">Prénom</Typography>
              <div v-if="modesEdition.nomPrenom">
                <input type="text" v-model="edited.prenom" :placeholder="placeholder"
                  class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
              </div>
              <div v-else>
                <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{ infos.prenom }}</Typography>
              </div>
            </div>
          </div>

          <div class="pt-4 self-start">
            <Button variant="secondary" class="h-[40px]" @click="toggleEdition('nomPrenom')">
              {{ modesEdition.nomPrenom ? 'Sauvegarder' : 'Modifier' }}
            </Button>
          </div>
        </div>

        <!-- Separateur -->
        <div class="flex flex-wrap justify-between gap-4">
          <div class="h-px bg-gold w-3 md:w-[30%]"></div>
          <div class="h-px bg-gold w-full md:w-[30%]"></div>
        </div>

        <!-- EMAIL -->
        <div class="flex flex-col lg:flex-row justify-between gap-6">
          <div class="flex flex-col">
            <Typography variant="h1" font="scholar" theme="gold">Adresse mail</Typography>
            <div v-if="modesEdition.email">
              <input type="text" v-model="edited.email" :placeholder="placeholder"
                class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
            </div>
            <div v-else>
              <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{ infos.email }}</Typography>
            </div>
          </div>
          <div class="pt-4 self-start">
            <Button variant="secondary" class="h-[40px]" @click="toggleEdition('email')">
              {{ modesEdition.email ? 'Sauvegarder' : 'Modifier' }}
            </Button>
          </div>
        </div>

        <!-- Separateur -->
        <div class="flex flex-wrap justify-between gap-4">
          <div class="h-px bg-gold w-full md:w-[30%]"></div>
          <div class="h-px bg-gold w-full md:w-[30%]"></div>
        </div>

        <!-- TÉLÉPHONE -->
        <div class="flex flex-col lg:flex-row justify-between gap-6">
          <div class="flex flex-col">
            <Typography variant="h1" font="scholar" theme="gold">Téléphone</Typography>
            <div v-if="modesEdition.telephone">
              <input type="text" v-model="edited.telephone" :placeholder="placeholder"
                class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" />
            </div>
            <div v-else>
              <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{ infos.telephone }}</Typography>
            </div>
          </div>
          <div class="pt-4 self-start">
            <Button variant="secondary" class="h-[40px]" @click="toggleEdition('telephone')">
              {{ modesEdition.telephone ? 'Sauvegarder' : 'Modifier' }}
            </Button>
          </div>
        </div>

        <!-- Separateur -->
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

export default {
  components: {
    ParticlesBackground,
    Typography,
    Button
  },
  data() {
    return {
      userData: null,
      modesEdition: {
        nomPrenom: false,
        email: false,
        telephone: false,
      },
      infos: {
        name: '',
        prenom: '',
        email: '',
        telephone: '',
      },
      edited: {
        name: '',
        prenom: '',
        email: '',
        telephone: '',
      },
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      const sessionStore = useSessionDataStore();
      await sessionStore.fetchSession();
      const session = sessionStore.getData;

      if (session?.user) {
        this.userData = session.user;
        this.infos = {
          name: session.user.name || '',
          prenom: session.user.prenom || '',
          email: session.user.email || '',
          telephone: session.user.phoneNumber || '',
        };
      } else {
        console.warn('Aucun utilisateur trouvé');
      }
    },

    toggleEdition(champ) {
      if (this.modesEdition[champ]) {
        this.infos[champ] = this.edited[champ];
      } else {
        this.edited[champ] = this.infos[champ];
      }
      this.modesEdition[champ] = !this.modesEdition[champ];
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
