<template>
  <div :class="[
    'z-40 flex items-center justify-around h-12 w-full bg-quinary transition-all duration-300',
    isScrolled ? 'fixed top-0 left-0 right-0' : 'fixed top-[150px] left-0 right-0'

  ]">
    <router-link to="/products">
      <Typography variant="h3" font="scholar" theme="gold" class="hover:underline">Produits</Typography>
    </router-link>
    <div class="w-[1px] h-[85%] bg-gold "></div>
    <router-link to="/favourites" :class="[
      !isLoggedIn ? 'opacity-50 pointer-events-none cursor-not-allowed' : '',
    ]">
      <Typography variant="h3" font="scholar" theme="gold" class="hover:underline">Favoris</Typography>
    </router-link>

    <div class="w-[1px] h-[85%] bg-gold"></div>
    <router-link to="/outfit-gallery">
      <Typography variant="h3" font="scholar" theme="gold" class="hover:underline">Galerie d'outfit</Typography>
    </router-link>
    <div class="w-[1px] h-[85%] bg-gold"></div>
    <router-link to="/cart" :class="[
      !isLoggedIn ? 'opacity-50 pointer-events-none cursor-not-allowed' : '',
    ]">
      <Typography variant="h3" font="scholar" theme="gold" class="hover:underline">Panier</Typography>
    </router-link>
    <div class="w-[1px] h-[85%] bg-gold"></div>
    <router-link v-if="isLoggedIn" to="/account" class="text-gold ">
      <Typography variant="h3" font="scholar" theme="gold" class="hover:underline">Compte</Typography>
    </router-link>

    <router-link v-else to="/log-in" class="text-gold ">
      <Typography variant="h3" font="scholar" theme="gold" class="hover:underline">Se connecter</Typography>
    </router-link>
  </div>
</template>


<script>

import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSessionDataStore } from '@/stores/getUserSession.js'
import Button from '../../design-system/Button.vue'
import Typography from '../../design-system/Typography.vue'
const router = useRouter()
export default {
  name: 'HeaderComponent',

  components: {
    Button,
    Typography
  },

  setup() {
    const sessionStore = useSessionDataStore()
    const { fetchSession, getSessionData } = sessionStore

    const isLoggedIn = computed(() => !!getSessionData)

    const isScrolled = ref(false)

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 0
    }

    onMounted(async () => {
      const wasLoggedIn = !!getSessionData

      await fetchSession()

      const isNowLoggedIn = !!getSessionData

      if (!wasLoggedIn && isNowLoggedIn) {

      }

      window.addEventListener('scroll', handleScroll)
    })


    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isScrolled,
      isLoggedIn
    }
  }
}
</script>


<style scoped></style>