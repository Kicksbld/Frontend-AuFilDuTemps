<template>
    <div class="w-full bg-quinary">
    <main class="grid place-content-center min-h-[50vh] w-full">
        <h1 class="text-4xl text-red-500">Support Form Page under development</h1>
    </main>

  <div>
    <div class="flex mb-6">
      <Typography variant="h1" component="h1" font="flaemische" theme="quaternary" class="text-[50px] text-shadow-custom">C</Typography>
      <Typography variant="h1" component="h1" font="scholar" theme="quaternary" class="text-[70px] text-shadow-custom">ontact</Typography>
    </div>

    <form @submit.prevent="sendForm" class="border-2 border-[#E7B276] p-4 space-y-4">
      <div class="flex items-center">
        <Typography variant="h2" component="h2" font="scholar" theme="quaternary">Nom</Typography>
        <input
          v-model="form.name"
          name="name"
          type="text"
          class="border border-[#E7B276] text-[#E7B276] ml-4 p-1"
        />
      </div>


      <div class="flex items-center">
        <Typography variant="h2" component="h2" font="scholar" theme="quaternary">Email</Typography>
        <input
          v-model="form.email"
          type="email"
          required
          class="border border-[#E7B276] text-[#E7B276] ml-4 p-1"
        />
      </div>

      <div>
        <label>
          <Typography variant="h2" component="h2" font="scholar" theme="quaternary">Votre message</Typography>
        </label>
        <textarea
          v-model="form.message"
          id="content"
          class="border border-[#E7B276] text-[#E7B276]  w-full p-2 mt-1"
          required
        ></textarea>
      </div>

      <Button type="submit" variant="secondary">Envoyer</Button>
    </form>
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

.text-shadow-custom {
  text-shadow: 0 0 10px #E7B276;
}


</style>