import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  Vector2,
  AmbientLight,
} from 'three';
import { setupModel } from './setupModel.js';

import { GLTFLoader } from './vendor/three/examples/jsm/loaders/GLTFLoader.js';


async function init() {
  const container = document.querySelector('#scene-container');
  const scene = new Scene();
  scene.background = new Color('white');

  //Add light
  var light = new AmbientLight(0xffffff);
  scene.add(light);

  // camera
  const camera = new PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.01, 2000);
  camera.position.set(0, 2, 300);

  // GLTFLoader
  async function loadModel() {
    const loader = new GLTFLoader();
    const gltf = await loader.loadAsync('/assets/cow/scene.gltf');
    const modelData = gltf.scene;

    const model = setupModel(modelData, gltf);

    return { model };
  }

  const { model } = await loadModel();
  scene.add(model);


  // render stuff
  const renderer = new WebGLRenderer();
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Track mouse movement
  const mouse = new Vector2();
  const previousMouse = new Vector2();
  let isDragging = false;

  function handleMouseDown(event) {
    event.preventDefault();
    isDragging = true;
    previousMouse.set(event.clientX, event.clientY);
  }

  function handleMouseMove(event) {
    event.preventDefault();
    if (!isDragging) return;

    mouse.set(event.clientX, event.clientY);

    const delta = new Vector2().subVectors(mouse, previousMouse);
    const rotationSpeed = 0.005;

    // Update object rotation
    model.rotation.y += delta.x * rotationSpeed;
    model.rotation.x += delta.y * rotationSpeed;

    previousMouse.set(mouse.x, mouse.y);
    render();
  }

  function handleMouseUp(event) {
    event.preventDefault();
    isDragging = false;
  }

  container.addEventListener('mousedown', handleMouseDown);
  container.addEventListener('mousemove', handleMouseMove);
  container.addEventListener('mouseup', handleMouseUp);

  //render function
  function render() {
    renderer.render(scene, camera);
  }

  //call render function
  render();
}

init();
