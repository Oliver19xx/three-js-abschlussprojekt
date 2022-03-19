import * as THREE from "three";
import {scene} from "./index.js";

const stars = new THREE.Group()

function createStar() {
  const geometry = new THREE.SphereGeometry(0.10, 24, 24);
  const material = new THREE.MeshStandardMaterial({color: 0xffffff});
  const star = new THREE.Mesh(geometry, material);
  star.name = "star";

  const [x, y, z] = Array(3)
    .fill(1)
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  stars.add(star);
}

export function createStars() {
  stars.name = "stars";
  // Array Length ist die Anzahl der Sterne
  Array(500).fill(3).forEach(createStar);
  scene.add(stars);
}

