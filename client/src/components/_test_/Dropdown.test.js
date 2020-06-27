import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Dropdown from '../Dropdown.jsx';
import Size from '../Size.jsx';
import Colors from '../Colors.jsx';
import Quantity from '../Quantity.jsx';

describe('Dropdown component tests', () => {

  const wrapper = shallow(<Dropdown />);

  it('Dropdown: renders component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dropdown />, div);
  })

  it('renders Size, Colors, and Quantity components', () => {
    expect(wrapper.find(Size).exists()).toBe(true);
    expect(wrapper.find(Quantity).exists()).toBe(true);
    expect(wrapper.find(Colors).exists()).toBe(true);
  })

})