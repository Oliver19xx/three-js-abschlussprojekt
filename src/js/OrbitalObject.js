import * as THREE from "three";

export class OrbitalObject extends THREE.Mesh {
  /**
   * @type number
   */
  rotationSpeed;
  /**
   *
   * @param {Vector3} relativePosition
   * @param {number} rotationSpeed
   * @param materialParam {{mapPath:string,normalMapPath:string}}
   */
  constructor({
                relativePosition = new THREE.Vector3(0, 0, 0),
                rotationSpeed = 0.001,
                material: materialParam = {
                  mapPath: null,
                  normalMapPath: null
                }
              }) {
    const sphereRadius = 2;
    const sphereWidthDivisions = 32;
    const sphereHeightDivisions = 16;
    const sphereGeo = new THREE.SphereGeometry(sphereRadius, sphereWidthDivisions, sphereHeightDivisions);

    /** @type THREE.Material */
    let material;

    const textureLoader = new THREE.TextureLoader();
    new THREE.MeshPhongMaterial({
      transparent: true,
      opacity: 0.8
    });
    const meshStandardMaterial = new THREE.MeshStandardMaterial({
      map: textureLoader.load(materialParam.mapPath),
      normalMap: textureLoader.load(materialParam.normalMapPath),
    });
    meshStandardMaterial.emissiveMap = textureLoader.load(materialParam.normalMapPath);
    meshStandardMaterial.emissive = new THREE.Color(0x333);
    material = meshStandardMaterial;

    super(sphereGeo, material);

    this.rotationSpeed = rotationSpeed;

    // set position if handing over
    this.position.add(relativePosition);

    // set shaddow effects
    this.castShadow = true;
    this.receiveShadow = true;
  }

  /**
   * @return void
   */
  update() {
    // um Wendepunkt drehen
    rotateAboutPoint(this, this.parent.position, new THREE.Vector3(0, 1, 0), this.rotationSpeed, true);
    // Falls Kind-Elemente vorhanden, diese aktualisieren
    if (this.children.length > 0) this.children.forEach(elem => elem.update());
  }
}

/**
 * @param obj {THREE.Object3D} - das Objekt (THREE.Object3D or derived)
 * @param point {THREE.Vector3} - der Punkt der Rotation (THREE.Vector3)
 * @param theta {number} - radian Wert der Rotation
 * @param pointIsWorld {boolean} - gibt an ob der Punkt in der Welt liegt (default = false)
 */
function rotateAboutPoint(obj, point, axis, theta, pointIsWorld) {
  const thetaTimeDependent = App.TimeControl.mode * theta;

  pointIsWorld = (pointIsWorld === undefined) ? false : pointIsWorld;

  if (pointIsWorld) {
    obj.parent.localToWorld(obj.position); // compensate for world coordinate
  }

  obj.position.sub(point); // remove the offset
  obj.position.applyAxisAngle(axis, thetaTimeDependent); // Rotieren der Position
  obj.position.add(point); // re-add the offset

  if (pointIsWorld) {
    obj.parent.worldToLocal(obj.position); // TODO: undo die Weltkoordination compensate ?
  }

  obj.rotateOnAxis(axis, thetaTimeDependent); // rotiere das Objekt
}
