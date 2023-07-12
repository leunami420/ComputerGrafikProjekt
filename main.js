import {
  Color,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  AmbientLight,
} from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

async function init() {
  const container = document.querySelector('#scene-container');
  const scene = new Scene();
  scene.background = new Color('black');

  // Add light
  const light = new AmbientLight(0xffffff);
  scene.add(light);

  // Camera
  const camera = new PerspectiveCamera(45, container.clientWidth / container.clientHeight, 100, 200000);
  camera.position.set(0, 2, 100);

  // Render stuff
  const renderer = new WebGLRenderer();
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Orbit Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.target.set(0, 1, 0);

  // FBX Loader
  const fbxLoader = new FBXLoader();
  fbxLoader.load(
    '/assets/cow/Bushalte.fbx',
    (object) => {

      scene.add(object);
      fixTransparentTextures(object);

    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    },
    (error) => {
      console.log(error);
    }
  );

  // Function to fix transparent textures
  function fixTransparentTextures(object) {
    object.traverse((child) => {
      if (child.isMesh && child.material && child.material.transparent) {
        child.material.depthWrite = false;
      }
    });
  }

  // Render function
  function render() {
    renderer.render(scene, camera);
  }

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Update controls for camera rotation
    render();
  }

  // Call animate function to start the animation loop
  animate();
}

init();
