import { getNeighbors } from "./shared/grid";

export const part1 = (data: string[]): any => {
  const grid = data.map((line) => line.split(""));

  const rollsBefore = countRolls(grid);
  const rollsAfter = countRolls(removeRolls(grid));

  return rollsBefore - rollsAfter;
};

export const part2 = (data: string[]): any => {
  let grid = data.map((line) => line.split(""));

  const rollsBefore = countRolls(grid);
  let rollsAfter = rollsBefore;

  while (true) {
    grid = removeRolls(grid);
    const newCount = countRolls(grid);
    if (newCount === rollsAfter) {
      break;
    }
    rollsAfter = newCount;
  }

  return rollsBefore - rollsAfter;
};

function removeRolls(grid: string[][]): string[][] {
  const newGrid = grid.map((line) => [...line]);

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] !== "@") continue;

      const rolls = getNeighbors(grid, x, y).filter((cell) => cell === "@");
      if (rolls.length > 3) continue;

      newGrid[y][x] = ".";
    }
  }

  return newGrid;
}

function countRolls(grid: string[][]): number {
  return grid.flat().filter((cell) => cell === "@").length;
}
