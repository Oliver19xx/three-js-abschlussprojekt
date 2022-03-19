import * as THREE from "three";

export const initialFreeCameraPosition = {
  "x": 1.0980684413340012,
  "y": 4.6639214822566695,
  "z": 9.670411005485006
};

export class CameraControl {
  /**
   * - mode = false --> Freie Kamera
   * - mode = true --> Folge dem Objekt
   * @type {boolean}
   */
  #mode;
  #spaceShipCamera;
  #freeCamera;

  constructor() {
    this.#mode = false;
    this.#createFreeCamera();
    this.#createSpaceshipCamera();
    document.querySelector('#camera-switch').addEventListener('click', function () {
      App.CameraControl.toggleFollowMode();
    });
  }
  toggleFollowMode() {
    this.#mode = !this.#mode;
  }

  #createFreeCamera() {
    const fieldOfView = 45;
    const aspect = 2;
    const near = 0.1;
    const far = 100;
    this.#freeCamera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far);
    this.#freeCamera.position.set(initialFreeCameraPosition.x, initialFreeCameraPosition.y, initialFreeCameraPosition.z);
  }

  #createSpaceshipCamera() {
    const fieldOfView = 45;
    const aspect = 2;
    const near = 0.1;
    const far = 100;
    this.#spaceShipCamera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far);
    this.#spaceShipCamera.position.set(initialFreeCameraPosition.x, initialFreeCameraPosition.y, initialFreeCameraPosition.z);
  }

  /**
   *
   * @param position {THREE.Vector3}
   * @param quaternion {THREE.Quaternion} --> Verallgemeinerung der komplexen Zahlen
   */
  updateSpaceshipCamera(position, quaternion) {
    this.#spaceShipCamera.position.set(position.x+1, position.y, position.z+1);
    this.#spaceShipCamera.lookAt(position)
  }

  shouldFollowSpaceship() {
    return this.#mode;
  }

  getFreeCamera() {
    return this.#freeCamera;
  }

  getCurrentCamera() {
    return this.#mode ? this.#spaceShipCamera : this.#freeCamera;
  }
}
