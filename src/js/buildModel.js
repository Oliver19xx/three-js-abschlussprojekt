import {scene} from "./index.js";
import {scaleObject} from "./utils.js";
import * as THREE from 'three';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";


export function buildModel() {
  const loader = new GLTFLoader();

  loader.load('../assets/model/spaceship/StarSparrow.glb', function (gltf) {

    let spaceShip = gltf.scene;
    spaceShip.name = 'spaceship';
    spaceShip.castShadow = true;
    spaceShip.receiveShadow = true;
    spaceShip.translateX(-5);
    spaceShip.translateY(-1);
    const model = spaceShip.children.find(child => child.name === "StarSparrow01")
    model.rotateZ(-Math.PI / 4);

    spaceShip.update = () => {
      // Objekt drehen und bewegen
      const rotationSpeed = 0.005;
      // App.Timecontrol.mode ist der Multiplikator der bestimmt ob die Zeit vorwärts oder rückwärts läuft
      spaceShip.rotateY(App.TimeControl.mode * rotationSpeed);
      const axis = new THREE.Vector3(0, 0, 1);
      const distance = App.TimeControl.mode * rotationSpeed * 5;
      spaceShip.translateOnAxis(axis, distance);

      if (App.CameraControl.shouldFollowSpaceship()) {
        App.CameraControl.updateSpaceshipCamera(spaceShip.position, spaceShip.quaternion);
      }
    };
    scaleObject(spaceShip, 0.05);
    window.App.spaceShip = spaceShip;
    scene.add(spaceShip);
  }, undefined, function (error) {
    console.error(error);
  });
}
