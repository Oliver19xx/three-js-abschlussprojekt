/**
 *
 * @param obj Objekt, welche skaliert werden soll
 * @param scaleMultiplier Skalierungsverhältnis zur Scalierung des Elternelements oder zu 1
 */
export function scaleObject(obj, scaleMultiplier) {
  if (obj.parent)
    obj.scale.set(
      obj.parent.scale.x * scaleMultiplier,
      obj.parent.scale.y * scaleMultiplier,
      obj.parent.scale.z * scaleMultiplier
    );
  else
    obj.scale.set(
      scaleMultiplier,
      scaleMultiplier,
      scaleMultiplier
    );
}
