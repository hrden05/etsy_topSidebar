import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Dropdown from './Dropdown.jsx';
import ProductInfo from './ProductInfo.jsx';
import StoreInfo from './StoreInfo.jsx';
import Price from './Price.jsx';

const ranNum100 = Math.floor(Math.random() * 100);
const ranNum20 = Math.floor(Math.random() * 20);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: '',
      store: ''
    }

    this.getProductInfo = this.getProductInfo.bind(this);
    this.getStoreInfo = this.getStoreInfo.bind(this);
  }

  componentDidMount() {
    this.getProductInfo();
    this.getStoreInfo();
  }

  getProductInfo() {
    axios.get('http://localhost:3000/api/products')
    .then(results => {
      this.setState({
        product: results.data.products[ranNum100]
      }, () => console.log(this.state.product))
     })
    .catch(err => {console.log('Error retrieving product info: ', err)})
  }

  getStoreInfo() {
    axios.get('http://localhost:3000/api/stores')
    .then(results => {
      this.setState({
        store: results.data.stores[ranNum20]
      })
    })
  }

  render() {
    const store = this.state.store;
    const product = this.state.product;

    return (
      <div className="sidebarAll">
        <div className="sidebarBox">
          <div className="inSidebarBox">
            <StoreInfo id={store.store_id} user={store.username} sales={store.salesNum} rating={store.rating} />
            <ProductInfo id={product.product_id} bestseller={product.bestseller} name={product.name} price={product.price} stock={product.stock} category={product.category}/>
            <Price category={product.category} price={product.price} end={product.end} stock={product.stock}/>
            <Dropdown id={product.product_id} category={product.category} color={product.color} quantity={product.quantity} size={product.size} option={product.personalization}/>

            <div className="buttonBox">
              <div className="buttonBuyBox">
                <form className="buttonBuyInBox">
                  <button className="buttonBuy">
                    Buy it now
                  </button>
                </form>
              </div>
              <div className="buttonAddBox">
                <button className="buttonAdd">
                  Add to cart
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default App;