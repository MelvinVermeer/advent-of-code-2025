import { DisjointSet } from "./shared/disjoint-set";
import { distance3D } from "./shared/geometry";

export const part1 = (data: string[], pairs: number): any => {
  const connections = getConnections(data);
  const disjointSet = new DisjointSet(data.length);

  for (let i = 0; i < pairs; i++) {
    disjointSet.union(connections[i].a, connections[i].b);
  }

  return disjointSet.sizes
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a * b, 1);
};

export const part2 = (data: string[]): any => {
  const connections = getConnections(data);
  const disjointSet = new DisjointSet(data.length);

  let { a, b } = connections[0];

  for (const connection of connections) {
    if (disjointSet.union(connection.a, connection.b)) {
      ({ a, b } = connection); // Keep track of the last connection made
      if (disjointSet.components === 1) break;
    }
  }

  return (
    parseInt(data[a].split(",")[0], 10) * parseInt(data[b].split(",")[0], 10)
  );
};

function getConnections(data: string[]) {
  const points = data.map((line) => {
    const [x, y, z] = line.split(",").map((n) => parseInt(n, 10));
    return { x, y, z };
  });

  const connections: { a: number; b: number; distance: number }[] = [];

  for (let a = 0; a < points.length; a++) {
    for (let b = a + 1; b < points.length; b++) {
      connections.push({
        a,
        b,
        distance: distance3D(points[a], points[b]),
      });
    }
  }

  return connections.sort((a, b) => a.distance - b.distance);
}
