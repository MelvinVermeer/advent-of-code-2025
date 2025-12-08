import { part1, part2 } from "./08-playground";
import { readFileSync } from "fs";

const data = readFileSync("src/data/08", "utf8").split("\n");
const sample = `162,817,812
57,618,57
906,360,560
592,479,940
352,342,300
466,668,158
542,29,236
431,825,988
739,650,466
52,470,668
216,146,977
819,987,18
117,168,530
805,96,715
346,949,466
970,615,88
941,993,340
862,61,35
984,92,344
425,690,689`.split("\n");

describe("08 - Playground", () => {
  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample, 10)).toEqual(40);
    });

    it("Answer", () => {
      expect(part1(data, 1000)).toEqual(352584);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(25272);
    });

    it("Answer", () => {
      expect(part2(data)).toEqual(9617397716);
    });
  });
});
