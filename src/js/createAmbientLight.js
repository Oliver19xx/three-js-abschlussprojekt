import {scene} from "./index.js";
import * as THREE from "three";

export function createAmbientLight() {
  const color = 0xFFFFFF;
  const intensity = 0.104;
  const light = new THREE.AmbientLight(color, intensity);
  window.App.ambientLight = light;
  scene.add(light);
}
