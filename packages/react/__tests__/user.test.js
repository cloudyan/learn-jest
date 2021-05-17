// user.test.js

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import User from '../user';

const global = {
  fetch: () => {},
}

let container = null;
beforeEach(() => {
  // 创建一个 DOM 元素作为渲染目标
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // 退出时进行清理
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('渲染用户数据', async () => {
  const fakeUser = {
    name: 'Joni Baez',
    age: '32',
    address: '123, Charming Avenue'
  };

  // jest.spyOn()是jest.fn()的语法糖，它创建了一个和被spy的函数具有相同内部代码的mock函数

  jest.spyOn(global, 'fetch').mockImplementation(() => {
    console.log(111);
    return Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    });
  });

  // 使用异步的 act 应用执行成功的 promise
  await act(async () => {
    return render(<User id='123' />, container.innerHTML);
  });

  expect(container.querySelector('summary').textContent).toBe(fakeUser.name);
  expect(container.querySelector('strong').textContent).toBe(fakeUser.age);
  expect(container.textContent).toContain(fakeUser.address);

  // 清理 mock 以确保测试完全隔离
  global.fetch.mockRestore();

});
