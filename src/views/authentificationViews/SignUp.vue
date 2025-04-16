<template>
  <div class="min-h-screen flex pt-10 justify-center bgLogIn relative">
    <img src="../../assets/img/svg/logInBar.svg" class="top-1/2 left-2.5 transform absolute -translate-y-1/2 hidden md:block" alt="">
    <img src="../../assets/img/svg/logInBar.svg" class="top-1/2  right-2.5 transform absolute -translate-y-1/2 hidden md:block" alt="">
    <div class="max-w-xl w-full space-y-16 p-4">

      <img src="../../assets/img/svg/inscriptionTitle.svg" alt="" class="titleTag mx-auto">
      <form class="mt-8 space-y-14" @submit.prevent="handleSubmit">
        <div class="space-y-8">
          <CustomInput v-model="formData.name" label="Ton Nom" placeholder="Ton nom" id="name" type="text" />

          <CustomInput v-model="formData.email" label="Email" placeholder="exemple@text.com" id="email" type="email" />

          <CustomInput v-model="formData.password" label="Mot de passe" placeholder="********" id="password"
            type="password" />
        </div>

        <Button size="large" variant="secondary" :disabled="isLoading" type="submit" class="w-full">
          {{ isLoading ? '..' : 'Creer un Compte' }}
        </Button>
      </form>
    </div>
  </div>
</template>

<script>
import { authClient } from '../../lib/auth-client'; //import the auth client
import CustomInput from '../../UI/design-system/CustomInput.vue';
import Button from '../../UI/design-system/Button.vue';

export default {
  name: 'SignUp',

  components: {
    Button,
    CustomInput
  },

  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: ''
      },
      isLoading: false
    };
  },

  methods: {
    async handleSubmit() {
      try {
        const { data, error } = await authClient.signUp.email({
          email: this.formData.email,
          password: this.formData.password,
          name: this.formData.name,
        }, {
          onRequest: () => {
            // You can add loading state here
            this.isLoading = true;
          },
          onSuccess: () => {
            this.$router.push('/');
          },
          onError: (ctx) => {
            alert(ctx.error.message);
          },
        });

        if (error) {
          throw error;
        }
      } catch (err) {
        console.error('Sign up error:', err);
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>