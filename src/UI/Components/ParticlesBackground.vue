<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import * as THREE from "three";
import { TextureLoader } from "three";
import particlesTexturePath from "@/assets/img/png/9.png";

const container = ref(null);

let scene, camera, renderer, particles, animationId;
const count = 150000;
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

onMounted(() => {
  scene = new THREE.Scene();

  const particlesArray = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    particlesArray[i * 3] = (Math.random() - 0.5) * 10;
    particlesArray[i * 3 + 1] = (Math.random() - 0.5) * 10;
    particlesArray[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(particlesArray, 3));

  const loader = new TextureLoader();
  const particlesTexture = loader.load(particlesTexturePath);

  const material = new THREE.PointsMaterial({
    size: 0.015,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    color: new THREE.Color("#D4AF8E"),
    transparent: true,
    alphaMap: particlesTexture,
    opacity: 0.5
  });

  particles = new THREE.Points(geometry, material);
  scene.add(particles);

  camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
  scene.add(camera);

  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.value.appendChild(renderer.domElement);

  const clock = new THREE.Clock();

  const animate = () => {
    const elapsedTime = clock.getElapsedTime();
    const positions = geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3 + 1] += Math.sin(elapsedTime * 0.03 + i * 0.01) * 0.0003;
    }

    geometry.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
    animationId = requestAnimationFrame(animate);
  };

  animate();

  window.addEventListener("resize", onResize);
});

const onResize = () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
};

onUnmounted(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener("resize", onResize);
  renderer.dispose();
});
</script>

<template>
  <div ref="container" class="fixed top-0 left-0 w-full h-full pointer-events-none" />
</template>

<style scoped>

</style>
