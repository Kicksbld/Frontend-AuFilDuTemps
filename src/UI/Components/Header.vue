<template>
    <div class="w-full min-h-[100vh] flex items-end">
        <img src="/src/assets/img/png/bg-header.png" class="absolute top-0 left-o w-screen -z-20" alt="video-header" />
        <div class="bg-header-box max-w-[1036px] space-y-[15px] px-[38px] py-[32px] mr-[6.198vw]  ml-[6.198vw] mb-[3.75vw]">
            <Typography font="scholar" variant="h1" theme="headerText">
                Tisser des souvenirs pour ne pas laisser filer le temps
            </Typography>
            <Typography font="halenoir" variant="h3" theme="headerText">
                Les souvenirs se forment avec le temps et ces derniers sont plus marquant lorsqu’ils touchent notre âme.
                C’est à travers l’art que l’héritage des souvenirs se fait et c’est ce que l’on cherche à partager.
                Grâce à la mode , on partage cette culture de l’art
            </Typography>
        </div>
    </div>
</template>

<script>
import Typography from '../design-system/Typography.vue';


export default {
    name: 'Header',
    components: {
        Typography,
    }
}
</script>

<style scoped></style>