describe('outer', () => {
  console.log('describe outer-a'); // 1

  describe('describe inner 1', () => {
    console.log('describe inner 1'); // 2
    test('test 1', () => {
      console.log('test for describe inner 1'); // 6
      expect(true).toEqual(true);
    });
  });

  console.log('describe outer-b'); // 3

  test('test 1', () => {
    console.log('test for describe outer'); // 7
    expect(true).toEqual(true);
  });

  describe('describe inner 2', () => {
    console.log('describe inner 2'); // 4
    test('test for describe inner 2', () => {
      console.log('test for describe inner 2'); // 8
      expect(false).toEqual(false);
    });
  });

  console.log('describe outer-c'); // 5
});


// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test for describe inner 1
// test for describe outer
// test for describe inner 2
