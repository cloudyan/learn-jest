import React from 'react';
import ReactDOM from 'react-dom';
import { act, create } from 'react-test-renderer';
import Counter from '../Counter';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render and update a counter', () => {

  // 渲染组件
  let root;
  act(() => {
    root = create(<Counter />, container);
  });

  // 对根元素进行端言
  expect(root.toJSON()).toMatchSnapshot();

  expect(document.title).toBe('You clicked 0 times');
});
