import Validator from '../src/Validator';

describe("Validator", () => {
  const validator = new Validator();
  const setRuleSpy = jest.spyOn(validator, "setRule");
  const getRuleSpy = jest.spyOn(validator, "getRule");
  const validateSpy = jest.spyOn(validator, "validate");

  const trueRule = jest.fn(() => true);

  describe(".setRule", () => {
    test("defines a function", () => {
      expect(typeof validator.setRule).toBe("function");
    });

    test("registers rule when called", () => {
      expect(validator.setRule("true", trueRule)).toBeUndefined();
      expect(setRuleSpy).toHaveBeenCalledWith("true", trueRule);

      setRuleSpy.mockClear();
    });
  });

  describe(".getRule", () => {
    test("defines a function", () => {
      expect(typeof validator.setRule).toBe("function");
    });

    test("returns registered rule", () => {
      expect(validator.getRule("true")).toBe(trueRule);
      expect(getRuleSpy).toHaveBeenCalledWith("true");

      getRuleSpy.mockClear();
    });
  });

  describe(".validate", () => {
    test("defines a function", () => {
      expect(typeof validator.setRule).toBe("function");
    });

    test("validates value without errors", () => {
      const result = validator.validate("value", ["true"]);

      expect(validateSpy).toHaveBeenCalledWith("value", ["true"]);
      expect(getRuleSpy).toHaveBeenCalledWith("true");
      expect(getRuleSpy).toHaveReturnedWith(trueRule);
      expect(trueRule).toHaveBeenCalledWith("value");
      expect(trueRule).toHaveReturnedWith(true);
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBe(0);

      validateSpy.mockClear();
      getRuleSpy.mockClear();
      trueRule.mockClear();
    });
  });
});
