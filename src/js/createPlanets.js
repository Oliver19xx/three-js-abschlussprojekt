import {OrbitalObject} from "./OrbitalObject.js";
import * as THREE from "three";
import {rings} from "./solarSystemConfig.js";
import {scaleObject} from "./utils.js";

export function createPlanets(center) {

  /** @type OrbitalObject */
  let planet, moon;

  // Erster Ring
  planet = new OrbitalObject({
    relativePosition: new THREE.Vector3(rings[0].planet.dist, 0, 0),
    rotationSpeed: rings[0].planet.rotationSpeed,
    material: {mapPath: '../assets/planet_fictional.jpg', normalMapPath: '../assets/normal.jpg'}
  });
  planet.name = "planet";
  moon = new OrbitalObject({
    relativePosition: new THREE.Vector3(0, 0, rings[0].moon.dist),
    rotationSpeed: rings[0].moon.rotationSpeed,
    material: {mapPath: '../assets/moon.jpg', normalMapPath: '../assets/normal.jpg'}
  });
  moon.name = "moon";
  center.add(planet.add(moon));
  scaleObject(planet, 0.3);
  scaleObject(moon, 0.8);

  planet = new OrbitalObject({
    relativePosition: new THREE.Vector3(0, 0, rings[0].planet.dist),
    rotationSpeed: rings[0].planet.rotationSpeed,
    material: {mapPath: '../assets/planet_frozen.jpg', normalMapPath: '../assets/normal.jpg'}
  });
  planet.name = "planet";
  moon = new OrbitalObject({
    relativePosition: new THREE.Vector3(rings[0].moon.dist, 0, 0),
    rotationSpeed: rings[0].moon.rotationSpeed,
    material: {mapPath: '../assets/moon.jpg', normalMapPath: '../assets/normal.jpg'}
  });
  moon.name = "moon";
  center.add(planet.add(moon));
  scaleObject(planet, 0.4);
  scaleObject(moon, 0.8);

  // Zweiter Ring
  planet = new OrbitalObject({
    relativePosition: new THREE.Vector3(-rings[1].planet.dist, 0, 0),
    rotationSpeed: rings[1].planet.rotationSpeed,
    material: {mapPath: '../assets/planet_red.jpg', normalMapPath: '../assets/normal.jpg'}
  });
  planet.name = "planet";
  moon = new OrbitalObject({
    relativePosition: new THREE.Vector3(0, 0, -rings[1].moon.dist),
    rotationSpeed: rings[1].moon.rotationSpeed,
    material: {mapPath: '../assets/planet_lava.jpg', normalMapPath: '../assets/normal.jpg'}
  });
  moon.name = "moon";
  center.add(planet.add(moon));
  scaleObject(planet, 0.4);
  scaleObject(moon, 0.8);

  planet = new OrbitalObject({
    relativePosition: new THREE.Vector3(0, 0, -rings[1].planet.dist),
    rotationSpeed: rings[1].planet.rotationSpeed,
    material: {mapPath: '../assets/planet_neptune.jpg', normalMapPath: '../assets/normal.jpg'}
  });
  planet.name = "planet";
  moon = new OrbitalObject({
    relativePosition: new THREE.Vector3(-rings[1].moon.dist, 0, 0),
    rotationSpeed: rings[1].moon.rotationSpeed,
    material: {mapPath: '../assets/moon.jpg', normalMapPath: '../assets/normal.jpg'}
  });
  moon.name = "moon";
  center.add(planet.add(moon));
  scaleObject(planet, 0.6);
  scaleObject(moon, 0.8);
}
