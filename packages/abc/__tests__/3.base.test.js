
// 测试示例

describe('基本数据', () => {
  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a += 1) {
      for (let b = 1; b < 10; b += 1) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
})

describe('数组测试', () => {
  it('数组值是否相等', () => {
    expect([1, 2]).toEqual([1, 2])
    expect([{a: 1}, {b: 2}]).toEqual([{a: 1}, {b: 2}])
  })

  it('数组包含', () => {
    expect([1, 2]).toContain(2);
    const obj = {a: 1};
    expect([obj, {b: 2}]).toContain(obj);
    expect([{a: 1}, {b: 2}]).toContainEqual({a: 1});
  })
  it('数组子集测试', () => {
    const expected = [2, 3];
    expect([1,2,3,4,5,6]).toEqual(expect.arrayContaining(expected))
  })
});

describe('对象测试', () => {
  it('是否同一个对象', () => {
    const foo = { a: 1 }
    expect(foo).toBe(foo)
  })

  it('对象值是否相等', () => {
    expect({ a: 1, foo: { b: 2 } }).toEqual({ a: 1, foo: { b: 2 } })
  })

  it('对象赋值', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });

});

describe('plus', () => {
  it('two plus tow', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  });

  it('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    expect(value).not.toBe(0.3);
    expect(value).toBeCloseTo(0.3);
  });
})

describe('Match', () => {
  it('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });

  it('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });
})

describe('Throw Error', () => {
  it('compiling android goes as expected', () => {
    function compileAndroidCode() {
      throw new Error('you are useing the wrong JDK');
    }

    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);

    // 匹配错误信息
    expect(compileAndroidCode).toThrow('you are useing the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
  });
})

