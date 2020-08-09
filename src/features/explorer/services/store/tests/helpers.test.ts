import { filterOutDuplicates } from "../helpers";

describe("explorer helpers", () => {
  describe("filterOutDuplicates", () => {
    it("should filter duplicated numbers", () => {
      const result = filterOutDuplicates([1, 2, 3, 4, 5, 2, 6, 4, 7, 8, 9]);

      expect(result).toHaveLength(9);
    });
  });
});
