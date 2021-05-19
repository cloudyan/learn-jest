import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import Foo from '../Foo';


function InFoo() {
  return <div className="in-foo" />;
}

function Bar() {
  return (
    <div className="in-bar">
      <InFoo />
    </div>
  );
}

// jest.dontMock('..');

describe('<Bar />', () => {
  it('renders correctly', () => {
    const wrapper = render(<div className="title">xxx</div>);
    expect(wrapper).toMatchSnapshot();
  });

  it('test1', () => {
    const wrapper = shallow(<Bar />);
    expect(wrapper.html()).toEqual('<div class="in-bar"><div class="in-foo"></div></div>');
    expect(wrapper.find(InFoo).html()).toEqual('<div class="in-foo"></div>');
  });
});

describe('<Foo />', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<Foo title="First Demo" />);
    //
    expect(wrapper.html()).toEqual('<h1 class="title">First Demo</h1>');
    // expect(wrapper.equals('<p className="p">test</p>')).toBe(true);
    // expect(wrapper.contains('<p className="p">test</p>')).toBe(true);
  });

  it('should render without throwing an error 1', () => {
    const wrapper = shallow(
      <Foo title="First Demo">
        <p className="p">test</p>
      </Foo>,
    );
    expect(wrapper.html()).toEqual('<h1 class="title">First Demo<p class="p">test</p></h1>');
  });

  it('should render without throwing an error 2', () => {
    const wrapper = shallow(
      <Foo>
        <p className="p">test</p>
      </Foo>,
    );
    expect(wrapper.contains(<p className="p">test</p>)).toBe(true);
  });

  it('should be selectable by class "title"', () => {
    expect(shallow(<Foo />).is('.title')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(
      render(
        <Foo title="hello">
          <p className="foo">test</p>
        </Foo>,
      ).find('.foo').length,
    ).toBe(1);
  });

  it('should render to static HTML', () => {
    expect(render(<Foo title="Bar" />).text()).toEqual('Bar');
  });
});
