<template>
    <div class=" w-full bg-quinary p-10">
    <main class="grid place-content-center min-h-[50vh] w-full">
        <h1 class="text-4xl text-red-500">Adresses Page under development</h1>
    </main>

 
    <div class="flex">
    <Typography variant="h1" component="h1" font="flaemische" weight="regular" theme="quaternary" class="text-[50px] text-shadow-custom">M</Typography>
    <Typography variant="h1" component="h1" font="scholar" weight="regular" theme="quaternary" class="text-[60px] text-shadow-custom">es adresses</Typography>
    </div>

    <div class="p-30">
    <Typography variant="h2" component="h2" font="scholar" weigth="regular" theme="quaternary">Libellé</Typography>
 

    <div class="flex justify-between">
    <Typography variant="h2" component="h2" font="scholar" weigth="regular" theme="quaternary">Nom</Typography>
 
    <Typography variant="h2" component="h2" font="scholar" weigth="regular" theme="quaternary">Prénom</Typography>

    </div>

    <Typography variant="h2" component="h2" font="scholar" weigth="regular" theme="quaternary">Téléphone</Typography>
 

    <div class="flex justify-between">
    <Typography variant="h2" component="h2" font="scholar" weigth="regular" theme="quaternary">Adresse</Typography>
    <Typography variant="h2" component="h2" font="scholar" weigth="regular" theme="quaternary">Code Postale</Typography>
    </div>
</div>
    <div class="flex justify-between">
        <router-link to="">
    <Typography variant="h3" component="h3" font="halenoir" weigth="regular" theme="quaternary">
        Ajouter des instructions à la livraison
    </Typography>
</router-link>

    <Button variant="secondary">Appliquer</Button>
    </div>

    <div>
        <label>
          <Typography variant="h2" component="h2" font="scholar" theme="quaternary">instructions lors de la livraison</Typography>
        </label>
        <textarea id="content"class="border border-[#E7B276] text-[#E7B276]  w-full p-2 mt-1"required></textarea>
      </div>

</div>
</template>

<script setup>
import Typography from '../../UI/design-system/Typography.vue';
import Button from '../../UI/design-system/Button.vue';
   
   
</script>

<style scoped>

</style>