<template>
    <div class="w-full bg-quinary px-4 sm:px-8 md:px-14 py-8 md:py-18">
        
            <div class="flex flex-col mt-40 md:flex-row space-y-8 md:space-y-0 md:space-x-[285px] justify-center align-center">
                <div class="flex gap-20 space-y-[20px] md:space-y-[40px]">
                    <div>
                        <router-link to="/products">
                           <img src="../../../assets/img/svg/insta.svg">
                        </router-link>
                    </div>
                    <div>
                        <router-link to="/account/support-form">
                           <img src="../../../assets/img/svg/mail.svg" class="w-13">
                        </router-link>
                    </div>
                </div>
             
            </div>
         
            <div class="flex justify-center align-center">
                <hr class="w-[600px] border-[1px] border-[#D4AF8E]" />
            </div>
            <div class="flex text-center justify-center align-center mt-9">
            <span class="text-[#E7B276] mr-3 text-2xl">&copy;</span>
            <Typography variant="h2" font="halenoir" weight="light" theme="gold" class="text-center">2025, Au fil du temps</Typography>
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