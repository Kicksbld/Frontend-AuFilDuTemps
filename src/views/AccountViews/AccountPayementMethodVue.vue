<template>
  <div class="bg-quinary w-full">
    <ParticlesBackground />
    <main class="grid place-content-center min-h-[25vh] w-full"></main>

    <!-- -----------Paramètres-------------->

    <div class="flex">
      <div class="flex justify-between items-center mb-4">
        <p>{{ userData?.name }}</p>
        <img src="../../assets/img/svg/parametres.svg" alt="paramètres" class="flex" />
     
      </div>
      <hr class="w-full my-2 border-[1px] border-[#D4AF8E] mt-35" />
    </div>
    <div class="flex justify-between pl-20 w-80 ">
          <Button @click="handleLogOut" variant="secondary">Log Out</Button>
        </div>
    <div class="p-20">
      <div class="flex justify-between gap-32 items-start">

        <div class="flex gap-16">
          <div class="flex flex-col">
            <Typography variant="h1" font="scholar" theme="gold">Nom</Typography>
            <div v-if="modesEdition.nomPrenom">
              <input 
                type="text"
                v-model="edited.name"
                :placeholder="placeholder"
                class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" 
              />
            </div>
            <div v-else>
              <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{ infos.name }}</Typography>
            </div>
          </div>

          <div class="flex flex-col">
            <Typography variant="h1" font="scholar" theme="gold">Prénom</Typography>
            <div v-if="modesEdition.nomPrenom">
              <input 
                type="text"
                v-model="edited.prenom"
                :placeholder="placeholder"
                class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" 
              />
            </div>
            <div v-else>
              <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{ infos.prenom }}</Typography>
            </div>
          </div>
        </div>

        <!-- Bouton Modifier -->
        <div class="pt-4" @click="toggleEdition('nomPrenom')">
          <Button variant="secondary" class="h-[40px]">
            {{ modesEdition.nomPrenom ? 'Sauvegarder' : 'Modifier' }}
          </Button>
        </div>
      </div>

      <div class="flex gap-3 justify-between">
        <div class="h-px bg-gold my-6" style="width: 360px;"></div>
        <div class="h-px bg-gold my-6" style="width: 360px;"></div>
      </div>

 
      <div class="flex justify-between items-start mt-20">
        <div class="flex flex-col">
          <Typography variant="h1" font="scholar" theme="gold">Adresse mail</Typography>
          <div v-if="modesEdition.email">
            <input 
              type="text"
              v-model="edited.email"
              :placeholder="placeholder"
              class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" 
            />
          </div>
          <div v-else>
            <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{ infos.email }}</Typography>
          </div>
        </div>

        <div class="pt-4" @click="toggleEdition('email')">
          <Button variant="secondary" class="h-[40px]">
            {{ modesEdition.email ? 'Sauvegarder' : 'Modifier' }}
          </Button>
        </div>
      </div>

      <div class="flex gap-3 justify-between">
        <div class="h-px bg-gold my-6" style="width: 360px;"></div>
        <div class="h-px bg-gold my-6" style="width: 360px;"></div>
      </div>


      <div class="flex justify-between items-start mt-20">
        <div class="flex flex-col">
          <Typography variant="h1" font="scholar" theme="gold">Téléphone</Typography>
          <div v-if="modesEdition.telephone">
            <input 
              type="text"
              v-model="edited.telephone"
              :placeholder="placeholder"
              class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" 
            />
          </div>
          <div v-else>
            <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{ infos.telephone }}</Typography>
          </div>
        </div>

        <div class="pt-4" @click="toggleEdition('telephone')">
          <Button variant="secondary" class="h-[40px]">
            {{ modesEdition.telephone ? 'Sauvegarder' : 'Modifier' }}
          </Button>
        </div>
      </div>

      <div class="flex gap-3 justify-between">
        <div class="h-px bg-gold my-6" style="width: 360px;"></div>
        <div class="h-px bg-gold my-6" style="width: 360px;"></div>
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
          telephone: session.user.telephone || '',
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

<style scoped>

</style>
