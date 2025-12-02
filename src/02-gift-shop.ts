export const part1 = (data: string): any => {
  return data
    .split(",")
    .map((range) => range.split("-").map((n) => parseInt(n, 10)))
    .map(([start, end]) =>
      new Array(end - start + 1).fill(0).map((_, i) => start + i)
    )
    .flat()
    .filter((id) => !isValidId(id.toString()))
    .reduce(sum);
};

function isValidId(id: string): boolean {
  const firstHalf = id.slice(0, id.length / 2);
  const secondHalf = id.slice(id.length / 2);

  return firstHalf !== secondHalf;
}

export const part2 = (data: string): any => {
  return data
    .split(",")
    .map((range) => range.split("-").map((n) => parseInt(n, 10)))
    .map(([start, end]) =>
      new Array(end - start + 1).fill(0).map((_, i) => start + i)
    )
    .flat()
    .filter((id) => containsRepeatingDigit(id.toString()))
    .reduce(sum);
};

function containsRepeatingDigit(id: string): boolean {
  for (let sectionLength = 1; sectionLength <= id.length / 2; sectionLength++) {
    const repeated = id
      .slice(0, sectionLength)
      .repeat(id.length / sectionLength);

    if (id === repeated) {
      return true;
    }
  }

  return false;
}

function sum(a: number, b: number): number {
  return a + b;
}
