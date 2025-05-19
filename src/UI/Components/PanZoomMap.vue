<template>
  <div class="f-panzoom" id="myPanzoom">
    <div class="f-panzoom__viewport relative">
      <!-- ICI : ce conteneur reçoit la classe transformée par Panzoom -->
      <div class="f-panzoom__content relative">
        <img
          class="w-full h-auto block"
          src="../../assets/img/png/map+perso1.png"
        />

        <!-- Le personnage est dans le même conteneur transformé -->
        <div
          class="absolute"
          :style="{ top: '475px', left: '720px' }"
          data-selectable
          @click="$emit('characterFound')"
        >
          <img class="w-7 h-auto blur-[0.2px]" src="../../assets/img/svg/characterToFind.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Panzoom } from "@fancyapps/ui/dist/panzoom/panzoom.esm.js";
import "@fancyapps/ui/dist/panzoom/panzoom.css";

export default {
  name: "PanZoomMap",
  emits: ["characterFound"],

  mounted() {
    const container = document.getElementById("myPanzoom");
    const options = {
      maxScale: 5,
      wheel: {
        factor: 1,
      },
    };

    new Panzoom(container, options);
  },
};
</script>

<style scoped>
.f-panzoom {
  width: 900px;
  height: auto;
  overflow: hidden;
}

.f-panzoom__viewport {
  width: 100%;
  height: auto;
  position: relative;
}

/* Ce conteneur est transformé (zoom/pan) */
.f-panzoom__content {
  position: relative;
  display: inline-block;
}
</style>
