<template>
  <div class="w-full min-h-[100vh] flex items-end relative">
    <div class="absolute top-0 left-0 w-screen h-full z-0" ref="container"></div>

    <div class="bg-header-box max-w-[1036px] space-y-[15px] px-[38px] py-[32px] mx-[6.198vw] mb-[3.75vw] z-10 relative">
      <Typography font="scholar" variant="h1" theme="headerText">
        Tisser des souvenirs pour ne pas laisser filer le temps
      </Typography>
      <Typography font="halenoir" variant="h3" theme="headerText">
        Les souvenirs se forment avec le temps et ces derniers sont plus marquant lorsqu'ils touchent notre âme.
        C'est à travers l'art que l'héritage des souvenirs se fait et c'est ce que l'on cherche à partager.
        Grâce à la mode , on partage cette culture de l'art
      </Typography>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import Typography from '../design-system/Typography.vue';
import tshirtModel from '../../assets/3D_assets/3dTshirt/model.gltf?url';


const container = ref(null);

onMounted(() => {
  const scene = new THREE.Scene();

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

  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  let mixer = null;

  const loader = new GLTFLoader();
  loader.load(
      tshirtModel,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.8, 0.8, 0.8);

        const mesh = model.children[0];
        mesh.material = new THREE.MeshBasicMaterial({ color: 0xE7B276 }); // Couleur uniforme sans effet de lumière

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


  const clock = new THREE.Clock();

  const animate = () => {
    const delta = clock.getDelta();
    if (mixer) mixer.update(delta);

    // Rotation de la scène pour un effet de mouvement
    scene.rotation.y += 0.005;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  animate();
});
</script>

<style scoped>
/* Ajoute ceci si tu veux forcer le canvas à prendre tout l’espace */
canvas {
  display: block;
}
</style>
