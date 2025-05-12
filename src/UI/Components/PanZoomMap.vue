<template>
  <div class="f-panzoom" id="myPanzoom">
    <div class="f-panzoom__viewport relative">
      <img class="f-panzoom__content" src="../../assets/img/png/map+perso1.png" />
      <div class="f-panzoom__caption" data-selectable>
        <img class="w-5 h-auto" src="../../assets/img/svg/characterToFind.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import { Panzoom } from "@fancyapps/ui/dist/panzoom/panzoom.esm.js";
import "@fancyapps/ui/dist/panzoom/panzoom.css";

export default {
  name: 'PanZoomMap',

  mounted() {
    const container = document.getElementById("myPanzoom");
    const options = { 
      click: "toggleCover",
      maxScale: 5,
      wheel: {
        factor: 1
      }
    };

    new Panzoom(container, options);
  }
};
</script>

<style scoped>
.f-panzoom {
  width: 700px;
  height: 450px;
}

.f-panzoom__viewport {
  width: 100%;
  height: 100%;
}

.f-panzoom__content {
  max-width: 100%;
  height: auto;
}
</style>