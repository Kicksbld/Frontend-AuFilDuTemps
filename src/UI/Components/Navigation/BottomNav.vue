<template>
    <div :class="[
        'z-40 flex items-center justify-around h-12 w-full bg-quinary transition-all duration-300',
        isScrolled ? 'fixed top-0 left-0 right-0' : 'fixed top-[150px] left-0 right-0'
    ]">
        <router-link to="/products">
            <Typography variant="h3" font="scholar" theme="gold">Produits</Typography>
        </router-link>
        <div class="w-[1px] h-[85%] bg-gold"></div>
        <router-link to="/favourites">
            <Typography variant="h3" font="scholar" theme="gold">Favories</Typography>
        </router-link>
        <div class="w-[1px] h-[85%] bg-gold"></div>
        <router-link to="/outfit-gallery">
            <Typography variant="h3" font="scholar" theme="gold">Gallerie D'outfit</Typography>
        </router-link>
        <div class="w-[1px] h-[85%] bg-gold"></div>
        <router-link to="/cart">
            <Typography variant="h3" font="scholar" theme="gold">Panier</Typography>
        </router-link>
        <div class="w-[1px] h-[85%] bg-gold"></div>
        <router-link to="/account">
            <Typography variant="h3" font="scholar" theme="gold">Compte</Typography>
        </router-link>
    </div>
</template>

<script>
import Button from '../../design-system/Button.vue';
import Typography from '../../design-system/Typography.vue';
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    components: {
        Button,
        Typography
    },

    setup() {
        const isScrolled = ref(false);

        const handleScroll = () => {
            const navHeight = 0;
            isScrolled.value = window.scrollY > navHeight;
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            isScrolled
        };
    }
};
</script>

<style scoped></style>