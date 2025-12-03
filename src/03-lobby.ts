export const part1 = (banks: string[]): any => {
  return banks.map((bank) => getJoltage(bank, 2)).reduce(sum);
};

export const part2 = (banks: string[]): any => {
  return banks.map((bank) => getJoltage(bank, 12)).reduce(sum);
};

function getJoltage(bank: string, amountOfBatteries: number): number {
  let result = "";

  for (let i = 0; i < amountOfBatteries; i++) {
    const slice = bank.slice(0, 1 + bank.length - (amountOfBatteries - i));
    const highest = Math.max(...slice.split("").map((d) => parseInt(d, 10)));
    result += highest;
    bank = bank.slice(bank.indexOf(highest.toString()) + 1);
  }

  return parseInt(result, 10);
}

function sum(a: number, b: number): number {
  return a + b;
}
