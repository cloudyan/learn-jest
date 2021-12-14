# How to mock imported functions with Jest

- https://stackoverflow.com/questions/40465047/how-can-i-mock-an-es6-module-import-using-jest
- https://dev.to/dstrekelj/how-to-mock-imported-functions-with-jest-3pfl
- https://juejin.cn/post/6898738304754286605


```js
// The initial mock is a function that returns `true`.
const myMock = jest.fn(() => true);

// The new mock implementation has the function return `false`.
myMock.mockImplementation(() => false);
```
