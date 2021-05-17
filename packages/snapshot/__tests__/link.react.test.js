// Copyright 2004-present Facebook. All Rights Reserved.

'use strict';

import React from 'react';
import Link from '../Link.react';
import { create, act } from 'react-test-renderer';

// [act()](https://zh-hans.reactjs.org/docs/test-utils.html#act)
// 为断言准备一个组件，包裹要渲染的代码并在调用 act() 时执行更新。这会使得测试更接近 React 在浏览器中的工作方式。

it('renders correctly', () => {
  let tree;
  act(() => {
    tree = create(<Link page="http://www.facebook.com">Facebook</Link>);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

it('renders as an anchor when no page is set', () => {
  let tree;
  act(() => {
    tree = create(<Link>Facebook</Link>)
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

it('properly escapes quotes', () => {
  let tree;
  act(() => {
    tree = create(<Link>{"\"Facebook\" \\'is \\ 'awesome'"}</Link>)
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

it('changes the class when hovered', () => {
  let component;
  act(() => {
    component = create(<Link page="http://www.facebook.com">Facebook</Link>);
  });
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
