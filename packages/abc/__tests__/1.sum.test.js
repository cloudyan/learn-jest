
import sum from '../src/sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('test plus', () => {
  it('0.1 + 0.2 不等于 0.3', () => {
    expect(sum(0.1, 0.2)).not.toBe(0.3);
  })
  it('0.1 + 0.2 接近等于 0.3', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  })
})
