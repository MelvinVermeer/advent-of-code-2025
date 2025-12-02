import { part1, part2 } from "./02-gift-shop";
import { readFileSync } from "fs";

const data = readFileSync("src/data/02", "utf8").split("\n")[0];
const sample =
  "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124".split(
    "\n"
  )[0];

describe("02 - Gift Shop", () => {
  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(1227775554);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(54234399924);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(4174379265);
    });

    it("Answer", () => {
      // expect(part2(data)).toBeLessThan(70187097360); // too high
      // expect(part2(data)).toBeGreaterThan(1152592152); // too low
      // expect(part2(data)).toBeGreaterThan(70174374246); // too low
      expect(part2(data)).toEqual(70187097315);
    });
  });
});
