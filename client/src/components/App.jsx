import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Dropdown from './Dropdown.jsx';
import ProductInfo from './ProductInfo.jsx';
import StoreInfo from './StoreInfo.jsx';
import Price from './Price.jsx';
import PurchaseButtons from './PurchaseButtons.jsx';

const ranNum100 = Math.ceil(Math.random() * 100);
const ranNum20 = Math.floor(Math.random() * 20);
const queryID = ranNum100;


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

    this.getProductInfo()
    .then( () => {
      this.getStoreInfo();
    })
  }

  getProductInfo() {
    // return axios.get(`/api/products/${queryID}`)
    return axios.get('api/products', {
      params: {
        queryID
      }
    })
    .then(results => {
      this.setState({
        product: results.data.products
      })
     })
    .catch(err => {console.log('Error retrieving product info: ', err)})
  }

  // getProductInfo() {
  //   axios.get('http://localhost:3000/api/products')
  //   .then(results => {
  //     this.setState({
  //       product: results.data.products[ranNum100]
  //     }, () => console.log(this.state.product))
  //    })
  //   .catch(err => {console.log('Error retrieving product info: ', err)})
  // }

  getStoreInfo() {
    const storeId = this.state.product.store_id;
    // axios.get(`/api/stores/${this.state.product.store_id}`)
    axios.get('api/stores', {
      params: {
        storeId,
      }
    })
    .then(results => {
      this.setState({
        store: results.data.stores
      })
    })
    .catch(err => {console.log("StoreGet error:", err)})
  }


  // // TODO: collection.findOne
  // getStoreInfo() {
  //   axios.get('http://localhost:3000/api/stores')
  //   .then(results => {
  //     this.setState({
  //       store: results.data.stores[ranNum20]
  //     })
  //   })
  //   .catch(err => {console.log("StoreGet error:", err)})
  // }



  render() {
    const store = this.state.store;
    const product = this.state.product;

    return (
      <div className="sidebarAll">
        <div className="sidebarBox">
          <div className="inSidebarBox">
            <StoreInfo id={store.store_id} user={store.username} sales={store.salesNum} rating={store.rating} />
            <ProductInfo id={product.product_id} bestseller={product.bestseller} name={product.name} price={product.price} stock={product.stock} category={product.category}/>
            <Price category={product.category} price={product.price} end={product.end} stock={product.stock} saleEnd={product.saleEnd}/>
            <Dropdown id={product.product_id} category={product.category} color={product.color} quantity={product.quantity} size={product.size} personalization={product.personalization} description={product.personalizationDescription}/>
            <PurchaseButtons />


          </div>
        </div>
      </div>
    )
  }
}

export default App;