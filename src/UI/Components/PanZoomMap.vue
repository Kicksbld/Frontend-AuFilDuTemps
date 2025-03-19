<template>
  <div>
    <div class="text-center mb-4">
      Find the circle number: {{ selectedCircleIndex + 1 }}
    </div>
    <div class="panzoom-container">
      <panZoom :options="{ minZoom: 1, maxZoom: 3 }" @init="handlePanZoomInit" ref="panZoom">
        <svg :width="svgWidth" :height="svgHeight" viewBox="0 0 2000 2000">
          <image
            :href="'/src/assets/img/png/patternTest.png'"
            :width="imageWidth"
            :height="imageHeight"
          />

          <circle
            v-for="(circle, index) in circles"
            :key="index"
            :cx="circle.x"
            :cy="circle.y"
            r="20"
            :fill="circle.color"
            @click="handleCircleClick(index)"
            class="cursor-pointer hover:opacity-80 transition-opacity"
          />
        </svg>
      </panZoom>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    selectRandomCircle() {
      const randomIndex = Math.floor(Math.random() * this.circles.length);
      this.selectedCircleIndex = randomIndex;
      this.circles[randomIndex].isSelected = true;
    },

    handleCircleClick(index) {
      if (this.circles[index].isSelected) {
        alert("Great job!");
      } else {
        alert("Try again");
      }
    },

    handlePanZoomInit(instance) {
      this.instance = instance;
    },
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
  width: 300px;
  height: 300px;
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
