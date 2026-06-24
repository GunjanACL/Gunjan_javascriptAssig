//Build product JSON (id, name, price) and print details

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Tablet", price: 15000 }
];

for (let product of products) {
  console.log("ID:", product.id);
  console.log("Name:", product.name);
  console.log("Price:", product.price);
}
