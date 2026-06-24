//Read product data from JSON and display
const fs = require("fs");

fs.readFile("products.json", "utf8", (err, data) => {
  if (err) {
    console.log(err.message);
    return;
  }

  const products = JSON.parse(data);

  products.forEach(product => {
    console.log(product.id, product.name, product.price);
  });
});