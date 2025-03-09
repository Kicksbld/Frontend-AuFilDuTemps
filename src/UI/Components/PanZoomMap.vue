<template>
    <div class="map-container">
      <SvgPanZoom
        class="svg-pan"
        :zoomEnabled="true"
        :controlIconsEnabled="true"
        :fit="false"
        :center="true"
        @created="registerSvgPanZoom"
      >
        <svg class="w-full h-full" viewBox="0 0 2000 2000">
       
          <image x="0" y="0" width="2000" height="2000" xlink:href="/src/assets/img/png/vue.svg" />
        
          <circle cx="500" cy="700" r="50" fill="red" @click="onCharacterFound" />
        </svg>
      </SvgPanZoom>
    </div>
  </template>
  
  <script>
  import { SvgPanZoom } from "vue-svg-pan-zoom"; // ✅ Correction de l'import
  
  export default {
    components: { SvgPanZoom },
    data() {
      return {
        svgpanzoom: null, 
      };
    },
    methods: {
      registerSvgPanZoom(instance) {
        this.svgpanzoom = instance; // Stocke l'instance pour contrôler le zoom plus tard
      },
      onCharacterFound() {
        alert("Bravo ! Vous avez trouvé le personnage 🎉");
      },
    },
  };
  </script>
  
  <style scoped>
  .map-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #f5f5f5;
  }
  
  .svg-pan {
    width: 100%;
    height: 100%;
    border: 1px solid black;
  }
  </style>
  