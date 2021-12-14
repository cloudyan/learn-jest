// isAtLeast18.spec.js
import isAtLeast18 from '@/isAtLeast18';

// The mock factory returns the function () => false
jest.mock('@/isInteger', () => () => false);

describe('isAtLeast18', () => {
  it('fails if value is not recognised as integer', () => {
    // Should pass, but fails because of the isInteger() mock
    expect(isAtLeast18(123)).toBe(false);
    // Should fail either way
    expect(isAtLeast18('abc')).toBe(false);
  });
});
