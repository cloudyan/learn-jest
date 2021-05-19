import React from 'react';
import { create, act } from 'react-test-renderer';
import Foo from '../Foo.react';

// https://zh-hans.reactjs.org/docs/test-renderer.html

function InFoo(props) {
  return <div foo={props.foo} className="in-foo">InFoo</div>;
}

function Bar() {
  return (
    <div className="in-bar">
      <InFoo foo="bar" />
    </div>
  );
}

// jest.dontMock('..');

describe('<Bar />', () => {
  it('renders correctly', () => {
    const tree = create(<div className="title">xxx</div>);
    expect(tree).toMatchSnapshot();
  });

  it('test1', () => {
    const tree = create(<Bar />);
    expect(tree).toMatchSnapshot();

    const rootInstance = tree.root;
    expect(rootInstance.findByType(InFoo).props.foo).toBe('bar');
    expect(rootInstance.findByProps({className: "in-foo"}).children).toEqual(['InFoo']);
  });
});

describe('<Foo />', () => {
  it('should render without throwing an error', () => {
    const tree = create(<Foo title="First Demo" />);
    expect(tree).toMatchSnapshot();
  });

  it('should render without throwing an error 1', () => {
    const tree = create(
      <Foo title="First Demo">
        <p className="p">test</p>
      </Foo>,
    );
    expect(tree).toMatchSnapshot();
  });
});
