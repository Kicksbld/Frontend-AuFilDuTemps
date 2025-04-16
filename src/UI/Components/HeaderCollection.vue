<template>
    <div class="w-full min-h-[100vh] relative cursor-pointer" @click="navigateToCollection">
        <div class="w-full flex justify-center items-center absolute top-1/2 transform -translate-y-1/2">
            <img class="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] h-auto" 
                alt="Collection"
                src="../../assets/img/svg/collection.svg" 
            />
        </div>

        <img class="w-[125px] sm:w-[175px] md:w-[225px] lg:w-[275px] h-auto absolute top-[20%] left-[10%] transform -translate-y-1/2" 
            alt="Collection"
            src="../../assets/img/png/collectionTest.png" 
        />
        <img class="w-[125px] sm:w-[175px] md:w-[225px] lg:w-[275px] h-auto absolute top-[40%] right-[15%] transform -translate-y-1/2" 
            alt="Collection"
            src="../../assets/img/png/collectionTest.png" 
        />
        <img class="w-[125px] sm:w-[175px] md:w-[225px] lg:w-[275px] h-auto absolute top-[70%] left-[20%] transform -translate-y-1/2" 
            alt="Collection"
            src="../../assets/img/png/collectionTest.png" 
        />
        <img class="w-[125px] sm:w-[175px] md:w-[225px] lg:w-[275px] h-auto absolute top-[85%] right-[25%] transform -translate-y-1/2" 
            alt="Collection"
            src="../../assets/img/png/collectionTest.png" 
        />
        <img class="w-[125px] sm:w-[175px] md:w-[225px] lg:w-[275px] h-auto absolute top-[30%] right-[2%] transform -translate-y-1/2" 
            alt="Collection"
            src="../../assets/img/png/collectionTest.png" 
        />
    </div>
</template>

<script>
import Typography from '../design-system/Typography.vue';
import { useRouter } from 'vue-router';

export default {
    name: 'HeaderCollection',
    components: {
        Typography,
    },
    setup() {
        const router = useRouter();

        const navigateToCollection = () => {
            router.push('/collections');
        };

        return {
            navigateToCollection
        };
    }
}
</script>

<style scoped></style>