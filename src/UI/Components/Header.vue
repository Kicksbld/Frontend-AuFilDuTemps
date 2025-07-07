<template>
  <div class="w-full min-h-[100vh] flex items-end relative">
    <img src="../../assets/img/svg/ellipseHeader.svg" class="absolute w-[50%] left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2" alt="">
    <div class="absolute top-0 left-0 w-screen h-full z-0" ref="container"></div>

    <div class="bg-header-box max-w-[1036px] space-y-[15px] px-[38px] py-[32px] mx-[6.198vw] mb-[3.75vw] z-10 relative">
      <Typography font="scholar" variant="h1" theme="gold">
        Tisser des souvenirs pour ne pas laisser filer le temps
      </Typography>
      <Typography font="halenoir" variant="h3" theme="gold">
        Les souvenirs se forment avec le temps et ces derniers sont plus marquant lorsqu'ils touchent notre âme.
        C'est à travers l'art que l'héritage des souvenirs se fait et c'est ce que l'on cherche à partager.
        Grâce à la mode, on partage cette culture de l'art.
      </Typography>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TextureLoader } from "three";
import Typography from '../design-system/Typography.vue';
const tshirtModel = '/3D_assets/3dTshirt/Tshirt-final.gltf';

const container = ref(null);

onMounted(() => {
  const scene = new THREE.Scene();
  const textureloader = new TextureLoader();

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  let camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
  camera.position.z = 3;
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  if (container.value) {
    container.value.appendChild(renderer.domElement);
  }

  // Ajout des contrôles orbitaux
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Ajoute de l'inertie aux contrôles
  controls.dampingFactor = 0.05; // Ajuste la force de l'inertie
  controls.enableZoom = false; // Désactive le zoom
  controls.enablePan = false; // Désactive le déplacement latéral
  controls.autoRotate = true; // Active la rotation automatique
  controls.autoRotateSpeed = 2; // Vitesse de rotation automatique

  // Increase ambient light intensity
  const ambientLight = new THREE.AmbientLight(0xffffff, 2);
  scene.add(ambientLight);

  // Adjust directional light for better illumination
  const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
  directionalLight.position.set(2, 2, 5);
  scene.add(directionalLight);

  // Enhanced aura light behind the t-shirt
  const auraLight = new THREE.PointLight(0xE7B276, 5, 20); // Increased intensity and distance
  auraLight.position.set(0, 0, -3); // Moved further back
  scene.add(auraLight);

  // Add a second aura light for more spread
  const auraLight2 = new THREE.PointLight(0xE7B276, 3, 15);
  auraLight2.position.set(0, 0, -2);
  scene.add(auraLight2);

  let mixer = null;

  const loader = new GLTFLoader();
  loader.load(
    tshirtModel,
    (gltf) => {
      const model = gltf.scene;
      model.scale.set(0.5, 0.5, 0.5);
      model.position.set(0, 0.3, 0);
      scene.add(model);

      if (gltf.cameras && gltf.cameras.length > 0) {
        camera = gltf.cameras[0];
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();
        scene.add(camera);
      }
    },
    undefined,
    (error) => {
      console.error('Erreur lors du chargement du modèle :', error);
    }
  );

  window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  const animate = () => {
    controls.update(); // Met à jour les contrôles orbitaux

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  animate();
});
</script>

<style scoped>
/* Ajoute ceci si tu veux forcer le canvas à prendre tout l'espace */
canvas {
  display: block;
}
</style>
