# learn-jest

学习 jest

## Jest

Jest是Facebook开源的一套JavaScript测试框架，它集成了断言、JSDom、覆盖率报告等开发者所需要的所有测试工具。

```js
// 常见命令
{
  "nocache": "jest --no-cache", //清除缓存
  "watch": "jest --watchAll", //实时监听
  "coverage": "jest --coverage",  //生成覆盖测试文档
  "verbose": "npx jest --verbose" //显示测试描述
}
```

### 配置

jest.config.js

```js
"jest": {
  verbose: true, // 运行时是否报告每个test的执行详情，默认为false
  transform: { // 是否对文件进行同步转义
    '^.+\\.jsx?$': 'babel-jest', // 用babel-jest进行转义，因此可以使用ES新特性
  },
  testRegex: '/__tests__/.*\\.(test|spec)\\.jsx?$',// 用于匹配test文件的正则表达式
  moduleFileExtensions: ['js', 'jsx'], // 模块使用的后缀，如.ts，.tsx
  moduleDirectories: ['node_modules', 'node_modules/antd', 'src'], // 所需要module的查找路径，默认是["node_modules"]
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__tests__/mocks/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  }, // 对应的mock方式
  testPathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/config/',
    '<rootDir>/docker/',
    '<rootDir>/docs/',
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/mocks/',
    '<rootDir>/__tests__/setup/',
  ], // 执行test前忽略的路径，匹配全路径。默认["/node_modules/"]
  coveragePathIgnorePatterns: ['node_modules', 'setup/.*-setup.js', 'mocks/.*.js'], //执行test前忽略的文件，匹配全路径。默认["/node_modules/"]
  setupFiles: ['<rootDir>/__tests__/setup/enzyme-setup.js'], // 初始化配置文件路径
}
```

### Jest 基础知识

#### 测试函数

```js
// 测试用例，可以写在 describe测试套件中，也可以单独写在测试套件外面
test('测试用列描述信息',()=>{

})
test.only(name, fn);
test.skip(name, fn);

// or it 和 test 用法相同，但不能和 test嵌套
it('测试用例描述信息',()=>{

})

// 测试套件，一组相关的测试用例
describe('关于每个功能或某个组件的单元测试', () => {
  // 不同用例的单元测试
})

// 只想执行/跳过其中一个测试套件
describe.only(name, fn)
describe.skip(name, fn)

beforeAll(fn)
afterAll(fn)
beforeEach(fn)
afterEach(fn)
```

#### 断言函数

测试即运行结果是否与我们预期结果一致，断言函数用来验证结果是否正确

```js
expect(运行结果).toBe(期望的结果);
//常见断言方法
expect(1).not.toBe(2)//判断不等
expect({a:1}).toBe({a:1})//判断两个对象是否相等
expect({ a: 1, foo: { b: 2 } }).toEqual({ a: 1, foo: { b: 2 } })

const n = {a: null, c: 1, d: true, e: false}
expect(n.a).toBeNull(); //判断是否为null
expect(n.b).toBeUndefined(); //判断是否为undefined
expect(n.c).toBeDefined(); //判断结果与toBeUndefined相反
expect(n.c).toBeTruthy(); //判断结果为true
expect(n.d).toBeTruthy(); //判断结果为true
expect(n.e).toBeFalsy(); //判断结果为false

expect(1).not.toBe(2)//判断不等
const v = 3.5;
expect(v).toBeGreaterThan(3); //大于3
expect(v).toBeGreaterThanOrEqual(3.5); //大于等于3.5
expect(v).toBeLessThan(5); //小于5
expect(v).toBeLessThanOrEqual(4.5); //小于等于4.5

expect(0.1+0.2).not.toBe(0.3); // 浮点数判断相等
expect(0.1+0.2).toBeCloseTo(0.3); // 浮点数判断相等

expect('Christoph').toMatch(/stop/); //正则表达式判断
expect(['one','two']).toContain('one'); //不解释
```

## 示例

参看：

- base
- async
  - callback
  - promise
  - async/await
- timer
- mock
- react
