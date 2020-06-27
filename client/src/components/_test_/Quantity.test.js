import React from 'react';
import { shallow } from 'enzyme';
import Quantity from '../Quantity';

const wrapper = shallow(<Quantity />)

describe('Quantity component', () => {
  test('Quantity: renders without crashing', () => {
    wrapper;
  })
})