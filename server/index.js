const express = require('express');

const app = express();
const db = require('../database/index.js');

app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.log('listening on port: ', PORT)
});

app.get('api/stores', (req, res) => {
  const queryString = db.Store.find();
  db.query(queryString, (err, results) => {
    if (err) {
      console.log('Rrror retrieving stores from db')
    } else {
      console.log('Retrieved stores from db')
      res.json({
        stores: results
      })
    }
  })
})

app.get('api/products', (req, res) => {
  const queryString = db.Product.find();
  db.query(query, (err, results) => {
    if (err) {
      console.log('Error retrieving products from db');
    } else {
      console.log('Retrieved products from db')
      res.json({
        products: results
      })
    }
  })
})