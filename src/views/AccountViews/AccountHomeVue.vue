<template>
      <div class="w-full bg-quinary p-10">
    <main class="grid place-content-center min-h-[50vh] w-full">
        <h1 class="text-4xl text-red-500">Account Home Page under development</h1>
        <div class="flex flex-col gap-4 mt-4">
            <RouterLink class="text-blue-500" to="/account/orders">Orders</RouterLink>
            <RouterLink class="text-blue-500" to="/account/connections">Connections</RouterLink>
            <RouterLink class="text-blue-500" to="/account/adresses">Adresses</RouterLink>
            <RouterLink class="text-blue-500" to="/account/payement-method">Payement Method</RouterLink>
            <RouterLink class="text-blue-500" to="/account/support-form">Support Form</RouterLink>
        </div>
    </main>

    <div class="flex">
    <Typography variant="h1" component="h1" font="flaemische" theme="quaternary" class="text-[50px] text-shadow-custom">R</Typography>
    <Typography variant="h1" component="h1" font="scholar" theme="quaternary" class="text-[60px] text-shadow-custom">aphaël</Typography>
</div>

    <div class="flex justify-center gap-[90px]">
        <div>
            <RouterLink to="/account/payement-method" >
    <Button><img src="../../assets/img/png/commande.png"></Button>
    <Typography variant="h2" component="h2" font="scholar" theme="quaternary" weight="regular" class="text-center" >Mes commandes</Typography>
</RouterLink>
</div>
<div>
    <RouterLink to="/account/support-form" >
    <Button><img src="../../assets/img/png/message.png"></Button>
    <Typography variant="h2" component="h2" font="scholar" theme="quaternary" weight="regular" class="text-center">Mes messages</Typography>
</RouterLink>
</div>

<div>
    <Button><img src="../../assets/img/png/setting.png"></Button>
    <Typography variant="h2" component="h2" font="scholar" theme="quaternary" weight="regular" class="text-center">Paramètres</Typography>
    </div>
</div>

    <div class="flex justify-between mt-[200px]">
    <Typography variant="h1" component="h1" font="scholar" weight="regular" theme="quaternary">Mes préférences</Typography>

  <RouterLink to="./orders"> 
    <Button><img src="../../assets/img/png/edit.png" class="w-11"></Button>
</RouterLink> 
</div>

<div class="p-[90px]">
<div class=" flex justify-between">
    <div>
        <Typography variant="h2" component="h2" font="scholar" theme="quaternary">Sexe</Typography>
        <Typography variant="h3" comonent="h3" font="scholar" theme="quaternary">Homme</Typography>
    </div>
    <div>
<Typography variant="h2" component="h2" font="scholar" theme="quaternary">Taille</Typography>
<Typography variant="h3" comonent="h3" font="scholar" theme="quaternary">M</Typography>
</div>
</div>
<div>
<Typography variant="h2" component="h2" font="scholar" theme="quaternary" class="text-center">Couleur favoris</Typography>
<Typography variant="h3" comonent="h3" font="scholar" theme="quaternary" class="text-center">Vert, Rouge</Typography>

</div>
</div>


</div>


</template>

<script setup>
import Typography from '../../UI/design-system/Typography.vue';
import Button from '../../UI/design-system/Button.vue';

    
</script>

<style scoped>

.text-shadow-custom {
  text-shadow: 0 0 10px #E7B276;
}

</style>