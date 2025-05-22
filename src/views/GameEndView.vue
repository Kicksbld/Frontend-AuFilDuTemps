<template>
    <div class="min-h-screen w-full bg-quinary flex items-center flex-col space-y-12 md:space-y-25 p-4 md:p-8">
      <div class="space-y-8 md:space-y-12 flex flex-col items-center">
        <img
          src="../assets/img/svg/felicitation.svg"
          class="w-[90%] lg:w-[60%] xl:w-[80%]"
          alt="Félicitations"
        />
        <div class="w-[50%] md:w-[30%] h-[1px] bg-gold"></div>
      </div>
  
      <div class="flex flex-col items-center gap-8 md:gap-14">
        <Typography variant="display" theme="gold" font="scholar" class="text-center px-4">
          Voici le coupon que tu as remporté (ton temps : {{ formattedTime }}), il sera accessible depuis ton espace compte :
        </Typography>
  
        <img class="max-w-[800px]" :src="coupon.imageUrl" :alt="`Coupon ${coupon.name}`" />
  
        <div class="flex justify-center">
          <RouterLink to="/">
            <Button variant="secondary" class="w-70">Retour à l'accueil</Button>
          </RouterLink>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue'
  import Button from '../UI/design-system/Button.vue'
  import Typography from '../UI/design-system/Typography.vue'
  import { useApi } from '../stores/dataBaseData'
  import { coupons } from '../services'
  
  export default {
    name: 'EndView',
    components: {
      Typography,
      Button
    },
  
    setup() {
      const finalTime = ref(0)     // temps total en secondes
      const coupon = ref({ name: '', imageUrl: '' })
  
      // Définition des types de coupon
      const couponsType = [
        {
          name: '10%',
          imageUrl: 'https://i.postimg.cc/qBX0nWK2/Mockup-coupon-1.png'
        },
        {
          name: '20%',
          imageUrl: 'https://i.postimg.cc/gJ1ndJfh/Mockup-coupon-20-1.png'
        },
        {
          name: 't-shirt',
          imageUrl: 'https://i.postimg.cc/nVQX24DG/Mockup-coupon-t-shirt-offert-1.png'
        }
      ]
  
      const { run: createCoupon } = useApi(coupons.create)
  
      // 1) Lecture et parsing de "mm:ss" → totalSeconds
      const getFinalTime = () => {
        const timeString = localStorage.getItem('gameTime') || '00:00'
        const [minStr, secStr] = timeString.split(':')
        const minutes = parseInt(minStr, 10) || 0
        const seconds = parseInt(secStr, 10) || 0
        finalTime.value = minutes * 60 + seconds
      }
  
      // 2) Choix du coupon selon finalTime
      const getCouponBasedOnFinalTime = () => {
        if (finalTime.value < 10) {
          coupon.value = couponsType[2]  // t-shirt
        } else if (finalTime.value < 20) {
          coupon.value = couponsType[1]  // 20%
        } else {
          coupon.value = couponsType[0]  // 10%
        }
      }
  
      // 3) Création du coupon en base
      const createCouponNow = async () => {
        if (coupon.value.name) {
          await createCoupon({
            name: coupon.value.name,
            imageUrl: coupon.value.imageUrl
          })
        }
      }
  
      // Time formatted for display "mm:ss"
      const formattedTime = computed(() => {
        const min = Math.floor(finalTime.value / 60)
          .toString()
          .padStart(2, '0')
        const sec = (finalTime.value % 60).toString().padStart(2, '0')
        return `${min}:${sec}`
      })
  
      // Lifecycle
      onMounted(async () => {
        getFinalTime()
        getCouponBasedOnFinalTime()
        await createCouponNow()
      })
  
      return {
        finalTime,
        formattedTime,
        coupon
      }
    }
  }
  </script>
  
  <style scoped>
  /* Tes styles d'origine */
  </style>
  