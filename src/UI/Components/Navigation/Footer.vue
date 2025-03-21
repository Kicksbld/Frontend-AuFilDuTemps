<template>
    <div class="w-full p-4 border-t border-t-quinary  bg-white ">
        <div class="flex items-center justify-between">

            <router-link to="/design-system">
                <Button @click="router.push('/design-sytem')" variant="primary" size="medium">
                    Design System
                </Button>
            </router-link>
            <Typography component="h1" variant="h1" font="scholar">
                Footer
            </Typography>
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
        Button
    }
}

</script>

<style scoped></style>