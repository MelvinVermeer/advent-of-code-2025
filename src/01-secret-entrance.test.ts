import { part1, part2 } from "./01-secret-entrance";
import { readFileSync } from "fs";

const data = readFileSync("src/data/01", "utf8").split("\n");
const sample1 = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`.split("\n");

describe("01 - Secret Entrance", () => {
  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample1)).toEqual(3);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(969);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample1)).toEqual(6);
    });

    it("Answer", () => {
      expect(part2(data)).toBeGreaterThan(2578); // too low
      expect(part2(data)).toBeLessThan(6033); // too high
      expect(part2(data)).toBeGreaterThan(5405);
      expect(part2(data)).not.toEqual(5435);
      expect(part2(data)).toEqual(5887);
    });
  });
});
