import { part1, part2 } from "./04-printing-department";
import { readFileSync } from "fs";

const data = readFileSync("src/data/04", "utf8").split("\n");
const sample = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`.split("\n");

describe("04 - Printing Department", () => {
  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(13);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(1395);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(43);
    });

    it("Answer", () => {
      expect(part2(data)).toEqual(8451);
    });
  });
});
