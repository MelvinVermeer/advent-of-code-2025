type Point3D = {
  x: number;
  y: number;
  z: number;
};

/** https://en.wikipedia.org/wiki/Euclidean_distance */
export function distance3D(a: Point3D, b: Point3D): number {
  return Math.sqrt(
    Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2) + Math.pow(a.z - b.z, 2)
  );
}
