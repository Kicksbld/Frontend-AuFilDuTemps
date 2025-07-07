<script setup>
import Header from "../UI/Components/Header.vue";
import HeaderCollection from "../UI/Components/HeaderCollection.vue";
import HeaderGame from "@/UI/Components/HeaderGame.vue";
import ParticlesBackground from "@/UI/Components/ParticlesBackground.vue";

</script>

<template>
  <div  class="w-full relative bg-quinary">
    <ParticlesBackground />
    <Header />
    <HeaderGame />
    <HeaderCollection />
  </div>
</template>
