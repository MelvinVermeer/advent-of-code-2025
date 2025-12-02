import { part1, part2 } from "./00-template";
import { readFileSync } from "fs";

const data = readFileSync("src/data/00", "utf8").split("\n");
const sample = ``.split("\n");

describe("00 - Template", () => {
  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(sample);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(data);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(sample);
    });

    it("Answer", () => {
      expect(part2(data)).toEqual(data);
    });
  });
});
