<template>
    <div class="bg-quinary w-full">
    <main class="grid place-content-center min-h-[25vh] w-full">
    </main>

    //&-----------Paramètres------------

    <div class="flex">
    <img src="../../assets/img/svg/parametres.svg" >
    <div class=" flex justify-between">
    <hr class="w-150 my-2 border-[1px] border-[#D4AF8E] mt-40 " />
  </div>
    </div>

    <div class="p-20">
<div class="flex justify-between gap-32 items-start">

  <div class="flex gap-16">
    <div class="flex flex-col">
      <Typography variant="h1" font="scholar" theme="gold">Nom</Typography>
      <div v-if="modesEdition.nomPrenom">
        <input 
          type="text"
          v-model="edited.nom"
          :placeholder="placeholder"
          class="mt-1 text-scholar linear-bg block px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" 
        />
      </div>
      <div v-else>
        <Typography variant="h3" font="halenoir" weight="regular" theme="gold">{{ infos.nom }}</Typography>
      </div>
    </div>


    <div class="flex flex-col">
      <Typography variant="h1" font="scholar" theme="gold" class=" flex ">Prénom</Typography>
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
<div class="h-px bg-gold my-6 " style="width: 360px;"></div>
<div class="h-px bg-gold my-6" style="width: 360px;"></div>
</div>


<!-- Email -->
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
<div class="h-px bg-gold my-6 " style="width: 360px;"></div>
<div class="h-px bg-gold my-6" style="width: 360px;"></div>
</div>

<!-- Téléphone -->
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
<div class="h-px bg-gold my-6 " style="width: 360px;"></div>
<div class="h-px bg-gold my-6" style="width: 360px;"></div>
</div>
</div>
  </div>

  

  </template>


<script>
import Typography from '../../UI/design-system/Typography.vue';
import Button from '../../UI/design-system/Button.vue';
export default {

  components: {
    Typography,
    Button
  },

  data() {
  return {
    modesEdition: {
      nomPrenom: false,
      email: false,
      telephone: false,
    },
    infos: {
      libelle: 'Travail',
      nom: 'Delorme',
      prenom: 'Raphaël',
      email: 'delormeraphaël@gmail.com',
      telephone: '+33 7 8* ** ** 65',
      adresse: '3 Esplanade Augustin Aussedat',
      postal: '74960, Cran-Gevrier'
    },
    edited: {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      adresse: '',
      postal: ''
    },
  };
},
methods: {
  toggleEdition(champ) {
    if (this.modesEdition[champ]) {
      this.infos[champ === 'nomPrenom' ? 'nom' : champ] = this.edited[champ === 'nomPrenom' ? 'nom' : champ];
      if (champ === 'nomPrenom') {
        this.infos.prenom = this.edited.prenom;
      }
    } else {
      this.edited[champ === 'nomPrenom' ? 'nom' : champ] = this.infos[champ === 'nomPrenom' ? 'nom' : champ];
      if (champ === 'nomPrenom') {
        this.edited.prenom = this.infos.prenom;
      }
    }
    this.modesEdition[champ] = !this.modesEdition[champ];
  }
}
}
</script>


<style scoped>

</style>