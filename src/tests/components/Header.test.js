import React from 'react';
import { shallow } from 'enzyme';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

// shallow rendering - no user interaction or lifecycle events simulated

test('render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
////////////////////////////////////////////////////////////////////////////////

// /* two sections in test below: 1st, shows basic example of using enzyme, 2nd, shows
// basic example using react-test-renderer. Both use shallow rendering */
// test('render header correctly', () => {
//   // find selects elements from the JSX we're rendering
//   // text returns the text of the element

//   // find and text are from enzyme
//   const wrapper = shallow(<Header />);
//   expect(wrapper.find('h1').text()).toBe('Expensify');

//   ///////////////////////////

//   // the below commands used react-test-renderer/shallow module
//   const renderer = new ReactShallowRenderer();
//   renderer.render(<Header />);
//   expect(renderer.getRenderOutput()).toMatchSnapshot();
// });
