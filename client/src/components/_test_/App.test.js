import React from 'react';
import { shallow } from 'enzyme';
import App from '../App.jsx';
import Personalization from '../Personalization.jsx';
import Dropdown from '../Dropdown.jsx';
import StoreInfo from '../StoreInfo.jsx';
import ProductInfo from '../ProductInfo.jsx';

describe('App tests', () => {

  const wrapper = shallow(<App />);

  it('renders App component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders Personalization, Dropdown, StoreInfo, and ProductInfo components', () => {
    expect(wrapper.find(Personalization).exists()).toBe(true);
    expect(wrapper.find(Dropdown).exists()).toBe(true);
    expect(wrapper.find(StoreInfo).exists()).toBe(true);
    expect(wrapper.find(ProductInfo).exists()).toBe(true);
  })

  it('populates App state', () => {
    const componentInstance = wrapper.instance();
    componentInstance.componentDidMount();
    done()
    expect(wrapper.state('product')).toHaveLength(100)
  })
});