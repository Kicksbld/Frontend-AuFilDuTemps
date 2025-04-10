<template>
    <div class="w-full bg-quinary px-4 sm:px-8 md:px-14 py-8 md:py-18">
        <div class="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            <router-link to="/">
                <img src="/src/assets/img/svg/logo-aufildutemps.svg" class="logo w-full" alt="logo" />
            </router-link>
            <div class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-[285px]">
                <div class="flex flex-col space-y-[20px] md:space-y-[40px] text-center md:text-left">
                    <div>
                        <router-link to="/products">
                            <Typography font="scholar" variant="h3" theme="quaternary">
                                Produits
                            </Typography>
                        </router-link>
                    </div>
                    <div>
                        <router-link to="/outfit-gallery">
                            <Typography font="scholar" variant="h3" theme="quaternary">
                                Gallerie D'outfit
                            </Typography>
                        </router-link>
                    </div>
                </div>
                <div class="flex flex-col space-y-[20px] md:space-y-[40px] text-center md:text-left">
                    <div>
                        <router-link to="/favourites">
                            <Typography font="scholar" variant="h3" theme="quaternary">
                                Favorites
                            </Typography>
                        </router-link>
                    </div>
                    <div>
                        <router-link to="/cart">
                            <Typography font="scholar" variant="h3" theme="quaternary">
                                Panier
                            </Typography>
                        </router-link>
                    </div>
                    <div>
                        <router-link to="/account">
                            <Typography font="scholar" variant="h3" theme="quaternary">
                                Compte
                            </Typography>
                        </router-link>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    </div>
</template>

<script>
import Typography from '../../design-system/Typography.vue';
import Button from '../../design-system/Button.vue';
import { RouterLink } from 'vue-router';

export default {
    name: 'Footer',
    components: {
        Typography,
        Button,
        RouterLink
    }
}
</script>

<style scoped></style>