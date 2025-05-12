<template>
    <div class="w-full bg-quinary">
    <main class="grid place-content-center min-h-[25vh] w-full">

    </main>

  <div>
    <div class="flex">
     <img src="../../assets/img/svg/formulaire.svg">
     <hr class="w-full my-2 border-[1px] border-[#D4AF8E] mt-35" />
    </div>

    <form @submit.prevent="sendForm" class="border-2 border-[#E7B276] px-16 py-12 space-y-12 w-full max-w-6xl mx-auto">
  <div class="flex flex-col items-start w-full">
    <Typography variant="h2" component="h2" font="scholar" theme="gold" class="mb-2">Nom, Prénom</Typography>
    <input 
      v-model="form.name"
      required 
      :placeholder="placeholder"
      class="text-scholar linear-bg w-full px-6 py-4 border-2 border-gold rounded-md bg-primary text-gold shadow-[0_0_10px_#E7B276] focus:bg-primary"
    />
  </div>

  <div class="flex flex-col items-start w-full">
    <Typography variant="h2" component="h2" font="scholar" theme="gold" class="mb-2">Adresse mail</Typography>
    <input 
      v-model="form.email"
      required 
      :placeholder="placeholder"
      class="text-scholar linear-bg w-full px-6 py-4 border-2 border-gold rounded-md bg-primary text-gold shadow-[0_0_10px_#E7B276] focus:bg-primary"
    />
  </div>

  <div class="flex flex-col items-start w-full">
    <Typography variant="h2" component="h2" font="scholar" theme="gold" class="mb-2">Votre message</Typography>
    <textarea
      v-model="form.content"
      required
      :placeholder="placeholder"
      class="text-scholar linear-bg w-full px-6 py-4 border-2 border-gold rounded-md bg-primary text-gold shadow-[0_0_10px_#E7B276] focus:bg-primary resize-none"
      rows="4"
    ></textarea>
  </div>

  <div class="flex justify-center">
    <Button type="submit" variant="secondary">Envoyer</Button>
  </div>
</form>

  </div>
    </div>
</template>

<script setup>
import Button from '../../UI/design-system/Button.vue'
import Typography from '../../UI/design-system/Typography.vue'

const form = ({
  name: '',
  email: '',
  content: ''
})

const sendForm = () => {
  fetch('https://backend-au-fil-du-temps.vercel.app/api/sendEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form.value)
  })
  .then(response => response.json().then(data => {
    if (response.ok) {
      alert('Nouvelle donnée !')
      form.value = {
        name: '',
        email: '',
        content: ''
      }
    } else {
      alert('Erreur serveur : ' + data.message)
    }
  }))
  .catch(error => {
    alert('Erreur réseau : ' + error.message)
  })
}




</script>


<style scoped>
form {
  background-image: url(../../assets/img/png/fondLogIn.png);
}

</style>