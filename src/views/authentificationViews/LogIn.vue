<template>
  <div class="min-h-screen pt-10 flex justify-center bgLogIn relative">
    <img src="../../assets/img/svg/logInBar.svg" class="top-1/2 left-2.5 transform absolute -translate-y-1/2 hidden md:block" alt="">
    <img src="../../assets/img/svg/logInBar.svg" class="top-1/2  right-2.5 transform absolute -translate-y-1/2 hidden md:block" alt="">
    <div class="max-w-xl w-full space-y-16 p-4">
      <img src="../../assets/img/svg/connexionTitle.svg" alt="" class="titleTag mx-auto">
      <form class="mt-8 space-y-14" @submit.prevent="handleSubmit">
        <div class="space-y-8">
          <CustomInput v-model="formData.email" label="Email" placeholder="exemple@test.com" id="email" type="email" />

          <CustomInput v-model="formData.password" label="Mot de passe" placeholder="********" id="password"
            type="password" />
        </div>

        <div>

          <Button size="large" variant="secondary" :disabled="isLoading" type="submit" class="w-full">
            {{ isLoading ? 'connection..' : 'Se Connecter' }}
          </Button>
          <Typography variant="h3" theme="chocolate" font="scholar" class="text-center mt-3">
            <a href="/sign-up">Je n'ai
              pas de compte
            </a>
          </Typography>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { authClient } from '../../lib/auth-client';
import CustomInput from '../../UI/design-system/CustomInput.vue';
import Typography from '../../UI/design-system/Typography.vue';
import Button from '../../UI/design-system/Button.vue';

export default {
  name: 'LogIn',
  components: {
    Typography,
    CustomInput,
    Button
  },
  data() {
    return {
      formData: {
        email: '',
        password: ''
      },
      isLoading: false
    };
  },

  methods: {
    async handleSubmit() {
      try {
        this.isLoading = true;
        const { data, error } = await authClient.signIn.email({
          email: this.formData.email,
          password: this.formData.password
        });

        if (error) {
          throw error;
        }

        // Redirect to home page or dashboard after successful login
        this.$router.push('/');
        
        window.location.reload();
      } catch (err) {
        alert(err.message);
        console.error('Login error:', err);
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>