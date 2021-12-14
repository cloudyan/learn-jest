// myModule-test.js
import myModule from '../src/myModule';
import * as dependency from '../src/dependency';

describe('myModule', () => {
  it('calls the dependency with double the input', () => {
    dependency.doSomething = jest.fn(); // Mutate the named export
    // dependency.default = jest.fn(); // Mutate the default export

    myModule(2);

    expect(dependency.doSomething).toBeCalledWith(4);
  });
});
