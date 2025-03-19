<template>
    <div ref="bookContainer" class="book-container"></div>
  </template>
  
  <script>
  import * as THREE from 'three';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
  
  export default {
    name: 'ThreeBook',
    mounted() {
      this.initThreeJS();
    },
    methods: {
      initThreeJS() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xffffff); // Set background color to white
        this.$refs.bookContainer.appendChild(renderer.domElement);
  
        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        // Load the book model
        const loader = new GLTFLoader();
        loader.load(
          '/src/assets/3D_assets/animatedBook.gltf',
          (gltf) => {
            const book = gltf.scene;
            scene.add(book);
            
            // Adjust camera position
            camera.position.set(0, 2, 10);
            camera.lookAt(0, 0, 15);

            // Add rotation animation
            const animate = () => {
              requestAnimationFrame(animate);
             /*  book.rotation.y += 0.005; // Slowly rotate the book */
              renderer.render(scene, camera);
            };
            animate();
          },
          (progress) => {
            console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
          },
          (error) => {
            console.error('Error loading 3D model:', error);
          }
        );
  
        // Handle window resizing
        window.addEventListener('resize', () => {
          renderer.setSize(window.innerWidth, window.innerHeight);
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .book-container {
    width: 100%;
    height: 100vh;
  }
  </style>
  