<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-900">Create an account</h2>
        <p class="mt-2 text-sm text-gray-600">Sign up to get started</p>
      </div>
      
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              v-model="formData.password"
              type="password"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {{ isLoading ? 'Signing up...' : 'Sign up' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { authClient } from '../../lib/auth-client'; //import the auth client

export default {
  name: 'SignUp',

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