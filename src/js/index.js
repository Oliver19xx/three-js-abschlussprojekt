import * as THREE from 'three';
import {OrbitalObject} from './OrbitalObject.js';
import {buildModel} from './buildModel.js';
import {createAmbientLight} from './createAmbientLight.js';
import {createPlanets} from './createPlanets.js';
import {createSun} from './createSun.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import '../css/style.css';
import {createStars} from "./createStars";
import {TimeControl} from "./TimeControl.js";
import {addKeyboardControls} from "./KeyboardControl.js";
import {CameraControl} from "./CameraControl.js";
import {WEBGL} from "three/examples/jsm/WebGL.js";


export let domElement, renderer, controls, scene;
window.App = {};

function main() {
  init();
  renderer.setAnimationLoop(animationLoop);
}
// Baut die Szene und erschafft die Controller mit dem
// Zeit und Kamera gesteuert werden können
function init() {
  createScene();
  createAmbientLight();
  createMeshes();
  buildModel();
  createRenderer();

  App.TimeControl = new TimeControl();
  App.CameraControl = new CameraControl();
  addKeyboardControls();
  App.CameraControl.getCurrentCamera();
  createOrbitControls();
}

//Erschafft eine schwarze Szene
function createScene() {
  scene = new THREE.Scene();
  App.scene = scene
  scene.background = new THREE.Color('black');
}

//Erschafft die Texturen der Sonne, Sterne und Planeten
function createMeshes() {
  createSun();
  createStars();
  createPlanets(scene);
}

function createRenderer() {
  domElement = document.querySelector('#canvas');
  renderer = new THREE.WebGLRenderer({canvas: domElement});
  renderer.shadowMap.enabled = true;
}

function createOrbitControls() {
  controls = new OrbitControls(App.CameraControl.getFreeCamera(), domElement);
  controls.target.set(0, 0, 0);
}

function animationLoop() {
  update();
  render();
  controls.update();
}

// TODO:?? Updatet alle Children der Szene
function update() {
  scene.children.forEach(sceneChildren => {
    if (sceneChildren instanceof OrbitalObject)
      sceneChildren.update();
    else if (['spaceship', 'atmosphere', 'sunlight'].includes(sceneChildren.name))
      sceneChildren.update();
  });
}

function render() {
  const currentCamera = App.CameraControl.getCurrentCamera();
  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    currentCamera.aspect = canvas.clientWidth / canvas.clientHeight;
    currentCamera.updateProjectionMatrix();
  }
  renderer.render(scene, currentCamera);
}

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

// Wenn THREE.JS nicht funktioniert dies dem Nutzer mitteilen
if (WEBGL.isWebGLAvailable()) {
  // Initiate function or other initializations here
  main();
} else {
  document.querySelector('canvas').remove()
  var z = document.createElement('p');
  z.innerHTML = WEBGL.getWebGLErrorMessage();
  document.body.appendChild(z);
}

