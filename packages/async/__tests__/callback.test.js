
function request(callback) {
  setTimeout(() => {
    const res = {code: 0, data: {}};
    callback && callback(res);
  }, 1000);
}

describe('异步 callback 操作测试', () => {
  jest.useFakeTimers();

  test('callback 测试', (done) => {
    request((res) => {
      console.log(res);
      done();
    });

    jest.runAllTimers();
  });
});
