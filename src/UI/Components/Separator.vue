<template>
    <div class="w-full flex justify-center items-center">
        <div class="flex items-center gap-16 md:gap-20 lg:gap-[98px] py-[13.148vh]">
            <img class="bubbles" src="/src/assets/img/svg/separatorBubbles.svg" alt="" />
            <div class="h-[150px] md:h-[200px] lg:h-[240.5px]  w-0.5 bg-quaternary">

            </div>
            <img class="transform rotate-180 bubbles" src="/src/assets/img/svg/separatorBubbles.svg" alt="" />
        </div>

    </div>
</template>

<script>
import Typography from '../design-system/Typography.vue';


export default {
    name: 'Separator',
    components: {
        Typography,
    }
}
</script>

<style scoped></style>