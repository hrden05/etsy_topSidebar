import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Personalization from './Personalization.jsx';
import Dropdown from './Dropdown.jsx';
import ProductInfo from './ProductInfo.jsx';
import StoreInfo from './StoreInfo.jsx';

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
      <div class="sidebarAll">
        <div class="sidebarBox">
          <div class="inSidebarBox">
            <StoreInfo id={store.store_id} user={store.username} sales={store.salesNum} rating={store.rating} />
            <ProductInfo id={product.product_id} bestseller={product.bestseller} name={product.name} price={product.price} stock={product.stock} category={product.category}/>
            <Dropdown id={product.product_id} category={product.category} color={product.color} quantity={product.quantity} size={product.size}/>
            <Personalization option={product.personalization}/>

            <button>Buy it now</button>
            <br></br>
            <button>Add to cart</button>

          </div>
        </div>
      </div>
    )
  }
}

export default App;