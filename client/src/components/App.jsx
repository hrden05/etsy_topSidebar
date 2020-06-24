import React from 'react';
import ReactDOM from 'react-dom';

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
    fetch('http://localhost:3000/api/products')
    .then(results => results.json())
    .then(data => {
      this.setState({
        product: data.products[ranNum100]
      }, () => console.log(this.state.product))
     })
    .catch(err => {console.log('Error retrieving product info: ', err)})
  }

  getStoreInfo() {
    fetch('http://localhost:3000/api/stores')
    .then(results => results.json())
    .then(data =>
        // {console.log(data)}
      this.setState({
        store: data.stores[ranNum20]
      })
    )
  }

  // getProductInfo() {
  //   axios.get(`http://localhost:3000/api/products`)
  //   .then(results => {
  //     console.log(results.data)
  //   })
    //  results.data.products
    // )
    // .then(data =>
    //   this.setState({
    //     product: data
    //   }))
  //   .catch(err => console.log('Error in frontend get: ', err))
  // }

  // getStoreInfo() {
  //   axios.get(`http://localhost:3000/api/stores`)
  //   .then(results => results.data.stores)
  //   .then(data =>
  //     this.setState({
  //       stores: data
  //     })
  //   )
  //   .catch(err => console.log('Error getting stores: ', err))
  // }


  render() {
    const store = this.state.store;
    const product = this.state.product;

    return (
      <div>

        <StoreInfo id={store.store_id} user={store.username} sales={store.salesNum} rating={store.rating} />
        <ProductInfo id={product.product_id} name={product.name} price={product.price} stock={product.stock}/>
        <Dropdown id={product.product_id} category={product.category} color={product.color} quantity={product.quantity} size={product.size}/>
        <Personalization option={product.personalization}/>

        <button>Buy it now</button>
        <br></br>
        <button>Add to cart</button>

      </div>
    )
  }
}

export default App;