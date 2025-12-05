export const part1 = ([r, i]: string[]): any => {
  const ranges = r.split("\n").map((range) => range.split("-").map(Number));
  const ingredients = i.split("\n").map(Number);

  return ingredients.filter((ingredient) =>
    ranges.some(([min, max]) => ingredient >= min && ingredient <= max)
  ).length;
};

export const part2 = ([r]: string[]): any => {
  const ranges = r.split("\n").map((range) => range.split("-").map(Number));

  return combineRanges(ranges)
    .map(([min, max]) => max - min + 1)
    .reduce(sum);
};

function combineRanges(ranges: number[][]): number[][] {
  if (ranges.length === 0) return [];

  const sorted = ranges.sort(([minA], [minB]) => minA - minB);

  const merged: number[][] = [];
  let [curMin, curMax] = sorted[0];

  for (let i = 0; i < sorted.length; i++) {
    const [min, max] = sorted[i];
    if (curMax >= min) {
      curMax = Math.max(curMax, max);
    } else {
      merged.push([curMin, curMax]);
      [curMin, curMax] = [min, max];
    }
  }
  merged.push([curMin, curMax]);
  return merged;
}

function sum(a: number, b: number): number {
  return a + b;
}
