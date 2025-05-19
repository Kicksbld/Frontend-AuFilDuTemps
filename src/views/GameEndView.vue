<template>
    <div class="min-h-screen w-full bg-quinary flex items-center flex-col space-y-12 md:space-y-25 p-4 md:p-8">
        <div class="space-y-8 md:space-y-12 flex flex-col items-center">
            <img src="../assets/img/svg/felicitation.svg" 
                class="w-[90%] lg:w-[60%] xl:w-[80%]" 
                alt="Félicitations">
            <div class="w-[50%] md:w-[30%] h-[1px] bg-gold"></div>
        </div>
        <div class="flex flex-col items-center gap-8 md:gap-14">
            <Typography variant="display" theme="gold" font="scholar" class="text-center px-4">
                Voici le coupon que tu a remporter, il sera accessible depuis ton espace compte :
            </Typography>

            <img class="max-w-[800px]" src="../assets/img/svg/price.svg" alt="">
        </div>
    </div>
</template>

<script>
import Button from '../UI/design-system/Button.vue';
import Typography from '../UI/design-system/Typography.vue';

export default {
    name: 'EndView',

    components: {
        Typography,
        Button
    },

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style scoped></style>