
//Filter products with price < 50 and print result
const products = [
  { id: 1, name: "Pen", price: 10 },
  { id: 2, name: "Notebook", price: 60 },
  { id: 3, name: "Pencil", price: 20 },
  { id: 4, name: "Bag", price: 100 }
];

const filteredProducts = products.filter(product => product.price < 50);

console.log("Products with price < 50:");

filteredProducts.forEach(product => {
  console.log(product.id, product.name, product.price);
});
