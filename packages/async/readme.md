# 异步测试

Jest提供了三种进行异步操作测试的方式。

## Callbacks

在callback方式中的测试实例第二个执行函数会有个参数done,只有当done被调用这个测试实例才算完结。

```js
test('the data is peanut butter',done=>{
  function callback(data) {
    expect(data).toBe('peanut butter');
    done();
  }

  fetchData(callback)
})
```

如果done() 未被调用，这个测试实例就算失败。

## Promises

如果你使用promises，在你的测试实例回调函数返回一个promise，Jest会等待这个promise状态变为resolve。如果promise状态变为rejected，这个测试实例会自动变成fail。

```js
test('the data is peanut butter',()=>{
  return fetchData().then(data=>{
    expect(data).toBe('peanut butter');
  })
})
```

也可以直接用resolves将放回结果进行验证。

```js
test('the data is peanut butter',()=>{
  return expect(fetchData()).resolves.toBe('peanut butter');
})
```

## Async/Await

使用async 定义测试实例回掉函数，用await等待异步执行。

```js
test('the data is peanut butter',async ()=>{
  await expect(fetchData()).resolves.toBe('peanut butter');
})
```
