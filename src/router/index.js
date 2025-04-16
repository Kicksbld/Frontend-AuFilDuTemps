import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartVue from '../views/CartVue.vue'
import CheckOutVue from '../views/CheckOutVue.vue'
import OrderReviewVue from '../views/OrderReview.vue'
import OutfitGalleryVue from '../views/OutfitGalleryVue.vue'
import ProductsVue from '../views/ProductsVue.vue'
import FavouritesVue from '../views/FavouritesVue.vue'
import CollectionsVue from '../views/CollectionsVue.vue'
import AccountHomeVue from '../views/AccountViews/AccountHomeVue.vue'
import AccountAdressesVue from '../views/AccountViews/AccountAdressesVue.vue'
import AccountConnectionsVue from '../views/AccountViews/AccountConnectionsVue.vue'
import AccountOrderVue from '../views/AccountViews/AccountOrderVue.vue'
import AccountPayementMethodVue from '../views/AccountViews/AccountPayementMethodVue.vue'
import AccountSupportFormVue from '../views/AccountViews/AccountSupportFormVue.vue'
import CompetitionGameVue from '../views/CompetitionGameVue.vue'
import DesignSystem from '../views/DesignSytem.vue'
import SignUp from '../views/authentificationViews/SignUp.vue'
import LogIn from '../views/authentificationViews/LogIn.vue'
import GameHome from '../views/GameHome.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartVue,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckOutVue,
    },
    {
      path: '/order-review',
      name: 'order-review',
      component: OrderReviewVue,
    },
    {
      path: '/outfit-gallery',
      name: 'outfit-gallery',
      component: OutfitGalleryVue,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsVue,
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: FavouritesVue,
    },
    {
      path: '/collections',
      name: 'collections',
      component: CollectionsVue,
    },
    {
      path: '/account',
      name: 'account',
      component: AccountHomeVue,
    },
    {
      path: '/account/adresses',
      name: 'account-adresses',
      component: AccountAdressesVue,
    },
    {
      path: '/account/connections',
      name: 'account-connections',
      component: AccountConnectionsVue,
    },
    {
      path: '/account/orders',
      name: 'account-orders',
      component: AccountOrderVue,
    },
    {
      path: '/account/payement-method',
      name: 'account-payement-method',
      component: AccountPayementMethodVue,
    },
    {
      path: '/account/support-form',
      name: 'account-support-form',
      component: AccountSupportFormVue,
    },
    {
      path: '/competition-game',
      name: 'competition-game',
      component: CompetitionGameVue,
    },
    {
      path: '/design-system',
      name: 'designsytem',
      component: DesignSystem,
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp,
    },
    {
      path: '/log-in',
      name: 'log-in',
      component: LogIn,
    },
    {
      path: '/home-game',
      name: 'home-game',
      component: GameHome,
    }
  ],
})

export default router
