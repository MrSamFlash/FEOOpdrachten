const functions = require("./functions.js");

test("Should contain elements", () => {
  expect(functions.isNotBlank()).toEqual(true);
});

test("Should contain 8 or more elements", () => {
  expect(functions.isLessThan8Chars()).toEqual(true);
});

test("Should contain uppercase letters", () => {
  expect(functions.hasUppercase()).toEqual(true);
});

test("Should contain lowercase letters", () => {
  expect(functions.hasLowercase()).toEqual(true);
});

test("Should contain digits", () => {
  expect(functions.hasDigit()).toEqual(true);
});
