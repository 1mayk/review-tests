const { soma, menos, mult, div } = require("../index.js");

test("soma de 1 + 1 retorna 2", () => {
  expect(soma(1, 1)).toBe(2);
});

test("subtração de 5 - 2 retorna 3", () => {
  expect(menos(5, 2)).toBe(3);
});

test("multiplicação de 2 + 2 retorna 4", () => {
  expect(mult(2, 2)).toBe(4);
});

test("divisão de 5 / 2 retorna 2.5", () => {
  expect(div(5, 2)).toBe(2.5);
});
