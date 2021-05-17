// 异步测试

// 使用 import 需要配置 @babel/preset-env
import { request } from '../src/utils';

describe('异步操作测试',  () => {

  it('异步测试', (done) => {
    request((res) => {
      console.log(res);
      done();
    });
  });
});
