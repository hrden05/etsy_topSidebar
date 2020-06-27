import React from 'react';
import { shallow } from 'enzyme';
import Personalization from '../Personalization.jsx';

it('renders without crashing', () => {
  shallow(<Personalization />);
})