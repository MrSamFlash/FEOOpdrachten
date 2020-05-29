const passwordVerifier = require("./password-verifier.js");

test("Password should be valid", () => {
  expect(passwordVerifier("WincAca9").valid).toBe(true);
});
