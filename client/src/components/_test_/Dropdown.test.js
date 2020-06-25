import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from '../Dropdown.jsx';
import Size from '../Size.jsx';
import Colors from '../Colors.jsx';
import Quantity from '../Quantity.jsx';

describe('Dropdown component tests', () => {

  const wrapper = shallow(<Dropdown />);

  it('renders Dropdown component', () => {
    expect(wrapper.exists()).toBe(true);
  })

  it('renders Size, Colors, and Quantity components', () => {
    expect(wrapper.find(Size).exists()).toBe(true);
    expect(wrapper.find(Quantity).exists()).toBe(true);
    expect(wrapper.find(Colors).exists()).toBe(true);
  })

})