<template>
  <div class="w-full bg-quinary p-10 min-h-screen">
    <ParticlesBackground />

    <div v-if="loading" class="text-center py-4">
      <Typography variant="h2" font="scholar" theme="gold">
        Chargement des commandes...
      </Typography>
    </div>

    <div v-else-if="error" class="text-center text-red-500 mt-50">
      {{ error }}
    </div>

    <div v-else class="max-w-4xl mx-auto mt-50">
      <div class="bg-white/5 p-6 rounded-lg">
        <Typography variant="h1" component="h1" font="scholar" weight="regular" theme="gold" class="mb-6">
          Commande confirmée
        </Typography>

        <div class="mb-6">
          <Typography variant="h2" component="h2" font="halenoir" weight="regular" theme="gold">
            Détails de la commande
          </Typography>
          <div class="mt-4 space-y-4">
            <div v-for="item in order.items" :key="item.productId" class="flex items-center gap-4">
              <img :src="item.images" :alt="item.name" class="w-20 h-20 object-cover" />
              <div class="flex-1">
                <Typography variant="h3" component="h3" font="scholar" weight="regular" theme="gold">
                  {{ item.name }}
                </Typography>
                <div class="flex gap-4 text-sm text-gold">
                  <span>Taille: {{ item.size }}</span>
                  <span>Quantité: {{ item.quantity }}</span>
                  <span>Prix: {{ item.price }}€</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-gold pt-4">
          <Typography variant="h2" component="h2" font="halenoir" weight="regular" theme="gold">
            Total: {{ (order.totalAmount).toFixed(2) }}€
          </Typography>
        </div>

        <div class="mt-8 flex justify-center">
          <RouterLink to="/">
            <Button variant="secondary">Retour à l'accueil</Button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Typography from '../UI/design-system/Typography.vue'
import Button from '../UI/design-system/Button.vue'
import ParticlesBackground from '@/UI/Components/ParticlesBackground.vue'
import { FwbSpinner } from 'flowbite-vue'
import { useApi } from '../stores/dataBaseData'
import { orders } from '../services'

const router = useRouter()
const order = ref({ items: [], totalAmount: 0 })
const { run: createOrder, loading, error } = useApi(orders.create)

onMounted(async () => {
  loading.value = true
  try {
    // 1. Récupère le panier avec nom + image
    const cartData = JSON.parse(localStorage.getItem('panier') || '[]')
    if (cartData.length === 0) {
      error.value = 'Aucun article dans le panier'
      return
    }

    // 2. Prépare les données pour l'API (sans name/images)
    const payloadItems = cartData.map(item => ({
      productId: item.productId,
      quantity: item.quantité || 1,
      price: parseFloat(item.price),
      size: item.taille
    }))
    const total = payloadItems.reduce((sum, i) => sum + i.price * i.quantity, 0)

    // 3. Envoie la commande
    await createOrder({ items: payloadItems, totalAmount: total })

    // 4. Construit l'objet order pour l'affichage local (avec name/images)
    order.value = {
      items: cartData.map(item => ({
        productId: item.productId,
        name: item.name,
        images: item.images,
        size: item.taille,
        quantity: item.quantité || 1,
        price: parseFloat(item.price)
      })),
      totalAmount: total
    }

  } catch (err) {
    error.value = err.message || 'Une erreur est survenue'
  } finally {
    loading.value = false
    localStorage.removeItem('panier')
  }
})
</script>

<style scoped></style>