import React from 'react';
const css = {
  title: 'title',
}

const Foo = ({ title, children }) => (
  <h1 className={css.title}>
    {title}
    {children}
  </h1>
);

export default Foo;
