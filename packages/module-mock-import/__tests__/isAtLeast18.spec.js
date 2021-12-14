// isAtLeast18.spec.js
import isAtLeast18 from '@/isAtLeast18';
import isInteger from '@/isInteger';

// The mock factory returns a mocked function
jest.mock('@/isInteger', () => jest.fn());

// Clear mock data before each test
beforeEach(() => {
  isInteger.mockClear();
});

describe('isAtLeast18', () => {
  test('fails if value is not recognised as integer', () => {
    // For this test we'll mock isInteger to return `false`
    isInteger.mockImplementation(() => false);

    expect(isAtLeast18(123)).toBe(false);
    expect(isAtLeast18('abc')).toBe(false);

    // We expect isInteger to be called with 123
    expect(isInteger).toHaveBeenCalledWith(123);
    // We expect isInteger to be called once
    expect(isInteger).toHaveBeenCalledTimes(2);

    // Clear the mock so the next test starts with fresh data
    // isInteger.mockClear();
  });

  test('passes if value is recognised as integer and is at least 18', () => {
    // For this test we'll mock isInteger to return `true`
    isInteger.mockImplementation(() => true);

    expect(isAtLeast18(123)).toBe(true);
    expect(isAtLeast18('abc')).toBe(false);
  });
});
