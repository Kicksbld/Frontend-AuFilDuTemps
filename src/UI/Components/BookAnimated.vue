<template>
  <Transition>
    <div class="wrapper" v-if="show">
      <div v-if="isTitleShown" class="sticky titleAnimation top-8 w-full flex justify-center items-center z-50">
        <img class="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] h-auto" alt="Jeu Concours"
          src="/src/assets/img/svg/jeuConcours.svg" />
      </div>
      <Button v-if="isTitleShown" @click="handleButtonClick"
        class="sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50" variant="primary">
        Acceder au jeu
      </Button>
      <div ref="container" class="model-container"></div>
      <div class="scroll-content"></div>
    </div>
  </Transition>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bookModel from '../../assets/3D_assets/scene.gltf?url';
import Button from '../design-system/Button.vue'
import { useRouter } from 'vue-router';


gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'BookAnimated',
  components: { Button },
  setup() {
    const container = ref(null);
    let scene;
    let renderer;
    let camera;
    let mixer;
    let animationId;
    let actions = [];
    let currentTime = 0;
    const isTitleShown = ref(false);
    let router = useRouter();
    let show = ref(true);

    const init = () => {
      if (!container.value) return;

      scene = new THREE.Scene();
      scene.background = null; // Make scene background transparent

      const width = container.value.clientWidth || window.innerWidth;
      const height = container.value.clientHeight || window.innerHeight;

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true  // Enable transparency
      });
      renderer.setClearColor(0x000000, 0); // Set clear color to transparent
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      container.value.appendChild(renderer.domElement);

      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.set(0, 0, 5);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);

      loadModel();
      window.addEventListener('resize', onWindowResize);

      animate();
    };

    const loadModel = () => {
      const loader = new GLTFLoader();
      loader.load(
        bookModel,
        (gltf) => {
          if (gltf.cameras && gltf.cameras.length > 0) {
            const modelCamera = gltf.cameras.find(c => c.name === 'PerspectiveCamera');
            if (modelCamera && container.value) {
              camera = modelCamera;
              camera.aspect = container.value.clientWidth / container.value.clientHeight;
              camera.updateProjectionMatrix();
            }
          }

          scene.add(gltf.scene);
          mixer = new THREE.AnimationMixer(gltf.scene);

          actions = gltf.animations.map((clip) => {
            const action = mixer.clipAction(clip);
            action.loop = THREE.LoopRepeat;
            return action;
          });

          setupScrollAnimation();
        },
        undefined,
        (error) => {
          console.error('Error loading model:', error);
        }
      );
    };

    const setupScrollAnimation = () => {
      ScrollTrigger.create({
        trigger: '.wrapper',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          if (!mixer || actions.length === 0) return;

          const duration = actions[0].getClip().duration;
          currentTime = self.progress * duration;

          actions.forEach(action => {
            if (!action.isRunning()) {
              action.play();
            }
            action.time = currentTime;
            mixer.update(0);
          });

          if (self.progress > 0.8) {
            isTitleShown.value = true;
          } else {
            isTitleShown.value = false;
          }

        }
      });

      actions.forEach(action => {
        action.play();
        action.paused = true;
      });
    };


    const animate = () => {
      animationId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    const cleanup = () => {
      window.removeEventListener('resize', onWindowResize);
      cancelAnimationFrame(animationId);
      if (renderer) renderer.dispose();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

    const onWindowResize = () => {
      if (!container.value) return;

      camera.aspect = container.value.clientWidth / container.value.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.value.clientWidth, container.value.clientHeight);
    };

    onMounted(init);
    onBeforeUnmount(cleanup);

    const handleButtonClick = () => {
      const tl = gsap.timeline();
      
      tl.to(camera.position, {
        y: 8.5,
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => {
          camera.updateProjectionMatrix();
        }
      })
      .to(show, {
        value: false,
        duration: 0.5,
      }, "-=1.00")
      .call(() => {
        router.push("/home-game");
      }); // Route change happens after transition completes
    };

    return {
      container,
      isTitleShown,
      show,
      handleButtonClick
    };
  }
};
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 400vh;
}

/* nous vous expliquerons ensuite ce que font ces classes ! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.model-container {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.scroll-content {
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
