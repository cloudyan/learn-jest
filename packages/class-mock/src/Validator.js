// Validator.js
export default class Validator {
  ruleMap = new Map();

  setRule(id, handler) {
    this.ruleMap.set(id, handler);
  }

  getRule(id) {
    return this.ruleMap.get(id);
  }

  validate(value, ruleIds) {
    const errors = [];

    for (const ruleId of ruleIds) {
      const ruleHandler = this.getRule(ruleId);

      if (!ruleHandler(value)) {
        errors.push(ruleId);
      }
    }

    return errors;
  }
};
