import { part1, part2 } from "./03-lobby";
import { readFileSync } from "fs";

const data = readFileSync("src/data/03", "utf8").split("\n");
const sample = `987654321111111
811111111111119
234234234234278
818181911112111`.split("\n");

describe("03 - Lobby", () => {
  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(357);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(17324);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(3121910778619);
    });

    it("Answer", () => {
      expect(part2(data)).toEqual(171846613143331);
    });
  });
});
