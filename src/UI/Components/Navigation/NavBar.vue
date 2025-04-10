<template>
    <div class="app_container z-50 flex items-center justify-between fixed top-0 left-0 right-0 w-full">
        <div class="w-full">
            <!-- <p>{{ userData?.name || 'Loading...' }}</p>
            <Button @click="handleLogOut" variant="primary">Log Out</Button> -->
            <img class="menu-burger" src="/src/assets/img/svg/icons/menu-beige.svg" alt="">
        </div>
        <router-link to="/">
            <div class="w-max">
                <img class="logo" src="/src/assets/img/svg/logo-aufildutemps.svg" alt="">
            </div>

        </router-link>
        <div class="w-full flex justify-end">
           
        </div>
    </div>
</template>

<script>
import { RouterLink, useRouter } from 'vue-router';
import { useSessionDataStore } from '../../../stores/getUserSession';
import { onMounted, computed } from 'vue';
import Button from '../../design-system/Button.vue';
import { authClient } from '../../../lib/auth-client';

export default {
    components: {
        Button,
        RouterLink,
        
    },

    setup() {
        const router = useRouter();
        const sessionStore = useSessionDataStore();

        onMounted(async () => {
            await sessionStore.fetchSession();
        });

        const userData = computed(() => sessionStore.getUserData);

        const handleLogOut = async () => {
            await authClient.signOut({
                fetchOptions: {
                    onSuccess: () => {
                        router.push('/log-in');
                    },
                },
            });
        };

        return {
            userData,
            handleLogOut
        };
    }
};
</script>

<style scoped></style>