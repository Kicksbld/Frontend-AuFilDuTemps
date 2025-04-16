<template>
  <div class="mt-26">
    <div class="panzoom-container">
      <div ref="panElement">
        <svg :width="svgWidth" :height="svgHeight" viewBox="0 0 2000 2000">
          <image
            :href="patternImage"
            :width="imageWidth"
            :height="imageHeight"
          />
          <circle
            v-for="(circle, index) in circles"
            :key="index"
            :cx="circle.x"
            :cy="circle.y"
            r="50"
            :fill="circle.color"
            @click="handleCircleClick(index)"
            class="cursor-pointer hover:opacity-80 transition-opacity"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import panzoom from 'panzoom';
import patternImage from '@/assets/img/png/patternTest.png';

export default {
  data() {
    return {
      patternImage,
      selectedCircleIndex: -1,
      instance: null,
      circles: [
        { x: 250, y: 300, color: "#FF5733", isSelected: false },
        { x: 800, y: 200, color: "#33FF57", isSelected: false },
      ],
      svgWidth: 2000,
      svgHeight: 2000,
      imageWidth: 2000,
      imageHeight: 2000,
    };
  },

  methods: {
    handleCircleClick(index) {
      if (this.circles[index].isSelected) {
        alert("Great job!");
      } else {
        alert("Try again");
      }
    },

    initPanZoom() {
      this.instance = panzoom(this.$refs.panElement, {
        maxZoom: 3,
        minZoom: 1,
        bounds: true,
        boundsPadding: 0.1
      });
    },

    logSomething() {
      console.log("Something");
    },

    selectRandomCircle() {
      console.log("Selecting random circle");
      const randomIndex = Math.floor(Math.random() * this.circles.length);
      this.selectedCircleIndex = randomIndex;
      this.circles[randomIndex].isSelected = true;
    },
  },

  mounted() {
    this.initPanZoom();
    this.selectRandomCircle();
  },

  beforeUnmount() {
    if (this.instance) {
      this.instance.dispose();
    }
  },

  computed: {
    selectedCircle() {
      return this.circles.find((circle) => circle.isSelected);
    },
  },
};
</script>

<style scoped>
.panzoom-container {
  width: 600px;
  height: 500px;
  background-color: #f5f5f5;
  position: relative;
  overflow: hidden;
}

svg {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
