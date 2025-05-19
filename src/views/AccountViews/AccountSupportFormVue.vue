<template>
  <div class="w-full bg-quinary">
    <main class="grid place-content-center min-h-[25vh] w-full">
      <!-- contenu principal ici -->
    </main>

    <div>
      <div class="flex p-10">
        <img src="../../assets/img/svg/formulaire.svg" />
        <hr class="w-full my-2 border-[1px] border-gold mt-35" />
      </div>

      <div class="pr-20 pl-20">
        <form @submit.prevent="sendForm" class="border-2 border-gold p-10 space-y-6">
          <div class="flex flex-col">
            <Typography variant="h2" component="h2" font="scholar" theme="quaternary" class="mb-2">
              Nom, Prénom
            </Typography>
            <input v-model="form.name" name="name" type="text"
              class="border border-gold rounded-[10px] text-gold p-2 w-70 bg-transparent shadow-md focus:outline-none" />
          </div>

          <div class="flex flex-col">
            <Typography variant="h2" component="h2" font="scholar" theme="quaternary" class="mb-2">
              Adresse mail
            </Typography>
            <input v-model="form.email" type="email" required
              class="border border-gold rounded-[10px] text-gold p-2 w-70 bg-transparent shadow-md focus:outline-none" />
          </div>

          <div class="flex flex-col">
            <Typography variant="h2" component="h2" font="scholar" theme="quaternary" class="mb-2">
              Votre message
            </Typography>
            <textarea v-model="form.message" id="content"
              class="border border-gold rounded-[10px] text-gold p-2 bg-transparent shadow-md min-h-[100px] focus:outline-none"
              required></textarea>
          </div>

          <Button type="submit" variant="secondary">Envoyer</Button>
        </form>
      </div>
    </div>
  </div>
</template>


<script setup>
import Button from '../../UI/design-system/Button.vue'
import Typography from '../../UI/design-system/Typography.vue'
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const sendForm = () => {
  fetch(`${import.meta.env.VITE_BACKEND_URL}/sendEmail`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form.value)
  })
    .then(response => response.json())
    .then(data => {
      alert('Message envoyé avec succès !')
      form.value = {
        name: '',
        email: '',
        message: ''
      }
    })
    .catch(error => {
      alert('Erreur : ' + error.message)
    })
}




</script>


<style scoped>
form {
  background-image: url(../../assets/img/png/fondLogIn.png);
}
</style>