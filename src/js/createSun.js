import * as THREE from "three";
import {scene} from "./index.js";
import {scaleObject} from "./utils.js";

export function createSun() {
  // Licht der Sonne
  const intensity = 1;
  const light = new THREE.PointLight(0xfcba03, intensity, 100);
  light.castShadow = true;
  light.shadow.bias = -0.005;
  light.shadow.bias = -0.00022;
  light.name = 'sunlight';
  light.update = function () {
    light.children.forEach(value => value.update());
  }
  scene.add(light);

  // Sonnenkugel
  const loader = new THREE.FileLoader();
  let sphere;
  loader.load('../assets/sun-surface.frag', function (fShader) {
    loader.load('../assets/sun-surface.vert', function (vShader) {
      sphere = new THREE.Mesh(
        new THREE.SphereGeometry(1, 32, 32),
        new THREE.ShaderMaterial({
          uniforms: {
            globeTexture: {
              value: new THREE.TextureLoader().load('../assets/sun.jpg')
            }
          },
          vertexShader: vShader,
          fragmentShader: fShader,
        })
      )
      sphere.name = 'sunSphere'
      sphere.update = function () {
        sphere.rotateY(App.TimeControl.mode * -0.001);
      }
      light.add(sphere);
    },);
  },);

  // Laden der Shader für die Atmosphäre der Sonne
  loader.load('../assets/sun-atmosphere.frag', function (fShader) {
    loader.load('../assets/sun-atmosphere.vert', function (vShader) {
      const atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(1, 50, 50),
        new THREE.ShaderMaterial({
          fragmentShader: fShader,
          vertexShader: vShader,
          blending: THREE.AdditiveBlending,
          side: THREE.BackSide
        })
      )
      scaleObject(atmosphere, 1.25);
      atmosphere.name = 'atmosphere';
      atmosphere.update = function () {
        const camera = App.CameraControl.getCurrentCamera();
        if (camera)
          atmosphere.setRotationFromQuaternion(camera.quaternion);
      }
      scene.add(atmosphere);
    },);
  },);
}
