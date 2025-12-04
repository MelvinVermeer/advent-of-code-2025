const neighbors = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

export function getNeighbors<T>(grid: T[][], x: number, y: number): T[] {
  return neighbors
    .map(([nx, ny]) => grid[y + ny]?.[x + nx])
    .filter((cell) => cell !== undefined) as T[];
}
