export const part1 = (data: string[]): any => {
  const DIAL_START = 50;
  let countIsAtZero = 0;

  let dialPosition = DIAL_START;

  for (const row of data) {
    const turnDirection = row[0];
    const turnAmount = parseInt(row.slice(1), 10);

    if (turnDirection === "L") {
      dialPosition -= turnAmount;
    } else if (turnDirection === "R") {
      dialPosition += turnAmount;
    }

    dialPosition = dialPosition % 100;

    if (dialPosition === 0) {
      countIsAtZero++;
    }
  }
  return countIsAtZero;
};

export const part2 = (data: string[]): any => {
  const DIAL_START = 50;
  let countPassesZero = 0;

  let dialPosition = DIAL_START;

  for (const row of data) {
    const turnDirection = row[0];
    const turnAmount = parseInt(row.slice(1), 10);

    if (turnDirection === "L") {
      countPassesZero +=
        Math.floor((dialPosition - 1) / 100) -
        Math.floor((dialPosition - turnAmount - 1) / 100);

      dialPosition = (((dialPosition - turnAmount) % 100) + 100) % 100;
    } else if (turnDirection === "R") {
      countPassesZero += Math.floor((dialPosition + turnAmount) / 100);

      dialPosition = (dialPosition + turnAmount) % 100;
    }
  }
  return countPassesZero;
};
