const express = require('express');

const app = express();
const db = require('../database/index.js');

app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.log('listening on port: ', PORT)
});

app.get('/api/stores', (req, res) => {
  db.Store.find()
  .then(results => res.json({stores: results}))
  .catch(err => {
    console.log("error ")
    res.json({error: err})
  })
})

app.get('/api/products', (req, res) => {
  db.Product.find()
  .then(results => {
    res.json({stores: results})
  })
  .catch(err => {
    res.json({error: err})
  })
})