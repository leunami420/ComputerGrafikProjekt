import {
  Color,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  AmbientLight,
  MeshPhongMaterial,
  DirectionalLight,
  DirectionalLightHelper,
  SpotLight,
  SpotLightHelper,
  RectAreaLight,

} from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";

async function init() {
  const container = document.querySelector('#scene-container');
  const scene = new Scene();
  scene.background = new Color(0x000033);



  // Add light
  const light = new AmbientLight(0xffffff,0.2);
  scene.add(light);

  //spotlight
  const dl = new SpotLight(0xffffff, 10)
  dl.shadowMapVisible = true;
  dl.position.set(280,290,30)
  dl.target.position.set( 280, 0, 30 );
  dl.distance = 300;
  const dlHelper = new SpotLightHelper(dl,3)
  scene.add(dl)
  //scene.add(dlHelper)

  //Plakatlight1
  const pl1 = new SpotLight(0xffffff, 10)
  pl1.position.set(-186,270,95)
  pl1.target.position.set( -178, 0, 95 );
  pl1.distance = 300;
  const pl1Helper = new SpotLightHelper(pl1,3)
  scene.add(pl1)
  //scene.add(pl1Helper)

  //Plakatlight2
  const pl2 = new SpotLight(0xffffff, 10)
  pl2.position.set(-170,270,95)
  pl2.target.position.set( -178, 0, 95 );
  pl2.distance = 300;
  const pl2Helper = new SpotLightHelper(pl2,3)
  scene.add(pl2)
  //scene.add(pl2Helper)

  //RectPlakatLight
  //RectAreaLightUniformsLib.init();

  //const pl1 = new RectAreaLight(0xffffff, 100,130,220)
  //pl1.position.set(-178,155,95)
  //pl1.rotation.y = (3 * Math.PI) / 2; // Rotate the light by 90 degrees
  //const pl1Helper = new RectAreaLightHelper(pl1)
  //scene.add(pl1)
  //scene.add(pl1Helper)

  // Camera
  const camera = new PerspectiveCamera(45, container.clientWidth / container.clientHeight, 100, 200000);
  camera.position.set(0, 300, 1000);

  // Render stuff
  const renderer = new WebGLRenderer();
  renderer.shadowMapEnabled = true;
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

    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    },
    (error) => {
      console.log(error);
    }
  );



  const flickerDuration = 23000; // 23 seconds
  const startTime = Date.now();

  function updateFlickeringIntensity() {
    const elapsed = Date.now() - startTime;
    const flickerIntensity = Math.random() * 0.9 + 0.9;
    dl.intensity = flickerIntensity;
    pl1.intensity = flickerIntensity;
    pl2.intensity = flickerIntensity;

  }

  // Render function
  function render() {
    renderer.render(scene, camera);
  }

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Update controls for camera rotation
    updateFlickeringIntensity();
    render();
  }

  // Call animate function to start the animation loop
  animate();

}

init();
