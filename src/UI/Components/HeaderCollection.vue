<template>
    <div class="w-full min-h-[100vh] relative cursor-pointer" @click="navigateToCollection">
        <div ref="title" class="w-full flex justify-center items-center absolute top-1/2 transform -translate-y-1/2">
            <img class="w-[70%] sm:w-[60%] md:w-[50%] lg:w-[30%] xl:w-[30%] h-auto" 
                alt="Collection"
                src="../../assets/img/svg/collection.svg" 
            />
        </div>

        <img ref="image1" class="opacity-0 w-[100px] sm:w-[150px] md:w-[200px] lg:w-[275px] h-auto absolute 
            top-[15%] sm:top-[20%] left-[5%] sm:left-[10%] transform -translate-y-1/2" 
            alt="Collection"
            src="../../assets/img/png/collection1.png"
        />
        <img ref="image2" class="opacity-0 w-[100px] sm:w-[150px] md:w-[200px] lg:w-[275px] h-auto absolute 
            top-[35%] sm:top-[40%] right-[5%] sm:right-[15%] transform -translate-y-1/2" 
            alt="Collection"
            src="../../assets/img/png/collection2.png"
        />
        <img ref="image3" class="opacity-0 w-[100px] sm:w-[150px] md:w-[200px] lg:w-[275px] h-auto absolute 
            top-[60%] sm:top-[70%] left-[8%] sm:left-[20%] transform -translate-y-1/2" 
            alt="Collection"
            src="../../assets/img/png/collection3.png"
        />
        <img ref="image4" class="opacity-0 w-[100px] sm:w-[150px] md:w-[200px] lg:w-[275px] h-auto absolute 
            top-[80%] sm:top-[85%] right-[10%] sm:right-[25%] transform -translate-y-1/2" 
            alt="Collection"
            src="../../assets/img/png/collection4.png"
        />
        <img ref="image5" class="opacity-0 w-[100px] sm:w-[150px] md:w-[200px] lg:w-[275px] h-auto absolute 
            top-[25%] sm:top-[30%] right-[2%] transform -translate-y-1/2 hidden sm:block" 
            alt="Collection"
            src="../../assets/img/png/collectionTest.png"
        />
    </div>
</template>

<script>
import Typography from '../design-system/Typography.vue';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'HeaderCollection',
    components: {
        Typography,
    },
    setup() {
        const router = useRouter();
        const image1 = ref(null);
        const image2 = ref(null);
        const image3 = ref(null);
        const image4 = ref(null);
        const image5 = ref(null);
        const title = ref(null);

        onMounted(() => {
            const images = [image1.value, image2.value, image3.value, image4.value, image5.value, title.value];
            
            images.forEach((image, index) => {
                gsap.fromTo(image,
                    {
                        x: window.innerWidth, // Start from right side of screen
                        opacity: 0
                    },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        delay: index * 0.2,
                        scrollTrigger: {
                            trigger: image,
                            start: "top 100%",
                            end: "top 50%",
                            toggleActions: "play none none reverse",
                            markers: false,
                            scrub: 2 // Smooth scroll animation
                        }
                    }
                );
            });
        });

        const navigateToCollection = () => {
            router.push('/collections');
        };

        return {
            navigateToCollection,
            image1,
            image2,
            image3,
            image4,
            image5,
            title
        };
    }
}
</script>

<style scoped></style>