import { part1, part2 } from "./05-cafeteria";
import { readFileSync } from "fs";

const data = readFileSync("src/data/05", "utf8").split("\n\n");
const sample = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`.split("\n\n");

describe("05 - Cafeteria", () => {
  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(3);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(567);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(14);
    });

    it("Answer", () => {
      expect(part2(data)).toEqual(354149806372909);
    });
  });
});
