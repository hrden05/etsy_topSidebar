# Hipsy Sidebar Module

> Hipsy is an e-commerce site selling unique hand-crafted products. This project creates the product description module (store information, item information, purchase options, and personalization menu dropdown) for the Hipsy product detail page. This project was developed as one microservice for the entire product detail page in a service-oriented architecture. Other related services (image carousel, product information, similar products, and reviews) are all unified with this service via a proxy server.

## Technologies Used
<ul>
  <li>React</li>
  <li>Node</li>
  <li>Express</li>
  <li>MongoDB</li>
  <li>Mongoose</li>
  <li>Enzyme</li>
  <li>CircleCI</li>
  <li>Docker</li>
</ul>

## Related Projects
<ul>
  <li>https://github.com/hrden05/hipsy-image-carouselmain
</li>
  <li>https://github.com/hrden05/hipsy-similar-products
</li>
  <li>https://github.com/hrden05/hipsty-product-details-main
</li>
  <li>https://github.com/hrden05/etsy_reviews
</li>
  <li>https://github.com/hrden05/proxy
</li>
</ul>

## Usage
To run this repo, you will need to install dependencies and run appropriate scripts.

## Requirements
<ul>
  <li>Node 6.13.0</li>
  <li>npm</li>
  <li>MongoDB</li>
</ul>


## Development
Executing the code below will install dependencies, seed the database, start the server, and start webpack. Examine the package.json file for additional scripts.

> npm install
> npm run seed
> npm run server-dev
> npm run react-dev
> npm run test

## Testing
Unit tests built with Jest and Enzyme can be run with 'npm run test'. To see test coverage, run 'npm run test'.
