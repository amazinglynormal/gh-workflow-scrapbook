const { subtract } = require("../index");

test("subtracts b from a, 3 - 2 == 1", () => {
  expect(subtract(3, 2)).toBe(1);
});
