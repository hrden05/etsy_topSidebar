import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from '../App.jsx';
import Personalization from '../Personalization.jsx';
import Dropdown from '../Dropdown.jsx';
import StoreInfo from '../StoreInfo.jsx';
import ProductInfo from '../ProductInfo.jsx';

describe('App tests', () => {

  const wrapper = shallow(<App />);

  it('App: renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  })

  it('renders App component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders Personalization, Dropdown, StoreInfo, and ProductInfo components', () => {
    expect(wrapper.find(Personalization).exists()).toBe(true);
    expect(wrapper.find(Dropdown).exists()).toBe(true);
    expect(wrapper.find(StoreInfo).exists()).toBe(true);
    expect(wrapper.find(ProductInfo).exists()).toBe(true);
  })

  it('should call getProductInfo during componentDidMount', () => {
    const wrapper = mount(<App />);
    const instance = wrapper.instance();
    instance.componentDidMount();
    // jest.spyOn(instance, 'getProductInfo')
    expect(wrapper.state('store')).toBe(true);
  })

});

xdescribe('App: mount tests', () => {

  test('App: shallow wrapper instance should not be null', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance).to.be.instanceOf(Stateful);
  })
})